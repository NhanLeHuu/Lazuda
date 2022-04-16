const HomeModel = require("../../models/home.model");

class HomeController {

    searchProduct(req, res) {
        var keyword = req.body.keyword
        new HomeModel().searchProduct(keyword, (result, table) => {
            res.status(200).json({
                status: 200,
                data: {
                    result,
                    table
                }
            })
        })
    }
}

module.exports = HomeController