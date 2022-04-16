const mysql = require("mysql-await");

const infoMySQL = {
    host: "localhost",
    user: "root",
    password: "admin",
    database: "shendu",
    multipleStatements: true,
    charset: 'utf8mb4'
}

class ConnectDB {

    connection = "";

    static onConnect() {
        this.connection = mysql.createConnection(infoMySQL);
        this.connection.on("error", (err) => {
            console.error(`Connection error : ${err.code}`);
        });
    }

    static async querySQL(sql, param, callback) {

        await this.connection.awaitBeginTransaction();
        try {
            let result = await this.connection.awaitQuery(sql, param);
            if (result) {
                callback(result);
            }
        } catch (error) {
            callback(null);
            console.log("Lỗi Truy Vấn MySQL: " + error)
        }
        /** Commit transaction */
        await this.connection.awaitCommit();

        /** End the connection */
        // this.connection.awaitEnd();
    }

}

module.exports = ConnectDB