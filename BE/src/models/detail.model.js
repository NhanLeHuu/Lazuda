const ConnectDB = require("./../db/connect");

class DetailModel {

    onSendChat(table, message, id, callback) {
        const query = "UPDATE " + table + " SET chat = ? WHERE id = ?";
        const param = [message, id];
        ConnectDB.querySQL(query, param, (result) => {
            callback(result);
        });
    }

    getDetail(id, name, callback) {
        const query = "SELECT * FROM " + name + " WHERE id = ?";
        const param = [id];
        ConnectDB.querySQL(query, param, (result) => {
            callback(result);
        });

    }

    getImgProduct(data, callback) {
        var y = 0
        if (!data) {
            return
        }
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

module.exports = DetailModel