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
                    <a href="cart.html">Cart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section 1 ======-->

      <!--====== Section 2 ======-->
      <div class="u-s-p-b-60">
        <!--====== Section Intro ======-->
        <div class="section__intro u-s-m-b-60">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section__text-wrap">
                  <h1 class="section__heading u-c-secondary">
                    Giỏ Hàng Của Tôi
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--====== End - Section Intro ======-->

        <!--====== Section Content ======-->
        <div class="section__content">
          <div class="row calc_cart">
            <div class="col-lg-9 col-md-9 col-sm-9 u-s-m-b-30">
              <div v-if="cart.length == 0" class="msg">
                Bạn chưa có sản phẩm nào trong giỏ hàng
              </div>
              <div v-if="cart.length > 0" class="msg">
                <div class="table-responsive">
                  <table class="table-p">
                    <tbody class="cart-item">
                      <!--====== Row ======-->
                      <tr v-for="(item, index) in cart" :key="index">
                        <!-- Radio -->
                        <el-checkbox
                          @change="onTick(item, index)"
                          v-model="item.tick"
                        ></el-checkbox>
                        <!-- san pham -->
                        <td class="table-p-first">
                          <div class="table-p__box">
                            <div class="table-p__img-wrap">
                              <img
                                class="u-img-fluid"
                                :src="item.galley[0]"
                                alt=""
                              />
                            </div>
                            <div class="table-p__info">
                              <span class="table-p__name">
                                <a @click.prevent="ondetail(item)">{{
                                  item.name
                                }}</a></span
                              >

                              <span class="table-p__category">
                                <a @click.prevent
                                  >Bảo hành {{ item.baohanh }}</a
                                ></span
                              >
                              <ul class="table-p__variant-list">
                                <li>
                                  <span>Giảm {{ item.discount }}%</span>
                                </li>
                                <li>
                                  <span>Sản phẩm còn {{ item.soluong }} </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span class="table-p__price"
                            >{{ item.price }} VNĐ</span
                          >
                        </td>
                        <td>
                          <div class="table-p__input-counter-wrap">
                            <!--====== Input Counter ======-->
                            <el-input-number
                              class="config"
                              value="1"
                              v-model="item.amount"
                              @change="handleChange"
                              :min="1"
                              :max="100"
                            ></el-input-number>
                            <!--====== End - Input Counter ======-->
                          </div>
                        </td>
                        <td>
                          <div class="table-p__del-wrap">
                            <a
                              class="far fa-trash-alt table-p__delete-link"
                              @click.prevent="onDelete(item)"
                            ></a>
                          </div>
                        </td>
                      </tr>
                      <!--====== End - Row ======-->
                    </tbody>
                  </table>
                </div>
                <div v-if="cart.length == 0" class="msg">Không Có Sản Phẩm</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 u-s-m-b-30">
              <form class="f-cart">
                <div class="row">
                  <div class="col-lg-12 col-md-12 u-s-m-b-30"></div>
                  <div class="col-lg-12 col-md-12 u-s-m-b-30"></div>
                  <div class="col-lg-12 col-md-12 u-s-m-b-30">
                    <div v-loading="loading" class="msg">
                      <div class="f-cart__pad-box">
                        <div class="u-s-m-b-30">
                          <h4 class="info">Thông Tin Đơn Hàng</h4>
                          <table class="f-cart__table">
                            <tbody>
                              <tr>
                                <td>Tạm tính số sản phẩm</td>
                                <td>{{ thongtindonhang.soluongsanpham }}</td>
                              </tr>
                              <tr>
                                <td>Tổng Số Lượng</td>
                                <td>{{ thongtindonhang.tongsoluong }}</td>
                              </tr>
                              <tr>
                                <td>Phí Giao Hàng</td>
                                <td>{{ thongtindonhang.phigiaohang }} đ</td>
                              </tr>
                              <tr>
                                <td>Tổng Cộng</td>
                                <td>{{ thongtindonhang.tongcongcart }} đ</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div>
                          <button
                            class="btn btn--e-brand-b-2"
                            @click.prevent="onCheckout"
                          >
                            Thanh Toán
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!--====== End - Section Content ======-->
      </div>
      <!--====== End - Section 2 ======-->
      <!--====== Section 3 ======-->

      <!--====== End - Section 3 ======-->
    </div>
    <!--====== End - App Content ======-->
    <Footer />
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import Convert from "@/ultities/convert";
import getApi from "@/api/getApi";
import * as $ from "jquery";

