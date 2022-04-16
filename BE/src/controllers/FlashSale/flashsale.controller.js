const FlashSaleModel = require("../../models/flashsale.model");

class FlashSaleController {

    getFlashSale(req, res) {

        new FlashSaleModel().onGetFlashSale((data) => {
            res.json({
                status: 200,
                data
            });
        });

    }

    getProductOnFS(req, res) {
        var body = req.body
        var id = body.id
        var table = body.table

        new FlashSaleModel().onProduct(id, table, (data) => {
            res.json({
                status: 200,
                data
            });
        });

    }

}

module.exports = FlashSaleController