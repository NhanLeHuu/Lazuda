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
                { chatlieu: thongtin.chatlieu, name: 'Ch???t li???u' },
                { doituong: thongtin.doituong, name: '?????i t?????ng' },
                { xuatxu: thongtin.xuatxu, name: 'Xu???t x???' }
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
                { dungtichtrongluong: thongtin.dungtichtrongluong, name: 'Dung t??ch/tr???ng l?????ng' },
                { xuatxu: thongtin.xuatxu, name: 'Xu???t x???' },
                { chatlieu: thongtin.chatlieu, name: 'Ch???t li???u' },
                { chatvai: thongtin.chatvai, name: 'Ch???t v??i' }
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
                { chatlieu: thongtin.chatlieu, name: 'Ch???t li???u' },
                { kichthuoc: thongtin.kichthuoc, name: 'K??ch th?????c' }
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
                { loaivanh: thongtin.loaivanh, name: 'Lo???i v??nh' },
                { loaikhung: thongtin.loaikhung, name: 'Lo???i khung' },
                { kieuvanh: thongtin.kieuvanh, name: 'Ki???u v??nh' },
                { kichthuocbanhxe: thongtin.kichthuocbanhxe, name: 'K??ch th?????c b??nh xe' },
                { xuatxu: thongtin.xuatxu, name: 'Xu???t x???' }
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
                { baohanh: thongtin.baohanh, name: 'B???o h??nh' },
                { hangsanxuat: thongtin.hangsanxuat, name: 'H??ng s???n xu???t' },
                { phuongthucbaohanh: thongtin.phuongthucbaohanh, name: 'Ph????ng th???c b???o h??nh' }
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
                { nguongoc: thongtin.nguongoc, name: 'Ngu???n g???c' },
                { kichthuocmanhinhlcd: thongtin.kichthuocmanhinhlcd, name: 'K??ch th?????c m??n h??nh LCD' },
                { megapixel: thongtin.megapixel, name: 'Megapixel' },
                { baohanh: thongtin.baohanh, name: 'B???o h??nh' },
                { hangsanxuat: thongtin.hangsanxuat, name: 'H??ng s???n xu???t' }
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
                { baohanh: thongtin.baohanh, name: 'B???o h??nh' },
                { matdongho: thongtin.matdongho, name: 'M???t ?????ng h???' },
                { loaimay: thongtin.loaimay, name: 'Lo???i m??y' },
                { gioitinh: thongtin.gioitinh, name: 'Gi???i t??nh' },
                { dochiunuoc: thongtin.dochiunuoc, name: '????? ch???u n?????c' },
                { kieukhoa: thongtin.kieukhoa, name: 'Ki???u kho??' },
                { loaiday: thongtin.loaiday, name: 'Lo???i d??y' },
                { duongkinhmat: thongtin.duongkinhmat, name: '???????ng k??nh m???t' },
                { xuatxu: thongtin.xuatxu, name: 'Xu???t x???' },
                { chatlieumatkinh: thongtin.chatlieumatkinh, name: 'Ch???t li???u m???t k??nh' }
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
                { tinhnangnoitroi: thongtin.tinhnangnoitroi, name: 'T??nh n??ng n???i tr???i' },
                { dungtich: thongtin.dungtich, name: 'Dung t??ch' },
                { khuvucgiaohang: thongtin.khuvucgiaohang, name: 'Khu v???c giao h??ng' },
                { kieudangtulanh: thongtin.kieudangtulanh, name: 'Ki???u d??ng t??? l???nh' },
                { phuongthucbaohanh: thongtin.phuongthucbaohanh, name: 'Ph????ng th???c b???o h??nh' },
                { socuatu: thongtin.socuatu, name: 'S??? c???a t???' },
                { baohanh: thongtin.baohanh, name: 'B???o h??nh' },
                { xuatxu: thongtin.xuatxu, name: 'Xu???t x???' },
                { dungtichthucte: thongtin.dungtichthucte, name: 'Dung t??ch th???c t???' },
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
                { tinhnangnoitroi: thongtin.tinhnangnoitroi, name: 'T??nh n??ng n???i tr???i' },
                { uudaikhimua: thongtin.uudaikhimua, name: '??u ????i khi mua' },
                { khuvucgiaohang: thongtin.khuvucgiaohang, name: 'Khu v???c giao h??ng' },
                { baohanh: thongtin.baohanh, name: 'B???o h??nh' },
                { dophangiai: thongtin.dophangiai, name: '????? ph??n gi???i' },
                { hangsanxuat: thongtin.hangsanxuat, name: 'H??ng s???n xu???t' },
                { kichthuoctv: thongtin.kichthuoctv, name: 'K??ch th?????c tivi' },
                { phuongthucbaohanh: thongtin.phuongthucbaohanh, name: 'Ph????ng th?????c b???o h??nh' },
                { xuatxu: thongtin.xuatxu, name: 'Xu???t x???' }
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
                { ketnoimang: thongtin.ketnoimang, name: 'K???t n???i m???ng' },
                { baohanh: thongtin.baohanh, name: 'B???o h??nh' },
                { bonhotrong: thongtin.bonhotrong, name: 'B??? nh??? trong' },
                { chipxuly: thongtin.chipxuly, name: 'Chip x??? l??' },
                { hangsanxuat: thongtin.hangsanxuat, name: 'H??ng s???n xu???t' },
                { kichthuocmanhinh: thongtin.kichthuocmanhinh, name: 'k??ch th?????c m??n h??nh' },
                { loaicongsac: thongtin.loaicongsac, name: 'lo???i c???ng s???c' },
                { noibaohanh: thongtin.noibaohanh, name: 'n??i b???o h??nh' },
                { phuongthucbaohanh: thongtin.phuongthucbaohanh, name: 'Ph????ng th???c b???o h??nh' },
                { sosim: thongtin.sosim, name: 'S??? sim' },
                { xuatxu: thongtin.xuatxu, name: 'Xu???t x???' },
                { bluetooth: thongtin.bluetooth, name: 'Bluetooth' },
                { cambien: thongtin.cambien, name: 'C???m bi???n' },
                { camerasau: thongtin.camerasau, name: 'Camera sau' },
                { cameratruoc: thongtin.cameratruoc, name: 'Camera tr?????c' },
                { congnghemanhinh: thongtin.congnghemanhinh, name: 'C??ng ngh??? m??n h??nh' },
                { cpu: thongtin.cpu, name: 'Cpu' },
                { gpu: thongtin.gpu, name: 'Gpu' },
                { chatlieu: thongtin.chatlieu, name: 'Ch???t li???u' },
                { chipset: thongtin.chipset, name: 'Chipset' },
                { chuanmanhinh: thongtin.chuanmanhinh, name: 'Chu???n m??n h??nh' },
                { dungluongpin: thongtin.dungluongpin, name: 'Dung l?????ng pin' },
                { dophangiaimanhinh: thongtin.dophangiaimanhinh, name: '????? ph??n gi???i m??n h??nh' },
                { hedieuhanh: thongtin.hedieuhanh, name: 'h??? ??i???u h??nh' },
                { hotrothenhotoida: thongtin.hotrothenhotoida, name: 'h??? tr??? th??? nh??? t???i ??a' },
                { jack: thongtin.jack, name: 'Jack' },
                { kichthuoc: thongtin.kichthuoc, name: 'K??ch th?????c' },
                { khanangchongnuoc: thongtin.khanangchongnuoc, name: 'Kh??? n??ng ch???ng n?????c' },
                { loaisim: thongtin.loaisim, name: 'Lo???i sim' },
                { trongluong: thongtin.trongluong, name: 'Tr???ng l?????ng' },
                { wifi: thongtin.wifi, name: 'Wifi' }
            ]
        });
    }
}


module.exports = DetailController