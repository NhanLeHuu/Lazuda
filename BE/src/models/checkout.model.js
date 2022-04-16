const ConnectDB = require("./../db/connect");

class CheckoutModel {

    onIncrease(id, callback) {
        const query = "UPDATE cartuser SET amount = amount + 1 where id = ? ";
        ConnectDB.querySQL(query, id, (result) => {
            return callback(result);
        });
    }
    onDecrease(id, callback) {
        const query = "UPDATE cartuser SET amount = amount - 1 where id = ? ";
        ConnectDB.querySQL(query, id, (result) => {
            return callback(result);
        });
    }
}

module.exports = CheckoutModel