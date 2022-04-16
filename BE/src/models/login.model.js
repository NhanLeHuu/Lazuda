const ConnectDB = require("./../db/connect");

class LoginModel {

    getUsers(username, password, callback) {
        let query = "SELECT * FROM users WHERE username= ? AND password=?";
        let params = [username, password];
        ConnectDB.querySQL(query, params, (results) => {
            const queryUserData = `SELECT cartuser.id,nameproduct,price,img,amount,productid,userid FROM product INNER JOIN cartuser ON product.id = cartuser.productid HAVING userid = ${results[0].id} `;
            ConnectDB.querySQL(queryUserData, null, (cart) => {
                callback(results, cart);
            });
        });

    }

}
module.exports = LoginModel