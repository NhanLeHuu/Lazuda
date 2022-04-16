const AccountModel = require("../../models/account.model");

class AccountController {
    createUser(req, res) {
        var body = req.body
        var param = [body.ten, body.ho, body.ngaysinh, body.gioitinh, body.email, body.matkhau, body.picture]

        new AccountModel().onCreateUser(param, (data) => {
            if (data) {
                var param = [body.email, body.matkhau]
                new AccountModel().onLoginUser(param, (data) => {
                    if (data) {
                        res.json({
                            status: 200,
                            data
                        });
                    } else {
                        res.json({
                            status: 400,
                            data: null
                        });
                    }
                });
            } else {
                res.json({
                    status: 400
                });
            }
        });
    }

    checkUser(req, res) {
        var body = req.body
        var param = [body.email]

        new AccountModel().onExistsUser(param, (data) => {
            if (data.length == 0) {
                res.json({
                    status: 200,
                    message: "updatepassword"
                });
            } else {
                this.getCartUser(req, res, data);
            }
        })
    }

    loginUser(req, res) {
        var body = req.body
        var param = [body.email, body.matkhau]

        new AccountModel().onLoginUser(param, (data) => {
            if (data) {
                this.getCartUser(req, res, data);
            } else {
                res.json({
                    status: 400,
                    data: null
                });
            }
        });
    }

    getCartUser(req, res, data) {
        var id = data[0].id.toString()
        var param = [id]

        new AccountModel().getCart(param, (result) => {
            if (result.length > 0) {
                data[0].cart = []

                new Promise((resolve, reject) => {

                    result.forEach((e, index) => {
                        var loai = e.loaisanpham
                        var param = [e.idsanpham]

                        new AccountModel().getProduct(param, loai, (sanpham) => {
                            sanpham[0].amount = e.amount
                            data[0].cart.push(sanpham[0])

                            if (data[0].cart.length == result.length) {
                                resolve(data);
                            }
                        })
                    })
                }).then((data) => {
                    if (data) {
                        res.status(200).json({
                            status: 200,
                            data
                        });
                    }
                })
            } else {
                data[0].cart = []
                res.status(200).json({
                    status: 200,
                    data
                });
            }
        })
    }


    addCart(req, res) {
        var body = req.body
        var param = [body.idsanpham, body.loaisanpham, body.iduser, body.amount]
        var paramsExists = [body.idsanpham, body.loaisanpham, body.iduser]
        var amount = parseInt(body.amount)

        new AccountModel().onAddCart(param, paramsExists, amount, (data) => {
            if (data) {
                res.status(200).json({
                    status: 200
                })
            } else {
                res.status(400).json({
                    status: 400
                })
            }
        });
    }

    delCart(req, res) {
        var body = req.body

        new AccountModel().onDelCart(parseInt(body.id), (data) => {
            if (data) {
                res.status(200).json({
                    status: 200
                })
            }
        })
    }

    editProfile(req, res) {
        var body = req.body
        var param = [body.ho, body.ten, body.ngaysinh, body.gioitinh, body.sdt, body.id]

        new AccountModel().onEditProfile(param, (data) => {
            if (data) {
                res.status(200).json({
                    status: 200
                })
            } else {
                res.status(400).json({
                    status: 400
                })
            }
        })
    }

    addAddress(req, res) {
        var body = req.body
        var param = [body.id, body.sonha, body.tenduong, body.quanhuyen, body.phuongxa, body.tinhthanhpho, body.diachithuongdung]

        new AccountModel().onAddAddress(param, (data) => {
            if (data) {
                res.status(200).json({
                    status: 200
                })
            } else {
                res.status(400).json({
                    status: 400
                })
            }
        })
    }

    getAddress(req, res) {
        var body = req.body
        var param = [body.id]

        new AccountModel().onGetAddress(param, (data) => {
            if (data) {
                res.status(200).json({
                    status: 200,
                    data
                })
            } else {
                res.status(400).json({
                    status: 400
                })
            }
        })
    }

    soDonOrder(req, res) {
        var param = req.body.iduser

        new AccountModel().onSoDonOrder(param, (data) => {
            res.status(200).json({
                status: 200,
                data
            })
        })
    }

    soDonHuyHang(req, res) {
        var param = req.body.iduser

        new AccountModel().onSoDonHuyHang(param, (data) => {
            res.status(200).json({
                status: 200,
                data
            })
        })
    }

    editAddress(req, res) {
        var body = req.body
        var param = [body.sonha, body.tenduong, body.quanhuyen, body.phuongxa, body.tinhthanhpho, body.diachithuongdung, body.id]
        new AccountModel().onEditAddress(param, (data) => {
            if (data) {
                res.status(200).json({
                    status: 200,
                    data
                })
            } else {
                res.status(400).json({
                    status: 400
                })
            }
        })
    }

    editDefaultAddress(req, res) {
        var body = req.body
        var param = [body.id]
        var iduser = body.iduser

        new AccountModel().onEditDefaultAddress(param, iduser, (data) => {
            if (data) {
                res.status(200).json({
                    status: 200,
                    data
                })
            } else {
                res.status(400).json({
                    status: 400
                })
            }
        })
    }

}

module.exports = AccountController