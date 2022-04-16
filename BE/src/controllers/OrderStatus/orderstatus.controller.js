const OrderStatusModel = require("../../models/orderstatus.model");

class OrderStatusController {

    getStatusOrder(req, res) {
        var body = req.body
        var param = body.iduser

        new OrderStatusModel().onGetStatusOrder(param, (data) => {
            if (data) {
                res.status(200).json({
                    status: 200,
                    data
                })
            }
        });
    }

}

module.exports = OrderStatusController