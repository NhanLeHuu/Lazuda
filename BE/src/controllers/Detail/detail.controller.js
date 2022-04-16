const DetailModel = require("../../models/detail.model");

class DetailController {

    sendChat(req, res) {
        var body = req.body;
        var table = body.table;
        var message = body.message;
        var id = body.id;
        console.log(body)
        new DetailModel().onSendChat(table, message, id, (data) => {
            res.status(200).json({
                status: 200,
                data: "success"
            })
        });
    }

    getProductDetail(req, res) {
        var id = req.params.id
        var name = req.params.name

        new DetailModel().getDetail(id, name, (data) => {
            this.getTypeDetail(req, res, data, name);
        });
    }

    getTypeDetail(req, res, data, name) {

        switch (name) {
            case 'smartphone':
                this.resSmartPhone(req, res, data);
                break;
            case 'tivi':
                this.resTivi(req, res, data);
                break;
            case 'tulanh':
                this.resTulanh(req, res, data);
            case 'dongho':
                this.resDongHo(req, res, data);
                break;
            case 'tantrangnhacua':
                this.resTanTrangNhaCua(req, res, data);
                break;
            case 'mayanhmayquayphim':
                this.resMayAnhMayQuayPhim(req, res, data);
                break;
            case 'thietbiamthanh':
                this.resThietBiAmThanh(req, res, data);
                break;
            case 'thietbiamthanh':
                this.resTheThaoDaNgoaiGiaiTri(req, res, data);
                break;
            case 'sachvanphongpham':
                this.resSachVanPhongPham(req, res, data);
                break;
            case 'vatphamphongthuy':
                this.resVatPhamPhongThuy(req, res, data);
                break;
            case 'chamsocthucung':
                this.resChamSocThuCung(req, res, data);
                break;
            case 'trangsuc':
                this.resTrangSuc(req, res, data);
                break;
            default:
                break;
        }

    }

