const ConnectDB = require("./../db/connect");

class AppModel {

    onGetOrderConfirm(callback) {
        const query = "SELECT * FROM trangthaigiaohang WHERE trangthaigiaohang = 'Đơn hàng đã xác nhận'";

        ConnectDB.querySQL(query, [], (result) => {
            this.getInfoOrder(result, (data) => callback(data));
        });
    }

    onGetDonVanChuyen(callback) {
        const query = "SELECT * FROM trangthaigiaohang WHERE trangthaigiaohang = 'Đơn hàng đã được gói' OR trangthaigiaohang = 'Đã nhận kiện hàng' OR trangthaigiaohang = 'Đã đến trung tâm trung chuyển'";

        ConnectDB.querySQL(query, [], (result) => {
            this.getInfoOrder(result, (data) => callback(data));
        });
    }

    onGetDonRefund(callback) {
        const query = "SELECT * FROM trangthaigiaohang WHERE trahang = 'true' OR trahang = 'Chấp nhận đơn trả hàng' OR " +
            "trahang = 'Thu hồi' OR trahang = 'Thu hồi thành công' OR trahang = 'Thủ tục sản phẩm' OR trahang = 'Thủ tục hoàn tiền'";

        ConnectDB.querySQL(query, [], (result) => {
            this.getInfoOrder(result, (data) => callback(data));
        });
    }

    onGetDonGiaoHang(callback) {
        const query = "SELECT * FROM trangthaigiaohang WHERE trangthaigiaohang = 'Đã rời khỏi trung tâm trung chuyển' " +
            "OR trangthaigiaohang = 'Đã đến trạm giao hàng' OR trangthaigiaohang = 'Đã rời khỏi trạm giao hàng' OR " +
            "trangthaigiaohang = 'Đang giao hàng' OR trangthaigiaohang = 'Kiện hàng sắp đến'";

        ConnectDB.querySQL(query, [], (result) => {
            this.getInfoOrder(result, (data) => callback(data));
        });
    }



    onGoiDonHang(parampre, callback) {
        let query = "UPDATE trangthaigiaohang SET trangthaigiaohang = 'Đơn hàng đã được gói' WHERE id = ?";
        let param = parampre[0];

        ConnectDB.querySQL(query, param, (result) => {
            let querytrahang = "INSERT INTO vanchuyen(iduser,madonhang,idsanpham,typemenu,trangthai,ngaygio) VALUES(?,?,?,?,?,?)";
            let paramtrahang = [parampre[1], parampre[2], parampre[3], parampre[4], parampre[5], parampre[6]]
            ConnectDB.querySQL(querytrahang, paramtrahang, (result) => {
                callback(result);
            })

        });
    }

    onKhauVanChuyen(parampre, progress, callback) {
        let query = "UPDATE trangthaigiaohang SET trangthaigiaohang = '" + progress + "' WHERE id = ?";
        let param = parampre[0];

        ConnectDB.querySQL(query, param, (result) => {
            let queryvanchuyen = "INSERT INTO vanchuyen(iduser,madonhang,idsanpham,typemenu,trangthai,ngaygio) VALUES(?,?,?,?,?,?)";
            let paramvanchuyen = [parampre[1], parampre[2], parampre[3], parampre[4], parampre[5], parampre[6]]
            ConnectDB.querySQL(queryvanchuyen, paramvanchuyen, (result) => {
                callback(result);
            })

        });
    }

    onKhauTraHang(parampre, progress, callback) {
        let query = "UPDATE trangthaigiaohang SET trahang = '" + progress + "' WHERE id = ?";
        let param = parampre[0];

        ConnectDB.querySQL(query, param, (result) => {
            let queryvanchuyen = "INSERT INTO trahang(iduser,madonhang,idsanpham,typemenu,trangthai,ngaygio) VALUES(?,?,?,?,?,?)";
            let paramvanchuyen = [parampre[1], parampre[2], parampre[3], parampre[4], parampre[5], parampre[6]]
            ConnectDB.querySQL(queryvanchuyen, paramvanchuyen, (result) => {
                callback(result);
            })

        });
    }

    onGetProgress(parampre, callback) {
        let query = "SELECT * FROM vanchuyen WHERE iduser = ? AND madonhang = ?";
        let param = parampre;

        ConnectDB.querySQL(query, param, (result) => {
            callback(result);
        })
    }

    onGetProgressRefund(parampre, callback) {
        let query = "SELECT * FROM trahang WHERE iduser = ? AND madonhang = ?";
        let param = parampre;

        ConnectDB.querySQL(query, param, (result) => {
            callback(result);
        })
    }

    getInfoOrder(result, callback) {
        if (result.length > 0) {
            var y = 1;

            for (let i = 0; i < result.length; i++) {
                let query = "SELECT * FROM " + result[i].typemenu + " WHERE id = " + result[i].idsanpham;

                ConnectDB.querySQL(query, [], (a) => {
                    result[i].info = a[0];
                    if (result.length === y) {
                        callback(result);
                    }
                    y++;
                });
            }
        } else {
            callback([]);
        }
    }

    onGetDonTraHang(param, callback) {
        const query = "SELECT * FROM trangthaigiaohang WHERE iduser = ? AND trahang IS NOT NULL";
        ConnectDB.querySQL(query, param, (result) => {
            new Promise((resolve, reject) => {
                var arrItem = []
                var y = 1
                for (var i = 0; i < result.length; i++) {
                    var loai = result[i].typemenu
                    var param = [result[i].idsanpham]
                    const querya = "select * from " + loai + " where id = ?";
                    let paramsb = param

                    ConnectDB.querySQL(querya, paramsb, (item) => {
                        arrItem.push(item[0])
                        if (y == result.length) {
                            resolve(arrItem);
                        }
                        y++
                    });
                }
            }).then((data) => {
                if (data) {
                    for (let k = 0; k < result.length; k++) {
                        result[k].dondathang = data[k]
                    }
                    return callback(result);
                }
            })
        });
    }

    onYeuCauTraHang(param, idtrangthaigiaohang, callback) {
        const query = "INSERT INTO trahang(iduser,madonhang,idsanpham,typemenu,trangthai,ngaygio) VALUES(?,?,?,?,?,?)";

        ConnectDB.querySQL(query, param, (result) => {
            this.updatetrangthaigiaohang(result, idtrangthaigiaohang, (data) => callback(data));
        });
    }

    updatetrangthaigiaohang(result, idtrangthaigiaohang, callback) {
        if (result) {
            const query = "UPDATE trangthaigiaohang SET trahang = 'true' WHERE id = " + idtrangthaigiaohang;

            ConnectDB.querySQL(query, [], (result) => {
                callback(result);
            });

        }
    }
}

module.exports = AppModel