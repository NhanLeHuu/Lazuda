const ConnectDB = require("./../db/connect");

class FlashSaleModel {

    onGetFlashSale(callback) {
        const query = "select * from flashsale";

        ConnectDB.querySQL(query, [], (result) => {
            callback(result);
        });
    }

    onProduct(id, table, callback) {
        let query = "select * from " + table + " where id = " + id;

        ConnectDB.querySQL(query, [], (result) => {
            callback(result[0]);
        })

    }

}
module.exports = FlashSaleModel