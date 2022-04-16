const ProductBuyMoreModel = require("../../models/productbuymore.model");

class ProductBuyMoreController {

    getProductBuyMore(req, res) {
        new ProductBuyMoreModel().onGetProductBuyMore((data) => {
            res.json({
                status: 200,
                data
            });
        });

    }

    getProductOnPBM(req, res) {
        var body = req.body
        var id = body.id
        var table = body.table

        new ProductBuyMoreModel().onProduct(id, table, (data) => {
            res.json({
                status: 200,
                data
            });
        });

    }

}

module.exports = ProductBuyMoreController