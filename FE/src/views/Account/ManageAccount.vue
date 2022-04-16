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
                    <a href="/">Home</a>
                  </li>
                  <li class="is-marked">
                    <a @click.prevent>{{ pathname }}</a>
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
        <!--====== Section Content ======-->
        <div class="section__content">
          <div class="dash">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-12">
                  <!--====== Dashboard Features ======-->
                  <div
                    class="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30"
                  >
                    <div class="dash__pad-1">
                      <span class="dash__text u-s-m-b-16"
                        >Hi, <b>{{ user.ho + " " + user.ten }}</b></span
                      >
                      <ul class="dash__f-list">
                        <li @click.prevent="onRouter('summary', 'general')">
                          <router-link
                            :class="{ 'dash-active': router.summary }"
                            to="/dashboard-account/summary"
                            >{{ $t("manageaccount.general") }}</router-link
                          >
                        </li>
                        <li @click.prevent="onRouter('profile', 'myinfo')">
                          <router-link
                            :class="{ 'dash-active': router.profile }"
                            to="/dashboard-account/profile"
                            >{{ $t("manageaccount.myinfo") }}</router-link
                          >
                        </li>
                        <li @click.prevent="onRouter('myaddress', 'address')">
                          <router-link
                            :class="{ 'dash-active': router.myaddress }"
                            to="/dashboard-account/myaddress"
                            >{{ $t("manageaccount.address") }}</router-link
                          >
                        </li>
                        <li
                          @click.prevent="onRouter('trackorder', 'checkorder')"
                        >
                          <router-link
                            :class="{ 'dash-active': router.trackorder }"
                            to="/dashboard-account/trackorder"
                            >{{ $t("manageaccount.checkorder") }}</router-link
                          >
                        </li>
                        <li @click.prevent="onRouter('myorder', 'myorder')">
                          <router-link
                            :class="{ 'dash-active': router.myorder }"
                            to="/dashboard-account/myorder"
                            >{{ $t("manageaccount.myorder") }}</router-link
                          >
                        </li>
                        <!-- <li
                          @click.prevent="onRouter('paymentoption', 'select')"
                        >
                          <router-link
                            :class="{ 'dash-active': router.paymentoption }"
                            to="/dashboard-account/paymentoption"
                            >{{ $t("manageaccount.select") }}</router-link
                          >
                        </li> -->
                        <li @click.prevent="onRouter('myrefund', 'cancel')">
                          <router-link
                            :class="{ 'dash-active': router.myrefund }"
                            to="/dashboard-account/myrefund"
                            >{{ $t("manageaccount.cancel") }}</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="dash__box dash__box--bg-white dash__box--shadow dash__box--w"
                  >
                    <div class="dash__pad-1">
                      <ul class="dash__w-list">
                        <li>
                          <div class="dash__w-wrap">
                            <span class="dash__w-icon dash__w-icon-style-1"
                              ><i class="fas fa-cart-arrow-down"></i
                            ></span>

                            <span class="dash__w-text">{{ ordered }}</span>

                            <span class="dash__w-name">Số Đơn Đã Đặt</span>
                          </div>
                        </li>
                        <li>
                          <div class="dash__w-wrap">
                            <span class="dash__w-icon dash__w-icon-style-2"
                              ><i class="fas fa-times"></i
                            ></span>

                            <span class="dash__w-text">0</span>

                            <span class="dash__w-name">Số Đơn Hoàn Trả/Huỷ</span>
                          </div>
                        </li>
                        <li>
                          <div class="dash__w-wrap">
                            <span class="dash__w-icon dash__w-icon-style-3"
                              ><i class="fas fa-gifts"></i></span>

                            <span class="dash__w-text">0</span>

                            <span class="dash__w-name">Voucher</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!--====== End - Dashboard Features ======-->
                </div>
                <TransitionPage>
                  <router-view></router-view>
                </TransitionPage>
                <!-- <router-view></router-view> -->
              </div>
            </div>
          </div>
        </div>
        <!--====== End - Section Content ======-->
      </div>
      <!--====== End - Section 2 ======-->
    </div>
    <!--====== End - App Content ======-->
    <Footer />
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import * as $ from "jquery";

export default {
  name: "ManageAccount",
  components: {},
  mixins: [componentmixin],
  watch: {
    $ordered: function (val,oldVal){
      console.log(val)
      this.ordered = val.dadat
    }
  },
  data: () => ({
    user: {},
    pathname: "",
    router: {
      summary: true,
      profile: false,
      myaddress: false,
      trackorder: false,
      myorder: false,
      paymentoption: false,
      myrefund: false,
    },
    ordered: 0
  }),
  mounted() {
    this.rmZoom();
    var user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      this.user = user;
    }
    this.ordered = JSON.parse(localStorage.getItem("ordered"));

    this.pathname = this.$t(`manageaccount.general`)
  },
  methods: {
    rmZoom() {
      $(".zoomContainer").remove();
    },
    onRouter(event, path) {
      this.router.summary = false;
      this.router.profile = false;
      this.router.myaddress = false;
      this.router.trackorder = false;
      this.router.myorder = false;
      this.router.paymentoption = false;
      this.router.myrefund = false;
      this.pathname = this.$t(`manageaccount.${path}`);
      this.router[event] = true;
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .dash-active {
  text-decoration: underline;
}
/deep/ .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

/deep/ .fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>