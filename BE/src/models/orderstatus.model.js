const ConnectDB = require("./../db/connect");
const AccountModel = require("./account.model");

class OrderStatusModel {

    onGetStatusOrder(param, callback) {
        const query = "select * from trangthaigiaohang where iduser = ?";
        let params = param;

        ConnectDB.querySQL(query, params, (result) => {
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
}

module.exports = OrderStatusModel