    resTrangSuc(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: [
                { chatlieu: thongtin.chatlieu, name: 'Chất liệu' },
                { doituong: thongtin.doituong, name: 'Đối tượng' },
                { xuatxu: thongtin.xuatxu, name: 'Xuất xứ' }
            ]
        })
    }

    resChamSocThuCung(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: [
                { dungtichtrongluong: thongtin.dungtichtrongluong, name: 'Dung tích/trọng lượng' },
                { xuatxu: thongtin.xuatxu, name: 'Xuất xứ' },
                { chatlieu: thongtin.chatlieu, name: 'Chất liệu' },
                { chatvai: thongtin.chatvai, name: 'Chất vãi' }
            ]
        })
    }

    resVatPhamPhongThuy(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: [
                { chatlieu: thongtin.chatlieu, name: 'Chất liệu' },
                { kichthuoc: thongtin.kichthuoc, name: 'Kích thước' }
            ]
        })
    }

    resSachVanPhongPham(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: []
        })
    }

    resTheThaoDaNgoaiGiaiTri(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: [
                { loaivanh: thongtin.loaivanh, name: 'Loại vành' },
                { loaikhung: thongtin.loaikhung, name: 'Loại khung' },
                { kieuvanh: thongtin.kieuvanh, name: 'Kiểu vành' },
                { kichthuocbanhxe: thongtin.kichthuocbanhxe, name: 'Kích thước bánh xe' },
                { xuatxu: thongtin.xuatxu, name: 'Xuất xứ' }
            ]
        })
    }

    resThietBiAmThanh(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: [
                { baohanh: thongtin.baohanh, name: 'Bảo hành' },
                { hangsanxuat: thongtin.hangsanxuat, name: 'Hãng sản xuất' },
                { phuongthucbaohanh: thongtin.phuongthucbaohanh, name: 'Phương thức bảo hành' }
            ]
        })
    }

    resMayAnhMayQuayPhim(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: [
                { nguongoc: thongtin.nguongoc, name: 'Nguồn gốc' },
                { kichthuocmanhinhlcd: thongtin.kichthuocmanhinhlcd, name: 'Kích thước màn hình LCD' },
                { megapixel: thongtin.megapixel, name: 'Megapixel' },
                { baohanh: thongtin.baohanh, name: 'Bảo hành' },
                { hangsanxuat: thongtin.hangsanxuat, name: 'Hãng sản xuất' }
            ]
        })
    }

    resTanTrangNhaCua(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: []
        })
    }

    resDongHo(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: [
                { baohanh: thongtin.baohanh, name: 'Bảo hành' },
                { matdongho: thongtin.matdongho, name: 'Mặt đồng hồ' },
                { loaimay: thongtin.loaimay, name: 'Loại máy' },
                { gioitinh: thongtin.gioitinh, name: 'Giới tính' },
                { dochiunuoc: thongtin.dochiunuoc, name: 'Độ chịu nước' },
                { kieukhoa: thongtin.kieukhoa, name: 'Kiểu khoá' },
                { loaiday: thongtin.loaiday, name: 'Loại dây' },
                { duongkinhmat: thongtin.duongkinhmat, name: 'Đường kính mặt' },
                { xuatxu: thongtin.xuatxu, name: 'Xuất xứ' },
                { chatlieumatkinh: thongtin.chatlieumatkinh, name: 'Chất liệu mặt kính' }
            ]
        })
    }

    resTulanh(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: [
                { tinhnangnoitroi: thongtin.tinhnangnoitroi, name: 'Tính năng nổi trội' },
                { dungtich: thongtin.dungtich, name: 'Dung tích' },
                { khuvucgiaohang: thongtin.khuvucgiaohang, name: 'Khu vực giao hàng' },
                { kieudangtulanh: thongtin.kieudangtulanh, name: 'Kiểu dáng tủ lạnh' },
                { phuongthucbaohanh: thongtin.phuongthucbaohanh, name: 'Phương thức bảo hành' },
                { socuatu: thongtin.socuatu, name: 'Số cửa tủ' },
                { baohanh: thongtin.baohanh, name: 'Bảo hành' },
                { xuatxu: thongtin.xuatxu, name: 'Xuất xứ' },
                { dungtichthucte: thongtin.dungtichthucte, name: 'Dung tích thực tế' },
            ]
        })
    }

    resTivi(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: [
                { tinhnangnoitroi: thongtin.tinhnangnoitroi, name: 'Tính năng nổi trội' },
                { uudaikhimua: thongtin.uudaikhimua, name: 'Ưu đãi khi mua' },
                { khuvucgiaohang: thongtin.khuvucgiaohang, name: 'Khu vực giao hàng' },
                { baohanh: thongtin.baohanh, name: 'Bảo hành' },
                { dophangiai: thongtin.dophangiai, name: 'Độ phân giải' },
                { hangsanxuat: thongtin.hangsanxuat, name: 'Hãng sản xuất' },
                { kichthuoctv: thongtin.kichthuoctv, name: 'Kích thước tivi' },
                { phuongthucbaohanh: thongtin.phuongthucbaohanh, name: 'Phương thước bảo hành' },
                { xuatxu: thongtin.xuatxu, name: 'Xuất xứ' }
            ]
        });
    }

    resSmartPhone(req, res, data) {
        var thongtin = data[0]
        res.status(200).json({
            product: {
                id: thongtin.id,
                name: thongtin.name,
                price: thongtin.price,
                summary: thongtin.summary,
                discount: thongtin.discount,
                soluong: thongtin.soluong,
                src: thongtin.src,
                img: thongtin.img,
                description: thongtin.description,
                rates: thongtin.rates,
                typemenu: thongtin.typemenu
            },
            chat: thongtin.chat,
            thongtin: [
                { ram: thongtin.ram, name: 'Ram' },
                { ketnoimang: thongtin.ketnoimang, name: 'Kết nối mạng' },
                { baohanh: thongtin.baohanh, name: 'Bảo hành' },
                { bonhotrong: thongtin.bonhotrong, name: 'Bộ nhớ trong' },
                { chipxuly: thongtin.chipxuly, name: 'Chip xử lý' },
                { hangsanxuat: thongtin.hangsanxuat, name: 'Hãng sản xuất' },
                { kichthuocmanhinh: thongtin.kichthuocmanhinh, name: 'kích thước màn hình' },
                { loaicongsac: thongtin.loaicongsac, name: 'loại cổng sạc' },
                { noibaohanh: thongtin.noibaohanh, name: 'nơi bảo hành' },
                { phuongthucbaohanh: thongtin.phuongthucbaohanh, name: 'Phương thức bảo hành' },
                { sosim: thongtin.sosim, name: 'Số sim' },
                { xuatxu: thongtin.xuatxu, name: 'Xuất xứ' },
                { bluetooth: thongtin.bluetooth, name: 'Bluetooth' },
                { cambien: thongtin.cambien, name: 'Cảm biến' },
                { camerasau: thongtin.camerasau, name: 'Camera sau' },
                { cameratruoc: thongtin.cameratruoc, name: 'Camera trước' },
                { congnghemanhinh: thongtin.congnghemanhinh, name: 'Công nghệ màn hình' },
                { cpu: thongtin.cpu, name: 'Cpu' },
                { gpu: thongtin.gpu, name: 'Gpu' },
                { chatlieu: thongtin.chatlieu, name: 'Chất liệu' },
                { chipset: thongtin.chipset, name: 'Chipset' },
                { chuanmanhinh: thongtin.chuanmanhinh, name: 'Chuẩn màn hình' },
                { dungluongpin: thongtin.dungluongpin, name: 'Dung lượng pin' },
                { dophangiaimanhinh: thongtin.dophangiaimanhinh, name: 'Độ phân giải màn hình' },
                { hedieuhanh: thongtin.hedieuhanh, name: 'hệ điều hành' },
                { hotrothenhotoida: thongtin.hotrothenhotoida, name: 'hỗ trợ thẻ nhớ tối đa' },
                { jack: thongtin.jack, name: 'Jack' },
                { kichthuoc: thongtin.kichthuoc, name: 'Kích thước' },
                { khanangchongnuoc: thongtin.khanangchongnuoc, name: 'Khả năng chống nước' },
                { loaisim: thongtin.loaisim, name: 'Loại sim' },
                { trongluong: thongtin.trongluong, name: 'Trọng lượng' },
                { wifi: thongtin.wifi, name: 'Wifi' }
            ]
        });
    }
}


module.exports = DetailController