export default {
  name: "Cart",
  mixins: [componentmixin],
  data: () => ({
    user: {},
    cart: [],
    thongtindonhang: {
      soluongsanpham: 0,
      tongcong: 0,
      sanpham: [],
      tongsoluong: 0,
      phigiaohang: 0,
      tongcongcart: 0,
      phivat: 0,
    },
    loading: false,
  }),
  mounted() {
    var user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : JSON.parse(sessionStorage.getItem("user"));

    var body = {
      email: user.email,
      matkhau: user.matkhau,
    };
    getApi("/loginuser", body, (result) => {
      if (result.data) {
        var user = result.data[0];
        if (user) {
          this.user = user;
          this.cart = Convert.srcImage(user.cart);
          this.cart.forEach((e) => {
            e.tick = false;
          });
          this.thongtindonhang.tongcong = Convert.numberHaveDot(
            this.thongtindonhang.tongcong
          );
          localStorage.setItem("user", JSON.stringify(user));
        }
      }
    });
    this.rmZoom();
  },
  methods: {
    ondetail(item) {
      var detail = {
        id: item.id,
        name: item.typemenu,
      };
      localStorage.setItem("detail", JSON.stringify(detail));
      location.href = "/detail_" + Convert.removeVietnameseTones(item.name);
    },
    rmZoom() {
      $(".zoomContainer").remove();
    },
    onDelete(val) {
      this.$confirm("Bạn có muốn xoá sản phẩm khỏi giỏi hàng?")
        .then((_) => {
          var body = {
            id: val.id,
          };
          getApi("/delcart", body, (result) => {
            if (result.status == 200) {
              this.cart.forEach((e, i) => {
                if (e.id == val.id) {
                  this.cart.splice(i, 1);
                  this.user.cart = this.cart;
                  localStorage.setItem("user", JSON.stringify(this.user));
                }
              });
            }
          });
        })
        .catch((_) => {});
      this.$forceUpdate();
    },
    onCheckout() {
      if (this.thongtindonhang.sanpham != 0) {
        localStorage.setItem(
          "thongtindonhang",
          JSON.stringify(this.thongtindonhang)
        );
        this.$router.replace("/checkout");
      } else {
        this.$notify({
          title: "Thông Tin Đến Bạn",
          dangerouslyUseHTMLString: true,
          message: `<strong>Bạn chưa chọn sản phẩm thanh toán</strong>
            <style>
            .el-notification__icon {margin-top: 0px;}
            .el-notification__group {margin-top: -13px;}
            .el-notification__group h2 {font-size: 12px;}
            .el-notification__group .el-notification__content {margin-top: -8px;}
            </style>
          `,
          duration: 3000,
          type: "warning",
        });
      }
    },
    handleChange(e) {
      console.log(e);
    },
    onTick(item, index = index + 1) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 800);

      var { thongtindonhang } = this;
      this.cart.forEach((e) => {
        if (e.id == item.id) {
          e.tick === true ? false : true;
        }
      });
      //
      this.cart.forEach((e) => {
        if (e.tick) {
          let tontaisanpham = false;
          thongtindonhang.sanpham.forEach((a) => {
            if (a.name == item.name) {
              tontaisanpham = true;
            }
          });
          // chưa tồn tại sản phẩm đó, nhưng có sản phẩm khác rồi
          if (!tontaisanpham) {
            thongtindonhang.sanpham.push(item);
          }
          if (thongtindonhang.sanpham.length == 0) {
            thongtindonhang.sanpham.push(item);
          }
        }
      });
      this.cart.forEach((e) => {
        if (!e.tick) {
          thongtindonhang.sanpham.forEach((a, asd) => {
            if (e.name == a.name) {
              thongtindonhang.sanpham.splice(asd, 1);
            }
          });
        }
      });

      thongtindonhang.tongcong = 0;
      thongtindonhang.soluongsanpham = 0;
      thongtindonhang.tongsoluong = 0;
      thongtindonhang.phigiaohang = 0;
      thongtindonhang.tongcongcart = 0;

      thongtindonhang.sanpham.forEach((e) => {
        thongtindonhang.soluongsanpham += 1;
        thongtindonhang.tongsoluong += parseInt(e.amount);
        thongtindonhang.phigiaohang = Convert.numberHaveDot(
          Convert.numberRemoveDot(thongtindonhang.phigiaohang) + 20000
        );

        var price = Convert.numberRemoveDot(e.price);
        var sum = price * parseInt(e.amount);

        thongtindonhang.tongcong = Convert.numberHaveDot(
          Convert.numberRemoveDot(thongtindonhang.tongcong) + sum
        );

        thongtindonhang.tongcongcart = Convert.numberHaveDot(
          Convert.numberRemoveDot(thongtindonhang.tongcong) + 20000
        );

        e.tongcong = Convert.numberHaveDot(Convert.numberRemoveDot(sum));
      });
      thongtindonhang.phivat = Convert.numberHaveDot(
        (Convert.numberRemoveDot(thongtindonhang.tongcong) * 10) / 100
      );
      // thongtindonhang.tongcongcart = Convert.numberHaveDot(
      //   Convert.numberRemoveDot(thongtindonhang.tongcongcart) +
      //     Convert.numberRemoveDot(thongtindonhang.phivat)
      // );
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .calc_cart {
  width: 95%;
  margin: 0 auto;
}
/deep/ .el-checkbox {
  margin-top: 75px;
}
/deep/ .el-checkbox__inner {
  width: 24px;
  height: 24px;
}

.info {
  color: black;
  transform: translate(-2px, -21px);
  font-size: 18px;
}
/deep/ .table-p {
  border: unset;
  tr {
    border-top: unset;
  }
}
/deep/ .f-cart__pad-box {
  border: unset;
}
/deep/ .el-input-number {
  .el-input-number__decrease {
    color: #ffffff;
    background-color: #ff4500;
  }
  .el-input-number__increase {
    color: #ffffff;
    background-color: #ff4500;
  }
  .el-input {
    input {
      color: black;
    }
  }
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
.table-p-first {
  width: 456px;
}
/deep/ .el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #ff4500;
  border-color: #ff4500;
}
/deep/ .el-checkbox__inner::after {
  height: 14px;
  left: 7px;
  width: 7px;
}
.cart-item {
  tr {
    border-bottom: 2px solid #eee;
  }
  tr:last-child {
    border: unset;
  }
}
/deep/ .f-cart__pad-box {
  padding: 31px 10px 35px;
}
</style>