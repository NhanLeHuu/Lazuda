const ConnectDB = require("./../db/connect");

class ProductBuyMoreModel {

    onGetProductBuyMore(callback) {
        const query = "select * from sanphammuanhieu";
        ConnectDB.querySQL(query, [], (result) => {
            callback(result);
        });
    }

    onProduct(id, table, callback) {
        let query = "select * from " + table + " where id = " + id;

        ConnectDB.querySQL(query, [], (result) => {
            if (result) {
                callback(result[0]);
            }
        })

    }

}

module.exports = ProductBuyMoreModel