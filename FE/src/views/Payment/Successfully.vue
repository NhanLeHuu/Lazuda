<template>
  <fragment>
    <Header />
    <!--====== Section 3 ======-->
    <div class="u-s-p-b-60">
      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="checkout-f">
            <div class="row">
              <div class="col-lg-12">
                <div class="header-dathang">
                  <!-- <img @click.prevent="onGoBack" class="goback" src="@/assets/arrow/back.png" /> -->
                  <i class="fas fa-check-circle"></i>
                  <p>ĐẶT HÀNG THÀNH CÔNG</p>
                </div>
                <!-- Start -->
                <div v-loading="load" class="letter">
                  <div class="logo">
                    <img src="@/assets/logo/logo-shop.png" />
                  </div>
                  <p>THÔNG TIN ĐƠN HÀNG</p>
                  <div class="o-summary__section">
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
                              ><b>Mã Đơn Hàng : {{ item.madonhang }}</b></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="o-summary__section sanpham">
                    <div class="o-summary__box">
                      <ul class="leaders">
                        <li>
                          <span>Họ Tên</span>
                          <span v-if="user.ho">{{
                            user.ho + " " + user.ten
                          }}</span>
                          <span v-else>loading</span>
                        </li>
                        <li>
                          <span>Tổng Cộng</span>
                          <span v-if="user.ho">{{ all }} đ</span>
                          <span v-else>loading</span>
                        </li>
                        <li>
                          <span>Phí Giao Hàng</span>
                          <span v-if="user.ho"
                            >{{ thongtindonhang.phigiaohang }} đ</span
                          >
                          <span v-else>loading</span>
                        </li>
                        <li>
                          <span>Thời Gian Giao Hàng</span>
                          <span v-if="user.ho">3 Ngày</span>
                          <span v-else>loading</span>
                        </li>
                        <li>
                          <span>Phương Thước Thanh Toán</span>
                          <span v-if="user.ho">{{
                            thongtindonhang.methodPayment
                          }}</span>
                          <span v-else>loading</span>
                        </li>
                        <li>
                          <span>Tình Trạng</span>
                          <span
                            v-if="
                              thongtindonhang.methodPayment ==
                              'Thanh Toán Bằng Thẻ Ngân Hàng'
                            "
                            >Đã Thanh Toán</span
                          >
                          <span v-else>Chưa Thanh Toán</span>
                        </li>
                        <li>
                          <span>Bảo hành</span>
                          <span v-if="user.ho">{{ thongtindonhang.sanpham[0].baohanh == null ? 'Không': thongtindonhang.sanpham[0].baohanh }}</span>
                          <span v-else>loading</span>
                        </li>
                      </ul>
                      <div>
                        Địa chỉ giao hàng:
                        {{
                          mainaddress.sonha +
                          ",Đường " +
                          mainaddress.tenduong +
                          ",Phường " +
                          mainaddress.phuongxa +
                          ",Quận " +
                          mainaddress.quanhuyen +
                          ",Thành Phố " +
                          mainaddress.tinhthanhpho
                        }}
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import getApi from "@/api/getApi";
import Convert from "@/ultities/convert";

export default {
  name: "Successfully",
  mixins: [componentmixin],
  data: () => ({
    user: {},
    thongtindonhang: {
      sanpham: [],
    },
    all: 0,
    mainaddress: {},
    load: false,
  }),
  mounted() {
    this.load = true;
    setTimeout(() => {
      this.load = false;
      this.thongtindonhang = JSON.parse(
        localStorage.getItem("thongtindonhang")
      );
      var price =
        Convert.numberRemoveDot(this.thongtindonhang.tongcong) +
        Convert.numberRemoveDot(this.thongtindonhang.phigiaohang);
      this.all = Convert.numberHaveDot(price);
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
              }
            });
          }
        });
      }
    }, 3000);
  },
  methods: {
    // onGoBack (){
    //   this.$router.push("/cart")
    // }
  },
};
</script>

<style lang="scss" scoped>
ul.leaders {
  max-width: 40em;
  padding: 0;
  overflow-x: hidden;
  list-style: none;
}
ul.leaders li {
  font-weight: 600;
  color: #333333;
}
ul.leaders li:before {
  float: left;
  width: 0;
  white-space: nowrap;
  font-size: 10px;
  margin-top: 6px;
  color: black;
  content: ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ";
}

ul.leaders span:first-child {
  padding-right: 0.33em;
  background: white;
}
ul.leaders span + span {
  float: right;
  padding-left: 0.33em;
  background: white;
}
/deep/ .sanpham {
  border-top: 1px dotted !important;
  border-bottom: 1px dotted !important;
}
.letter {
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin: 26px auto 0;
  max-width: 700px;
  min-height: 300px;
  padding: 24px;
  position: relative;
  width: 80%;
  color: black;
  border: 1px solid #eee;
}
.letter p {
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  margin-top: -45px;
}
.letter .logo {
  text-align: right;
  transform: translate(8px, -35px);
}
.letter:before,
.letter:after {
  content: "";
  height: 98%;
  position: absolute;
  width: 100%;
  z-index: -1;
  border: 1px solid #eee;
}
.letter:before {
  background: #ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  left: -5px;
  top: 4px;
  transform: rotate(-2.5deg);
}
.letter:after {
  background: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  right: -3px;
  top: 1px;
  transform: rotate(1.4deg);
}
/deep/ .o-summary__section {
  border: unset;
}
.header-dathang {
  text-align: center;
  margin-top: 48px;
  i {
    font-size: 32px;
    display: inline-block;
    color: #6ac26f;
    transform: translate(-11px, 2px);
  }
  p {
    font-size: 25px;
    display: inline;
  }
}
.goback {
  position: absolute;
  z-index: 1;
  width: 6%;
  cursor: pointer;
  transform: translate(-289px, 56px);
}
</style>