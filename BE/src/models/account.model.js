const ConnectDB = require("./../db/connect");

class AccountModel {

    onCreateUser(param, callback) {
        const query = "insert into user (ten,ho,ngaysinh,gioitinh,email,matkhau,picture) values (?,?,?,?,?,?,?)";
        let params = param;
        ConnectDB.querySQL(query, params, (result) => {
            return callback(result);
        });
    }

    onLoginUser(param, callback) {
        const query = "select * from user where email = ? and matkhau = ?";
        let params = param
        ConnectDB.querySQL(query, params, (result) => {
            return callback(result);
        });
    }

    onExistsUser(param, callback) {
        const query = "select * from user where email = ?";
        let params = param
        ConnectDB.querySQL(query, params, (result) => {
            callback(result);
        });
    }

    onDelCart(id, callback) {
        const query = "delete from cart where idsanpham = " + id;

        ConnectDB.querySQL(query, [], (result) => {
            return callback(result);
        })
    }

    onEditProfile(param, callback) {
        const query = "update user set ho = ?,ten = ?,ngaysinh = ?,gioitinh = ?,sdt = ? where id = ?";
        let params = param
        ConnectDB.querySQL(query, params, (result) => {
            return callback(result);
        })
    }

    onAddAddress(param, callback) {
        const query = "insert into useraddress(iduser,sonha,tenduong,quanhuyen,phuongxa,tinhthanhpho,diachithuongdung) values(?,?,?,?,?,?,?)";
        let params = param
        ConnectDB.querySQL(query, params, (result) => {
            return callback(result);
        })
    }

    onGetAddress(param, callback) {
        const query = "select * from useraddress where iduser = ?";
        let params = param
        ConnectDB.querySQL(query, params, (result) => {
            return callback(result);
        })
    }

    onEditAddress(param, callback) {
        const query = "update useraddress set sonha = ?,tenduong = ?,quanhuyen = ?,phuongxa = ?,tinhthanhpho = ?,diachithuongdung = ? where id = ?";
        let params = param
        ConnectDB.querySQL(query, params, (result) => {
            return callback(result);
        })
    }

    onSoDonOrder(param, callback) {
        const query = "SELECT * FROM trangthaigiaohang WHERE iduser = ?";
        const paramx = param

        ConnectDB.querySQL(query, paramx, (result) => {
            return callback(result);
        })
    }

    onSoDonHuyHang(param, callback) {
        const query = "SELECT * FROM trahang WHERE iduser = ?";
        const paramx = param

        ConnectDB.querySQL(query, paramx, (result) => {
            return callback(result);
        })
    }

    onEditDefaultAddress(param, iduser, callback) {
        const query = "update useraddress set macdinh = 'false' where iduser = " + iduser;
        ConnectDB.querySQL(query, [], (result) => {
            if (result) {
                let query = "update useraddress set macdinh = 'true' where id = ?";
                let params = param
                ConnectDB.querySQL(query, params, (result) => {
                    return callback(result);
                })
            }
        })
    }

    onAddCart(param, paramsExist, amount, callback) {
        const query = "insert into cart(idsanpham,loaisanpham,iduser,amount) values(?,?,?,?)";
        const queryExists = "select * from cart where idsanpham = ? and loaisanpham = ? and iduser = ?";
        let paramsExists = paramsExist
        let params = param

        ConnectDB.querySQL(queryExists, paramsExists, (result) => {
            if (result.length > 0) {
                const id = result[0].id
                const queryUpdate = "update cart set amount = amount + " + amount + " where id = " + id;
                ConnectDB.querySQL(queryUpdate, [], (result) => {
                    return callback(result);
                })
            } else {
                ConnectDB.querySQL(query, params, (result) => {
                    return callback(result);
                })
            }
        });
    }

    getCart(param, callback) {
        const query = "select * from cart where iduser = ?";
        let params = param
        ConnectDB.querySQL(query, params, (result) => {
            return callback(result);
        });
    }

    getProduct(param, loaisanpham, callback) {
        const query = "select * from " + loaisanpham + " where id = ?";
        let params = param
        ConnectDB.querySQL(query, params, (a) => {
            return callback(a);
        });
    }
}

module.exports = AccountModel