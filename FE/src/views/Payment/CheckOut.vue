<template>
  <fragment>
    <Header />
    <!--====== App Content ======-->
    <div class="app-content">
      <!--====== Section 1 ======-->
      <div class="u-s-p-y-60">
        <!--====== Section Content ======-->
        <div class="section__content">
          <div class="container">
            <div class="breadcrumb">
              <div class="breadcrumb__wrap">
                <ul class="breadcrumb__list">
                  <li class="has-separator">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="is-marked">
                    <a href="/checkout">Thanh Toán</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section 1 ======-->

      <!--====== Section 3 ======-->
      <div class="u-s-p-b-60">
        <!--====== Section Content ======-->
        <div class="section__content">
          <div class="container">
            <div class="checkout-f">
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="checkout-f__h1">DANH SÁCH THANH TOÁN</h1>

                  <!--====== Order Summary ======-->
                  <div class="o-summary">
                    <!-- SP -->
                    <div class="o-summary__section u-s-m-b-30">
                      <div class="o-summary__item-wrap gl-scroll">
                        <div
                          v-for="(item, index) in thongtindonhang.sanpham"
                          :key="index"
                          class="o-card"
                        >
                          <div class="o-card__flex">
                            <div class="o-card__img-wrap">
                              <img
                                class="u-img-fluid"
                                :src="item.galley[0]"
                                alt=""
                              />
                            </div>
                            <div class="o-card__info-wrap">
                              <span class="o-card__name">
                                <a @click.prevent>{{ item.name }}</a></span
                              >

                              <span class="o-card__quantity"
                                >Số lượng {{ item.amount }}</span
                              >

                              <span class="o-card__price">{{
                                item.amount +
                                " x " +
                                item.price +
                                " đ = " +
                                item.tongcong +
                                " đ"
                              }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Address -->
                    <div class="o-summary__section u-s-m-b-30">
                      <div class="o-summary__box">
                        <h1 class="checkout-f__h1">ĐỊA CHỈ GIAO HÀNG</h1>
                        <div class="ship-b">
                          <span class="ship-b__text">Giao đến:</span>
                          <div class="ship-b__box u-s-m-b-10 giaohang">
                            Địa chỉ:
                            {{ mainaddress.fulladdress }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="o-summary__section u-s-m-b-30">
                      <div class="o-summary__box">
                        <table class="o-summary__table">
                          <tbody>
                            <tr>
                              <td>Phí Giao Hàng</td>
                              <td>{{ thongtindonhang.phigiaohang }} đ</td>
                            </tr>
                            <tr>
                              <td>Mã Số Thuế</td>
                              <td>Chưa cập nhật</td>
                            </tr>
                            <tr>
                              <td>Phí VAT 10%</td>
                              <td>{{ thongtindonhang.phivat }} đ</td>
                            </tr>
                            <tr>
                              <td>Tiền Hàng(Tạm Tính)</td>
                              <td>{{ thongtindonhang.tongcong }} đ</td>
                            </tr>
                            <tr>
                              <td>Voucher miễn phí vận chuyển</td>
                              <td>Không</td>
                            </tr>
                            <tr>
                              <td>Tổng Cộng</td>
                              <td>{{ all }} đ</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="o-summary__section u-s-m-b-30">
                      <div class="o-summary__box">
                        <h1 class="checkout-f__h1">Thanh Toán Thông Qua</h1>
                        <form class="checkout-f__payment">
                          <div class="u-s-m-b-10">
                            <!--====== Radio Box ======-->
                            <div class="radio-box">
                              <input
                                type="radio"
                                id="cash-on-delivery"
                                name="payment"
                                value="Thanh Toán Khi Nhận Hàng"
                                v-model="methodPayment"
                              />
                              <div
                                class="
                                  radio-box__state radio-box__state--primary
                                "
                              >
                                <label
                                  class="radio-box__label"
                                  for="cash-on-delivery"
                                  >Thanh Toán Khi Nhận Hàng</label
                                >
                              </div>
                            </div>
                            <!--====== End - Radio Box ======-->

                            <span class="gl-text u-s-m-t-6"
                              >Bạn có thể thanh toán sau khi nhận được
                              hàng</span
                            >
                          </div>
                          <div class="u-s-m-b-10">
                            <!--====== Radio Box ======-->
                            <div class="radio-box">
                              <input
                                type="radio"
                                id="direct-bank-transfer"
                                name="payment"
                                value="Thanh Toán Bằng Thẻ Ngân Hàng"
                                v-model="methodPayment"
                              />
                              <div
                                class="
                                  radio-box__state radio-box__state--primary
                                "
                              >
                                <label
                                  class="radio-box__label"
                                  for="direct-bank-transfer"
                                  >Thanh Toán Bằng Thẻ Ngân Hàng</label
                                >
                              </div>
                            </div>
                            <!--====== End - Radio Box ======-->

                            <span class="gl-text u-s-m-t-6"
                              >Thực hiện thanh toán của bạn trực tiếp vào tài
                              khoản ngân hàng của chúng tôi. Vui lòng sử dụng ID
                              đơn đặt hàng của bạn làm tham chiếu thanh toán.
                              Đơn đặt hàng của bạn sẽ không được chuyển cho đến
                              khi tiền đã hết trong tài khoản của chúng
                              tôi.</span
                            >
                          </div>
                          <div>
                            <button
                              class="btn btn--e-brand-b-2"
                              @click.prevent="onPayment"
                            >
                              THANH TOÁN
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!--====== End - Order Summary ======-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--====== End - Section Content ======-->
      </div>
      <!--====== End - Section 3 ======-->
    </div>
    <!--====== End - App Content ======-->
    <Footer />
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import "@/assets/js/vnpay";
import Convert from "@/ultities/convert";
import getApi from "@/api/getApi";
import * as $ from "jquery";

export default {
  name: "CheckOut",
  mixins: [componentmixin],
  data: () => ({
    thongtindonhang: {},
    all: 0,
    user: {},
    myaddress: [],
    mainaddress: {},
    methodPayment: null,
  }),
  methods: {
    rmZoom() {
      $(".zoomContainer").remove();
    },
    startTopPage() {
      $(".scroll-content").ready(function () {
        $(".scroll-content").css("transform", "translate3d(0px, 0px, 0px)");
      });
      $(".scrollbar-thumb.scrollbar-thumb-y").ready(function () {
        $(".scrollbar-thumb.scrollbar-thumb-y").css(
          "transform",
          "translate3d(0px, 0px, 0px)"
        );
      });
    },
    setMaDonHang() {
      this.thongtindonhang.sanpham.forEach((e) => {
        e.madonhang = "LAZUDA#" + Convert.createMaDonHang(6).toString();
      });
    },
    onPayment() {
      if (this.myaddress.length == 0) {
        this.$notify({
          title: "Thông Tin Đến Bạn",
          dangerouslyUseHTMLString: true,
          message: `<strong>Bạn chưa cập nhật địa chỉ giao hàng</strong>
            <style>
            .el-notification__icon {margin-top: 0px;}
            .el-notification__group {margin-top: -13px;}
            .el-notification__group h2 {font-size: 12px;}
            .el-notification__group .el-notification__content {margin-top: -8px;}
            </style>
          `,
          duration: 3000,
          type: "info",
        });
        return;
      }
      var body = {
        amount: Convert.numberRemoveDot(this.all),
        orderDescription: Convert.formatDate(new Date()),
        thongtin: {
          thongtindonhang: this.thongtindonhang,
          all: this.all,
          user: this.user,
          myaddress: this.myaddress,
          mainaddress: this.mainaddress,
          methodPayment: this.methodPayment,
        },
        ngayOrder: Convert.formatDate(new Date()),
      };
      this.thongtindonhang.methodPayment = this.methodPayment;
      if (this.thongtindonhang.methodPayment == null) {
        this.$notify({
          title: "Thông Tin Đến Bạn",
          dangerouslyUseHTMLString: true,
          message: `<strong>Bạn chưa chọn phương thức thanh toán</strong>
            <style>
            .el-notification__icon {margin-top: 0px;}
            .el-notification__group {margin-top: -13px;}
            .el-notification__group h2 {font-size: 12px;}
            .el-notification__group .el-notification__content {margin-top: -8px;}
            </style>
          `,
          duration: 3000,
          type: "info",
        });
        return;
      }
      this.setMaDonHang();
      localStorage.setItem(
        "thongtindonhang",
        JSON.stringify(this.thongtindonhang)
      );
      if (
        this.thongtindonhang.methodPayment === "Thanh Toán Bằng Thẻ Ngân Hàng"
      ) {
        getApi("/payment", body, (result) => {
          if (result.status == 200) {
            if (window.vnpay) {
              window.vnpay.open({ width: 768, height: 600, url: result.data });
            } else {
              location.href = result.data;
            }
          }
        });
      } else {
        body.thongtin.sanpham = this.thongtindonhang.sanpham;
        body.user = this.user;
        getApi("/paymentby", body, (result) => {
          if (result.status == 200) {
            this.$router.push("/successfully");
          }
        });
      }
    },
  },
  mounted() {
    this.thongtindonhang = JSON.parse(localStorage.getItem("thongtindonhang"));
    var price =
      Convert.numberRemoveDot(this.thongtindonhang.tongcong) +
      Convert.numberRemoveDot(this.thongtindonhang.phigiaohang) +
      Convert.numberRemoveDot(this.thongtindonhang.phivat)
      ;
    this.all = Convert.numberHaveDot(price);

    console.log(this.all);
    var user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      this.user = user;
      var body = {
        id: user.id,
      };
      getApi("/getaddress", body, (result) => {
        if (result.status == 200) {
          this.myaddress = Convert.convertStringToBoolean(result.data);
          this.myaddress.forEach((i) => {
            if (i.macdinh) {
              this.mainaddress = i;
              this.mainaddress.fulladdress =
                this.mainaddress.sonha +
                ",Đường " +
                this.mainaddress.tenduong +
                ",Phường " +
                this.mainaddress.phuongxa +
                ",Quận " +
                this.mainaddress.quanhuyen +
                ",Thành Phố " +
                this.mainaddress.tinhthanhpho;
            }
          });
        }
      });
    }
    this.rmZoom();
  },
};
</script>

<style lang="scss" scoped>
/deep/ .radio-box__label:before,
.radio-box__label:after {
  border: 2px solid #ff4500;
}
.btn--e-brand-b-2 {
  border: 1px solid #ff4500;
  border-radius: 1px;
}
/deep/.btn.btn--e-brand-b-2 {
  border: 1px solid #ff4500;
  font-weight: bold;
  border-radius: 2px;
  &:hover {
    background-color: #ffffff;
    color: #ff4500;
    transition: 0.2s;
  }
}
.giaohang {
  font-size: 13px;
  color: black;
}
</style>