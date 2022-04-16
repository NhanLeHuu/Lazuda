const ConnectDB = require("./../db/connect");

class HomeModel {

    searchProduct(keyword, callback) {
        let listTable = [
            "chamsocthucung",
            "dongho",
            "mayanhmayquayphim",
            "sachvanphongpham",
            "sanphammuanhieu",
            "smartphone",
            "tantrangnhacua",
            "thethaodangoaigiaitri",
            "thietbiamthanh",
            "tivi",
            "trangsuc",
            "tulanh",
            "vatphamphongthuy"
        ]

        listTable.forEach((e, index) => {
            let query = `SELECT * FROM ${e} WHERE LOWER( ${e}.name ) LIKE '%${keyword}%'`;

            ConnectDB.querySQL(query, [], (results) => {
                if (results && results.length > 0) {
                    callback(results, e)
                }
            });

        })



    }

}

module.exports = HomeModel