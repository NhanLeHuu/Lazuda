<template>
  <fragment>
    <div class="u-s-p-b-60">
      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="checkout-f">
            <div class="row">
              <div class="col-lg-12">
                <div class="o-summary__section">
                  <div class="header">
                    <div class="circle-loader">
                      <div class="checkmark draw"></div>
                    </div>
                    <span class="gd">GIAO DỊCH THÀNH CÔNG</span>
                  </div>
                  <!-- Start -->
                  <div class="o-summary__box">
                    <table class="o-summary__table">
                      <tbody>
                        <tr>
                          <td class="left">Mã số giao dịch</td>
                          <td class="right">{{ thongtin.transaction }} đ</td>
                        </tr>
                        <tr>
                          <td class="left">Tổng tiền</td>
                          <td class="right">{{ thongtin.sotien }} đ</td>
                        </tr>
                        <tr>
                          <td class="left">Ngân hàng</td>
                          <td class="right bank">{{ thongtin.bank }}</td>
                        </tr>
                        <tr>
                          <td class="left">Loại thẻ</td>
                          <td class="right">{{ thongtin.type }}</td>
                        </tr>
                        <tr>
                          <td class="left">Thời gian thanh toán</td>
                          <td class="right">{{ thongtin.thoigian }}</td>
                        </tr>
                        <tr>
                          <td class="left">Số tiền thanh toán</td>
                          <td class="right">{{ thongtin.sotien }} đ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- End -->
                  <div class="footer-gd">
                    <button @click.prevent="onClose">Đóng</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import * as $ from "jquery";
import getApi from "@/api/getApi";
import Convert from "@/ultities/convert";

export default {
  name: "GDSuccess",
  data: () => ({
    thongtin: {},
  }),
  created() {},
  mounted() {
    setTimeout(() => {
      $(".circle-loader").toggleClass("load-complete");
      $(".checkmark").toggle();
    }, 1000);
    getApi("/paymentsuccess", {}, (result) => {
      if (result) {
        result.sotien = result.sotien
          .toString()
          .substring(0, result.sotien.length - 1);
        result.sotien = result.sotien
          .toString()
          .substring(0, result.sotien.length - 1);
        result.sotien = Convert.numberRemoveDot(result.sotien);
        result.sotien = Convert.numberHaveDot(result.sotien);
        result.thoigian = this.convertMessage(result.message);
        this.thongtin = result;
      }
    });
  },
  methods: {
    convertMessage(message) {
      var time = /.\/.+/.exec(message)
      console.log(time[0])
      return time[0];
    },
    onClose() {
      this.$router.push("/successfully");
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .o-summary__section {
  width: 615px;
  margin: 10px auto;
}
.left {
  color: #8b9198;
}
.right {
  color: black;
}
.bank {
  font-size: 26px;
}
/deep/ .o-summary__table tr:last-child td {
  &.left {
    color: #8b9198;
    font-size: 14px;
  }
  &.right {
    color: black;
    font-size: 14px;
  }
}
/deep/ tr {
  border-bottom: 1px dotted gray;
}
/deep/ .o-summary__box {
  padding: 50px;
  padding-top: 35px;
}
// Define vars we'll be using
$brand-success: #00baf3;
$loader-size: 7em;
$check-height: $loader-size/2;
$check-width: $check-height/2;
$check-left: ($loader-size/6 + $loader-size/12);
$check-thickness: 3px;
$check-color: $brand-success;

.header {
  text-align: center;
  border-bottom: 1px solid #f3f5f6;
  padding-bottom: 35px;
}
.footer-gd {
  padding: 35px 0;
  border-top: 1px solid #f3f5f6;
  text-align: center;
  button {
    color: white;
    background-color: $brand-success;
    padding: 10px 70px;
    border: 1px solid white;
    &:focus {
      border: 1px solid white;
    }
  }
}
.circle-loader {
  margin-bottom: $loader-size/2;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left-color: $check-color;
  animation: loader-spin 1.2s infinite linear;
  position: relative;
  display: block;
  // vertical-align: top;
  border-radius: 50%;
  width: $loader-size;
  height: $loader-size;
  margin: 0 auto;
  margin-top: 15px;
}
.gd {
  color: $brand-success;
  font-size: 20px;
  margin-top: 10px;
  display: inline-block;
}

.load-complete {
  -webkit-animation: none;
  animation: none;
  border-color: $check-color;
  transition: border 500ms ease-out;
}
.checkmark {
  display: none;

  &.draw:after {
    animation-duration: 800ms;
    animation-timing-function: ease;
    animation-name: checkmark;
    transform: scaleX(-1) rotate(135deg);
  }

  &:after {
    opacity: 1;
    height: $check-height;
    width: $check-width;
    transform-origin: left top;
    border-right: $check-thickness solid $check-color;
    border-top: $check-thickness solid $check-color;
    content: "";
    left: $check-left;
    top: $check-height;
    position: absolute;
  }
}

@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: $check-width;
    opacity: 1;
  }
  40% {
    height: $check-height;
    width: $check-width;
    opacity: 1;
  }
  100% {
    height: $check-height;
    width: $check-width;
    opacity: 1;
  }
}
</style>