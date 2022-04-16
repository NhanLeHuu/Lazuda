const ConnectDB = require("./../db/connect");

class MenuModel {

    onGetIndustryid(param, callback) {
        const query = "SELECT DISTINCT category,logo,typemenu FROM menu";

        ConnectDB.querySQL(query, [], (result) => {
            return callback(result);
        });
    }

    onGetProductIndustry(table, callback) {
        const query = "SELECT * FROM " + table;

        ConnectDB.querySQL(query, [], (result) => {
            return callback(result);
        });
    }

    getMenu(param, callback) {
        const query = "SELECT * FROM menu";

        ConnectDB.querySQL(query, [], (result) => {
            return callback(result);
        });
    }

}

module.exports = MenuModel