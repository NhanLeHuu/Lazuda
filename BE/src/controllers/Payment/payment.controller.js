const PayMentModel = require("../../models/payment.model");
const nodeMailer = require("nodemailer");
const IpAddress = require("../../models/ipaddress");

var ip = new IpAddress().getIp()["Ethernet"][0];

var thongtin = {
    user: { id: '' },
    thongtindonhang: { sanpham: [] },
    mainaddress: { fulladdress: '' },
    ngayOrder: '',
    methodPayment: ''
}

var paymented = {}

class PaymentController {

    getPayment(req, res) {
        // 
        var ipAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress

        var config = require('../../config/default.json');
        var dateFormat = require('dateformat');


        var tmnCode = config.vnp_TmnCode;
        var secretKey = config.vnp_HashSecret;
        var vnpUrl = config.vnp_Url;
        var returnUrl = "http://" + ip + config.vnp_ReturnUrl;
        var date = new Date();

        var createDate = dateFormat(date, 'yyyymmddHHmmss');
        var orderId = dateFormat(date, 'HHmmss');
        var body = req.body
        var amountOrder = body.amount
        var orderDescriptionOrder = 'Thanh Toan Don Dat Hang Tai Shendu : ' + body.orderDescription.toString()
        var thongtinS = body.thongtin
        thongtinS.ngayOrder = body.orderDescription.toString()

        thongtin = thongtinS
            // test
        var test = {
            orderType: 'billpayment',
            amount: amountOrder,
            orderDescription: orderDescriptionOrder,
            bankCode: '',
            language: 'vn'
        }

        // var amount = req.body.amount;
        // var bankCode = req.body.bankCode;

        // var orderInfo = req.body.orderDescription;
        // var orderType = req.body.orderType;
        // var locale = req.body.language;
        var amount = test.amount;
        var bankCode = test.bankCode;

        var orderInfo = test.orderDescription;
        var orderType = test.orderType;
        var locale = test.language;


        if (locale === null || locale === '') {
            locale = 'vn';
        }
        var currCode = 'VND';
        var vnp_Params = {
            vnp_Version: "",
            vnp_Command: "",
            vnp_TmnCode: "",
            vnp_Locale: "",
            vnp_CurrCode: "",
            vnp_TxnRef: "",
            vnp_OrderInfo: "",
            vnp_OrderType: "",
            vnp_Amount: 0,
            vnp_ReturnUrl: "",
            vnp_IpAddr: "",
            vnp_CreateDate: ""
        };
        vnp_Params['vnp_Version'] = '2';
        vnp_Params['vnp_Command'] = 'pay';
        vnp_Params['vnp_TmnCode'] = tmnCode;
        // vnp_Params['vnp_Merchant'] = ''
        vnp_Params['vnp_Locale'] = locale;
        vnp_Params['vnp_CurrCode'] = currCode;
        vnp_Params['vnp_TxnRef'] = orderId;
        vnp_Params['vnp_OrderInfo'] = orderInfo;
        vnp_Params['vnp_OrderType'] = orderType;
        vnp_Params['vnp_Amount'] = parseInt(amount) * 100;
        vnp_Params['vnp_ReturnUrl'] = returnUrl;
        vnp_Params['vnp_IpAddr'] = ipAddr;
        vnp_Params['vnp_CreateDate'] = createDate;
        if (bankCode !== null && bankCode !== '') {
            vnp_Params['vnp_BankCode'] = bankCode;
        }

        // vnp_Params = this.sortObject(vnp_Params);

        var sorted = {},
            key, a = [];

        for (key in vnp_Params) {
            if (vnp_Params.hasOwnProperty(key)) {
                a.push(key);
            }
        }

        a.sort();

        for (key = 0; key < a.length; key++) {
            sorted[a[key]] = vnp_Params[a[key]];
        }
        vnp_Params = sorted;

        var querystring = require('qs');
        var signData = secretKey + querystring.stringify(vnp_Params, { encode: false });
        var sha256 = require('sha256');

        var secureHash = sha256(signData);

        vnp_Params['vnp_SecureHashType'] = 'SHA256';
        vnp_Params['vnp_SecureHash'] = secureHash;
        vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: true });

        res.status(200).json({ status: '200', data: vnpUrl })
    }

    sortObject(o) {
        var sorted = {},
            key, a = [];

        for (key in o) {
            if (o.hasOwnProperty(key)) {
                a.push(key);
            }
        }

        a.sort();

        for (key = 0; key < a.length; key++) {
            sorted[a[key]] = o[a[key]];
        }
        return sorted;
    }

    returnPayment(req, res) {
        var vnp_Params = req.query;

        var secureHash = vnp_Params['vnp_SecureHash'];

        delete vnp_Params['vnp_SecureHash'];
        delete vnp_Params['vnp_SecureHashType'];

        var sorted = {},
            key, a = [];

        for (key in vnp_Params) {
            if (vnp_Params.hasOwnProperty(key)) {
                a.push(key);
            }
        }

        a.sort();

        for (key = 0; key < a.length; key++) {
            sorted[a[key]] = vnp_Params[a[key]];
        }
        vnp_Params = sorted;

        var config = require('../../config/default.json');
        var tmnCode = config.vnp_TmnCode;
        var secretKey = config.vnp_HashSecret;

        var querystring = require('qs');
        var signData = secretKey + querystring.stringify(vnp_Params, { encode: false });

        var sha256 = require('sha256');

        var checkSum = sha256(signData);

        var trangthaidonhang = this.assignStatusDonHang(req, res);
        var thongtinthanhtoan = {
            // số tiền
            sotien: vnp_Params.vnp_Amount,
            // tên ngân hàng
            bank: vnp_Params.vnp_BankCode,
            // mã số giao dịch
            transaction: vnp_Params.vnp_BankTranNo,
            // loại card
            type: vnp_Params.vnp_CardType,
            // messsage
            message: vnp_Params.vnp_OrderInfo,
        }

        if (secureHash === checkSum && trangthaidonhang) {
            // this.sendMail(req, res)
            //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
            res.redirect('http://localhost:8080/gdsuccess');
            paymented = thongtinthanhtoan
                // res.render('success', { code: vnp_Params['vnCode'] })
        } else {
            res.redirect('http://localhost:8080/gdsuccess');
            paymented = thongtinthanhtoan
        }
    }

    getPaymentSuccess(req, res) {
        res.status(200).json(paymented)
    }

    sendMail(req, res) {
        // Những thông tin dưới đây các bạn có thể ném nó vào biến môi trường env nhé.
        // Vì để demo nên mình để các biến const ở đây.
        const adminEmail = 'yubi275@gmail.com'
        const adminPassword = 'Kiethao123!'
            // Mình sử dụng host của google - gmail
        const mailHost = 'smtp.gmail.com'
            // 587 là một cổng tiêu chuẩn và phổ biến trong giao thức SMTP
        const mailPort = 587
            // Khởi tạo một thằng transporter object sử dụng chuẩn giao thức truyền tải SMTP với các thông tin cấu hình ở trên.
        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            host: mailHost,
            port: mailPort,
            secure: false, // nếu các bạn dùng port 465 (smtps) thì để true, còn lại hãy để false cho tất cả các port khác
            auth: {
                user: adminEmail,
                pass: adminPassword
            }
        })

        const mailoptions = {
                from: adminEmail, // địa chỉ admin email bạn dùng để gửi
                to: "kiethao112@gmail.com", // địa chỉ gửi đến
                subject: "Thông Tin Đặt Hàng Từ Shendu", // Tiêu đề của mail
                html: `<h1>Đặt hàng thành công</h1><br/><h2>shendu</h2>` // Phần nội dung mail mình sẽ dùng html thay vì thuần văn bản thông thường.
            }
            // hàm transporter.sendMail() này sẽ trả về cho chúng ta một Promise
        transporter.sendMail(mailoptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info);
            }
        })
    }

    getPaymentBy(req, res) {
        var body = req.body

        var user = body.user
        var sanpham = body.thongtin.sanpham
        var address = body.thongtin.mainaddress
        var order = body.ngayOrder

        new Promise((resolve, reject) => {
            sanpham.forEach((item, index) => {
                var xacnhan = {
                    iduser: user.id,
                    idsanpham: item.id,
                    typemenu: item.typemenu,
                    madonhang: item.madonhang,
                    tinhtrangpayment: thongtin.methodPayment,
                    trangthaigiaohang: 'Đơn hàng đã xác nhận',
                    soluong: item.amount,
                    tongcong: item.tongcong,
                    phigiaohang: '20000',
                    diachigiaohang: address.fulladdress,
                    ngaydathang: order
                }
                var param = [
                    xacnhan.iduser.toString(),
                    xacnhan.idsanpham.toString(),
                    xacnhan.typemenu.toString(),
                    xacnhan.madonhang.toString(),
                    xacnhan.tinhtrangpayment.toString(),
                    xacnhan.trangthaigiaohang.toString(),
                    xacnhan.soluong.toString(),
                    xacnhan.tongcong.toString(),
                    xacnhan.phigiaohang.toString(),
                    xacnhan.diachigiaohang.toString(),
                    xacnhan.ngaydathang.toString()
                ]
                new PayMentModel().donhang(param, (result) => {
                    if ((index + 1) == sanpham.length) {
                        resolve(true);
                    }
                })
            })
        }).then(data => {
            if (data) {
                res.status(200).json({
                    status: 200,
                    data
                })
            } else {
                res.status(200).json({
                    status: 304,
                    data
                })
            }
        })
    }

    assignStatusDonHang(req, res) {
        var user = thongtin.user
        var sanpham = thongtin.thongtindonhang.sanpham
        var address = thongtin.mainaddress
        var order = thongtin.ngayOrder

        new Promise((resolve, reject) => {
            sanpham.forEach((item, index) => {
                var xacnhan = {
                    iduser: user.id,
                    idsanpham: item.id,
                    typemenu: item.typemenu,
                    madonhang: item.madonhang,
                    tinhtrangpayment: thongtin.methodPayment,
                    trangthaigiaohang: 'Đơn hàng đã xác nhận',
                    soluong: item.amount,
                    tongcong: item.tongcong,
                    phigiaohang: '20000',
                    diachigiaohang: address.fulladdress,
                    ngaydathang: order
                }
                var param = [
                    xacnhan.iduser.toString(),
                    xacnhan.idsanpham.toString(),
                    xacnhan.typemenu.toString(),
                    xacnhan.madonhang.toString(),
                    xacnhan.tinhtrangpayment.toString(),
                    xacnhan.trangthaigiaohang.toString(),
                    xacnhan.soluong.toString(),
                    xacnhan.tongcong.toString(),
                    xacnhan.phigiaohang.toString(),
                    xacnhan.diachigiaohang.toString(),
                    xacnhan.ngaydathang.toString()
                ]
                new PayMentModel().donhang(param, (result) => {
                    if ((index + 1) == sanpham.length) {
                        resolve(true);
                    }
                })
            })
        }).then(data => {
            if (data) {
                return true
            } else {
                return false
            }
        })

    }
}

module.exports = PaymentController