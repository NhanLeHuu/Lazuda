const ConnectDB = require("./../db/connect");

class ProductNowModel {

    getUsers(username, password, callback) {
        let query = "SELECT * FROM users WHERE username= ? AND password=?";
        let params = [username, password];
        ConnectDB.querySQL(query, params, (results) => {
            const queryUserData = `SELECT cartuser.id,nameproduct,price,img,amount,productid,userid 
            FROM product INNER JOIN cartuser ON product.id = cartuser.productid HAVING userid = ${results[0].id} `;
            ConnectDB.querySQL(queryUserData, null, (cart) => {
                callback(results, cart);
            });
        });

    }

    getProductNow(table, limit, callback) {
        let query = "SELECT * FROM " + table + " LIMIT " + limit;

        // let now = {
        //     popular: [],
        //     tulanh: [],
        //     smartphone: [],
        //     tivi: [],
        //     dongho: []
        // }

        ConnectDB.querySQL(query, [], (result) => {
            callback(result);
        });

    }

    getImgProduct(data, callback) {
        if (data) {
            var y = 0
            for (var i = 0; i < data.length; i++) {
                var id = data[i].id
                var typemenu = data[i].typemenu
                var table = "img" + typemenu;

                let query = "SELECT * FROM " + table + " where idsanpham = " + id;

                ConnectDB.querySQL(query, [], (result) => {
                    if (y != undefined) {
                        data[y].img = result
                        if ((y + 1) == data.length) {
                            callback(data);
                        }
                        y++
                    }
                })

            }
        }
    }

}

module.exports = ProductNowModel