<template>
  <fragment>
    <!--====== Main Footer ======-->
    <!--====== Section 9 ======-->
    <div class="u-s-p-b-60">
      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 u-s-m-b-30 info-final">
              <div class="service u-h-100">
                <div class="service__icon">
                  <i class="fas fa-shipping-fast"></i>
                </div>
                <div class="service__info-wrap">
                  <span class="service__info-text-1">{{
                    $t("footer.freeship")
                  }}</span>

                  <span class="service__info-text-2">{{
                    $t("footer.freeshipcontent")
                  }}</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 u-s-m-b-30 info-final">
              <div class="service u-h-100">
                <div class="service__icon">
                  <i class="fas fa-shield-virus"></i>
                </div>
                <div class="service__info-wrap">
                  <span class="service__info-text-1">{{
                    $t("footer.safe")
                  }}</span>

                  <span class="service__info-text-2">{{
                    $t("footer.safecontent")
                  }}</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 u-s-m-b-30 info-final">
              <div class="service u-h-100">
                <div class="service__icon">
                  <i class="fas fa-globe-asia"></i>
                </div>
                <div class="service__info-wrap">
                  <span class="service__info-text-1">{{
                    $t("footer.convenient")
                  }}</span>

                  <span class="service__info-text-2">{{
                    $t("footer.convenientcontent")
                  }}</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 u-s-m-b-30 info-final">
              <div class="service u-h-100">
                <div class="service__icon">
                  <i class="fas fa-headphones-alt"></i>
                </div>
                <div class="service__info-wrap">
                  <span class="service__info-text-1">{{
                    $t("footer.support")
                  }}</span>

                  <span class="service__info-text-2">{{
                    $t("footer.supportcontent")
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Content ======-->
    </div>
    <!--====== End - Section 9 ======-->
    <footer>
      <div class="outer-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="outer-footer__content u-s-m-b-40">
                <span class="outer-footer__content-title">{{
                  $t("footer.intro")
                }}</span>

                <div class="outer-footer__text-wrap config">
                  <img class="img-logo" src="../assets/logo/logo-shop2.png" />
                </div>
                <div class="outer-footer__text-wrap">
                  <span>{{ $t("footer.first") }}</span>
                </div>
                <div class="outer-footer__text-wrap">
                  <span>{{ $t("footer.second") }}</span>
                </div>
                <div class="outer-footer__text-wrap">
                  <span>{{ $t("footer.third") }} </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="row">
                <div class="outer-footer__content u-s-m-b-40">
                  <span class="outer-footer__content-title">{{
                    $t("footer.and")
                  }}</span>
                  <div class="outer-footer__text-wrap">
                    <span>{{ $t("footer.fourd") }}</span>
                  </div>
                  <div class="outer-footer__text-wrap">
                    <span>{{ $t("footer.five") }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="outer-footer__content">
                <span class="outer-footer__content-title">{{
                  $t("footer.regist")
                }}</span>
                <form class="newsletter">
                  <div class="newsletter__group">
                    <label for="newsletter"></label>

                    <input
                      class="input-text input-text--only-white"
                      type="text"
                      id="newsletter"
                      :placeholder="$t('footer.email')"
                    />

                    <button
                      class="btn btn--e-brand newsletter__btn"
                      @click.prevent="onEmail"
                    >
                      {{ $t("footer.onregist") }}
                    </button>
                  </div>

                  <span class="newsletter__text">{{
                    $t("footer.onregistcontent")
                  }}</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lower-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="lower-footer__content">
                <div class="lower-footer__copyright">
                  <span>{{ $t("footer.shendu") }}</span>

                  <a href="index.html">LAZUDA</a>

                  <span>{{ $t("footer.paymentapprove") }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lower-footer">
        <div class="row bank-arr">
          <div class="lower-footer__payment">
            <ul>
              <li class="bank" v-for="(item, index) in galleyBank" :key="index">
                <div class="bank-payment">
                  <img :src="item" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  components: {
    Fragment,
  },
  data: () => ({
    galleyBank: [],
  }),
  methods: {
    onEmail() {},
  },
  mounted() {
    this.galleyBank = [
      require("../assets/logo/bank/eximbank_logo.png"),
      require("../assets/logo/bank/agribank_logo.png"),
      require("../assets/logo/bank/acb_logo.png"),
      require("../assets/logo/bank/abbank_logo.png"),
      require("../assets/logo/bank/1pay_logo.png"),
      require("../assets/logo/bank/CTT-VNPAY-QR.png"),
      require("../assets/logo/bank/amex_logo.png"),
      require("../assets/logo/bank/bacabank_logo.png"),
      require("../assets/logo/bank/bidc_logo.png"),
      require("../assets/logo/bank/bidv_logo.png"),
      require("../assets/logo/bank/dongabank_logo.png"),
      require("../assets/logo/bank/PVComBank_logo.png"),
      require("../assets/logo/bank/hdbank_logo.png"),
      require("../assets/logo/bank/ivb_logo.png"),
      require("../assets/logo/bank/jcb_logo.png"),
      require("../assets/logo/bank/laovietbank_logo.png"),
      require("../assets/logo/bank/mastercard_logo.png"),
      require("../assets/logo/bank/mbbank_logo.png"),
      require("../assets/logo/bank/msbank_logo.png"),
      require("../assets/logo/bank/namabank_logo.png"),
      require("../assets/logo/bank/ncb_logo.png"),
      require("../assets/logo/bank/ocb_logo.png"),
      require("../assets/logo/bank/ojb_logo.png"),
      require("../assets/logo/bank/sacombank_logo.png"),
      require("../assets/logo/bank/saigonbank.png"),
      require("../assets/logo/bank/scb_logo.png"),
      require("../assets/logo/bank/seabank_logo.png"),
      require("../assets/logo/bank/shb_logo.png"),
      require("../assets/logo/bank/techcombank_logo.png"),
      require("../assets/logo/bank/tpbank_logo.png"),
      require("../assets/logo/bank/upi_logo.png"),
      require("../assets/logo/bank/vccb_logo.png"),
      require("../assets/logo/bank/vib_logo.png"),
      require("../assets/logo/bank/vietabank_logo.png"),
      require("../assets/logo/bank/vietbank_logo.png"),
      require("../assets/logo/bank/vietcombank_logo.png"),
      require("../assets/logo/bank/vietinbank_logo.png"),
      require("../assets/logo/bank/vimass_logo.png"),
      require("../assets/logo/bank/vinid_logo.png"),
      require("../assets/logo/bank/visa_logo.png"),
      require("../assets/logo/bank/viviet_logo.png"),
      require("../assets/logo/bank/vnmart_logo.png"),
      require("../assets/logo/bank/vnptpay_logo.png"),
      require("../assets/logo/bank/vpbank_logo.png"),
      require("../assets/logo/bank/woori_logo.png"),
      require("../assets/logo/bank/yolo_logo.png"),
    ];
  },
};
</script>

<style lang="scss" scoped>
/deep/ .lower-footer__payment {
  margin-left: 10px;
}
/deep/ .lower-footer__content {
  justify-content: flex-start;
}
.outer-footer {
  background-color: rgba(46, 49, 49, 1);
}
.lower-footer {
  background-color: rgba(46, 49, 49, 1);
}
.config {
  text-align: center;
  margin-top: -19px;
  margin-bottom: -1px;
  .img-logo {
    width: 60%;
  }
}
.bank-arr {
  margin-left: 183px;
}
.bank {
  width: 220px;
  .bank-payment {
    background-color: white;
    margin-bottom: 10px;
    text-align: center;
    padding: 22px 0;
    img {
      height: 44px;
      vertical-align: middle;
    }
  }
}
/deep/ .info-final {
  padding: 0;
}

/deep/ .service__icon {
  margin-top: 33px;
  & > i {
    font-size: 46px;
  }
}
</style>
