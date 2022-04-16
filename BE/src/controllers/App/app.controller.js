const AppModel = require("../../models/app.model");

class AppController {

    getOrderConfirm(req, res) {
        new AppModel().onGetOrderConfirm((data) => {
            res.json({
                status: 200,
                data
            });
        });

    }

    getDonVanChuyen(req, res) {
        // console.log(global.SocketIO)
        new AppModel().onGetDonVanChuyen((data) => {
            res.json({
                status: 200,
                data
            });
        });

    }

    getDonGiaoHang(req, res) {
        // console.log(global.SocketIO)
        new AppModel().onGetDonGiaoHang((data) => {
            res.json({
                status: 200,
                data
            });
        });

    }

    getDonRefund(req, res) {
        // console.log(global.SocketIO)
        new AppModel().onGetDonRefund((data) => {
            res.json({
                status: 200,
                data
            });
        });

    }

    yeuCauTraHang(req, res) {
        var body = req.body
        let param = [body.iduser, body.madonhang, body.idsanpham, body.typemenu, body.trangthai, body.ngaygio]

        new AppModel().onYeuCauTraHang(param, body.idtrangthaigiaohang, (data) => {
            res.json({
                status: 200,
                data
            });
        });

    }

    getDonTraHang(req, res) {
        var body = req.body
        var param = [body.iduser]

        new AppModel().onGetDonTraHang(param, (data) => {
            res.json({
                status: 200,
                data
            });
        });
    }

    async goiDonHang(req, res) {
        var { id, iduser, idsanpham, typemenu, madonhang, ngaygio } = req.body;

        let param = [id, iduser, madonhang, idsanpham, typemenu, 'Đơn hàng đã được gói', ngaygio];
        const io = require("../../server")
        await new AppModel().onGoiDonHang(param, async(data) => {
            await res.status(200).json({
                status: 200,
                data
            });
            await io.emit("khauvanchuyen", true);
        });

    }

    khauVanChuyen(req, res) {
        var { id, iduser, idsanpham, typemenu, madonhang, trangthai, progress, ngaygio } = req.body;

        let param = [id, iduser, madonhang, idsanpham, typemenu, trangthai, ngaygio];
        const io = require("../../server")
        new AppModel().onKhauVanChuyen(param, progress, (data) => {
            res.json({
                status: 200,
                data
            });
            io.emit("khauvanchuyen", true);
        });

    }

    khauTraHang(req, res) {
        var { id, iduser, idsanpham, typemenu, madonhang, trangthai, progress, ngaygio } = req.body;

        let param = [id, iduser, madonhang, idsanpham, typemenu, trangthai, ngaygio];
        const io = require("../../server")
        new AppModel().onKhauTraHang(param, progress, (data) => {
            res.json({
                status: 200,
                data
            });
            io.emit("khautrahang", true);
        });

    }

    getProgress(req, res) {
        var { iduser, madonhang } = req.body;
        let param = [iduser, madonhang];

        new AppModel().onGetProgress(param, (data) => {
            res.json({
                status: 200,
                data
            });
        });

    }

    getProgressRefund(req, res) {
        var { iduser, madonhang } = req.body;
        let param = [iduser, madonhang];

        new AppModel().onGetProgressRefund(param, (data) => {
            res.json({
                status: 200,
                data
            });
        });

    }


}

module.exports = AppController