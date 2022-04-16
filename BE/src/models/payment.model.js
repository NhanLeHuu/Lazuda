const ConnectDB = require("./../db/connect");

class PayMentModel {

    donhang(param, callback) {
        const query = "insert into trangthaigiaohang(iduser,idsanpham,typemenu,madonhang,tinhtrangpayment,trangthaigiaohang,soluong,tongcong,phigiaohang,diachigiaohang,ngaydathang) values(?,?,?,?,?,?,?,?,?,?,?)";
        let params = param;
        ConnectDB.querySQL(query, params, (result) => {
            return callback(result);
        });
    }

}

module.exports = PayMentModel