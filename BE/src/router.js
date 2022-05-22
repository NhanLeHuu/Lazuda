const AppController = require("./controllers/App/app.controller");
const ProductNowController = require("./controllers/ProductToday/productnow.controller");
const DetailController = require("./controllers/Detail/detail.controller");
const Account = require("./controllers/Account/account.controller");
const HomeController = require("./controllers/Home/home.controller")
const PaymentController = require("./controllers/Payment/payment.controller")
const MenuController = require("./controllers/Menu/menu.controller")
const OrderStatusController = require("./controllers/OrderStatus/orderstatus.controller")
const ProductBuyMoreController = require("./controllers/ProductBuyMore/productbuymore.controller")
const FlashSaleController = require("./controllers/FlashSale/flashsale.controller")
const CrawlerComic = require("./crawlercomic")
// const CrawlerFilm = require("./crawlerfilm")
const express = require("express");

const Router = express.Router();

// Comic
Router.post("/getallcomic", new CrawlerComic().getComicHome.bind(new CrawlerComic()))
Router.post("/getsummarycomic", new CrawlerComic().getSummaryComic.bind(new CrawlerComic()))
Router.post("/getreadingcomic", new CrawlerComic().getReadingComic.bind(new CrawlerComic()))
// Router.post("/getsearchcomic", new CrawlerComic().getSearchComic.bind(new CrawlerComic()));
// Film
// Router.post("/getallfilm", new CrawlerFilm().getFilmHome.bind(new CrawlerFilm()))
// Router.post("/getsummaryfilm", new CrawlerFilm().getSummaryFilm.bind(new CrawlerFilm()));
// Router.post("/getreadingfilm", new CrawlerFilm().getReadingFilm.bind(new CrawlerFilm()))
// Router.post("/getsearchfilm", new CrawlerFilm().getSearchFilm.bind(new CrawlerFilm()))

Router.post("/getdetail/:name/:id", new DetailController().getProductDetail.bind(new DetailController()));
Router.post("/sendchat", new DetailController().sendChat)
Router.post("/createuser", new Account().createUser)
Router.post("/loginuser", new Account().loginUser.bind(new Account()))
Router.post("/existuser", new Account().checkUser.bind(new Account()))
Router.post("/payment", new PaymentController().getPayment.bind(new PaymentController()))
Router.post("/paymentby", new PaymentController().getPaymentBy.bind(new PaymentController()))
Router.get("/returnpayment", new PaymentController().returnPayment.bind(new PaymentController()))
Router.post("/addcart", new Account().addCart)
Router.post("/delcart", new Account().delCart)
Router.post("/editprofile", new Account().editProfile)
Router.post("/getaddress", new Account().getAddress)
Router.post("/addaddress", new Account().addAddress)
Router.post("/editaddress", new Account().editAddress)
Router.post("/getsodondathang", new Account().soDonOrder)
Router.post("/getsodonhuyhang", new Account().soDonHuyHang)
Router.post("/editdefaultaddress", new Account().editDefaultAddress)
Router.post("/getOrderStatus", new OrderStatusController().getStatusOrder.bind(new OrderStatusController()))

Router.post("/producttoday", new ProductNowController().getProductNow.bind(new ProductNowController()));
Router.post("/getIndustry", new MenuController().getIndustry)
Router.post("/getMenu", new MenuController().getMenu)
Router.post("/getpindustry", new MenuController().getProductIndustry)
Router.post("/getproductbuymore", new ProductBuyMoreController().getProductBuyMore)
Router.post("/getproductpbm", new ProductBuyMoreController().getProductOnPBM)
Router.post("/getflashsale", new FlashSaleController().getFlashSale.bind(new FlashSaleController()))
Router.post("/getproductfs", new FlashSaleController().getProductOnFS.bind(new FlashSaleController()))

Router.post("/search", new HomeController().searchProduct)
Router.post("/otherProduct", new ProductNowController().getOtherProduct)
Router.post("/relateProduct", new ProductNowController().getRelateProduct)
Router.post("/paymentsuccess", new PaymentController().getPaymentSuccess)

Router.post("/getorderconfirm", new AppController().getOrderConfirm)
Router.post("/getdonvanchuyen", new AppController().getDonVanChuyen)
Router.post("/getdongiaohang", new AppController().getDonGiaoHang)
Router.post("/getdonrefund", new AppController().getDonRefund)
Router.post("/goidonhang", new AppController().goiDonHang)
Router.post("/khauvanchuyen", new AppController().khauVanChuyen)
Router.post("/khautrahang", new AppController().khauTraHang)
Router.post("/yeucautrahang", new AppController().yeuCauTraHang)
Router.post("/getdontrahang", new AppController().getDonTraHang)

Router.post("/getprogress", new AppController().getProgress)
Router.post("/getprogressrefund", new AppController().getProgressRefund)

module.exports = Router;