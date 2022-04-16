const ProductNowModel = require("../../models/productnow.model");

class ProductNowController {

    getProductNow(req, res) {

        var body = req.body;
        var table = body.table
        var limit = body.limit

        new ProductNowModel().getProductNow(table, limit, (data) => {
            res.status(200).json({
                status: 200,
                data
            })
        });
    }

    getOtherProduct(req, res) {
        var body = req.body;
        var table = body.table
        var limit = "10"

        new ProductNowModel().getProductNow(table, limit, (data) => {
            res.status(200).json({
                status: 200,
                data
            })
        });

    }

    getRelateProduct(req, res) {
        var limit = "10";
        var listTable = ["dongho", "chamsocthucung", "mayanhmayquayphim",
            "sachvanphongpham", "smartphone", "tantrangnhacua", "thethaodangoaigiaitri",
            "thietbiamthanh", "tivi", "tulanh", "vatphamphongthuy"
        ]
        const random1 = Math.floor(Math.random() * listTable.length);
        const random2 = Math.floor(Math.random() * listTable.length);
        const random3 = Math.floor(Math.random() * listTable.length);
        var table1 = listTable[random1]
        var table2 = listTable[random2]
        var table3 = listTable[random3]

        new ProductNowModel().getProductNow(table1, limit, (data1) => {
            new ProductNowModel().getProductNow(table2, limit, (data2) => {
                new ProductNowModel().getProductNow(table3, limit, (data3) => {

                    res.status(200).json({
                        status: 200,
                        data: {
                            product1: data1,
                            product2: data2,
                            product3: data3
                        }
                    })

                })
            })
        });

    }
}

module.exports = ProductNowController