const MenuModel = require("../../models/menu.model");

class MenuController {

    getIndustry(req, res) {

        new MenuModel().onGetIndustryid([], (data) => {
            res.status(200).json({
                status: 200,
                data
            })
        });
    }

    getProductIndustry(req, res) {

        new MenuModel().onGetProductIndustry(req.body.table, (data) => {
            res.status(200).json({
                status: 200,
                data
            })
        });

    }

    getMenu(req, res) {

        new MenuModel().getMenu([], (data) => {
            res.status(200).json({
                status: 200,
                data
            })
        });

    }

}

module.exports = MenuController