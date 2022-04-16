<template>
  <fragment>
    <Header />
    <!--====== App Content ======-->
    <div class="app-content">
      <!--====== Section 1 ======-->
      <div class="u-s-p-t-90">
        <div class="container addWidth">
          <div class="row addBack">
            <div class="col-lg-7 pro-left">
              <!--====== Product Breadcrumb ======-->
              <!-- <div class="pd-breadcrumb u-s-m-b-30">
                <ul class="pd-breadcrumb__list">
                  <li class="has-separator">
                    <a href="index.hml">Home</a>
                  </li>
                  <li class="has-separator">
                    <a href="shop-side-version-2.html">Electronics</a>
                  </li>
                  <li class="has-separator">
                    <a href="shop-side-version-2.html">DSLR Cameras</a>
                  </li>
                  <li class="is-marked">
                    <a href="shop-side-version-2.html">Nikon Cameras</a>
                  </li>
                </ul>
              </div> -->
              <!--====== End - Product Breadcrumb ======-->

              <!--====== Product Detail Zoom ======-->
              <div class="pd u-s-m-b-30">
                <div class="slider-fouc pd-wrap">
                  <div id="pd-o-initiate">
                    <div
                      v-for="(item, key) in detail.galley"
                      :key="key"
                      class="pd-o-img-wrap"
                      :data-src="item"
                    >
                      <img
                        class="u-img-fluid"
                        :src="item"
                        :data-zoom-image="item"
                        alt=""
                      />
                    </div>
                  </div>

                  <span class="pd-text">Click for larger zoom</span>
                </div>
                <div class="u-s-m-t-15">
                  <div class="slider-fouc">
                    <div id="pd-o-thumbnail">
                      <div v-for="(item, key) in detail.galley" :key="key">
                        <img class="u-img-fluid" :src="item" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--====== End - Product Detail Zoom ======-->
            </div>
            <div class="col-lg-5">
              <!--====== Product Right Side Details ======-->
              <div class="pd-detail">
                <!-- flashsale -->
                <div v-if="flashsale" class="section_countdown-status">
                  <div class="section_countdown-wrap">
                    <img class="fs" src="@/assets/product/fs.png" />
                    <div
                      class="countdown countdown--style-section"
                      :data-countdown="flashsale"
                    ></div>
                  </div>
                </div>
                <!-- end -->
                <div>
                  <span class="pd-detail__name">{{ detail.name }}</span>
                </div>
                <div>
                  <div class="pd-detail__inline">
                    <span class="pd-detail__price">{{ priceNew }} VNĐ</span>

                    <span class="pd-detail__discount"
                      >(Giảm {{ detail.discount }}%)</span
                    ><del class="pd-detail__del">{{ detail.price }} VNĐ</del>
                  </div>
                </div>
                <div class="u-s-m-b-15">
                  <div class="pd-detail__rating gl-rating-style">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i
                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                    ><i class="fas fa-star-half-alt"></i>

                    <span class="pd-detail__review u-s-m-l-4">
                      <a data-click-scroll="#view-review">23 Reviews</a></span
                    >
                  </div>
                </div>
                <div class="u-s-m-b-15">
                  <span class="pd-detail__preview-desc">{{
                    detail.summary
                  }}</span>
                </div>
                <div class="u-s-m-b-15">
                  <div class="pd-detail__inline"></div>
                </div>

                <div class="u-s-m-b-15">
                  <form class="pd-detail__form">
                    <div class="pd-detail-inline-2 config-detail">
                      <div class="u-s-m-b-15">
                        <!--====== Input Counter ======-->
                        <div class="input-counter">
                          <el-input-number
                            class="config"
                            v-model="amount"
                            @change="handleChange"
                            :min="1"
                            :max="100"
                          ></el-input-number>
                          <div class="pd-detail__inline amount">
                            <span
                              v-if="detail.soluong > 5"
                              class="pd-detail__stock"
                              >{{ $t("detail.still") }} {{ detail.soluong }}
                              {{ $t("detail.product") }}</span
                            >

                            <span v-else class="pd-detail__left"
                              >{{ $t("detail.thereOnly") }}
                              {{ detail.soluong }}
                              {{ $t("detail.product") }}</span
                            >
                          </div>
                        </div>

                        <!--====== End - Input Counter ======-->
                      </div>
                      <div class="u-s-m-b-15">
                        <button
                          class="btn btn--e-brand-b-2"
                          @click.prevent="onAddCart"
                        >
                          {{ $t("detail.addcart") }}
                        </button>
                        <button
                          class="btn btn--e-brand-b-2 onbuy"
                          @click.prevent="onBuyNow"
                          type="submit"
                        >
                          {{ $t("detail.buynow") }}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="u-s-m-b-15">
                  <table class="f-cart__table">
                    <tbody>
                      <tr>
                        <td>{{ $t("detail.standard") }}</td>
                        <td>2 -4 {{ $t("detail.day") }}</td>
                      </tr>
                      <tr>
                        <td>{{ $t("detail.received") }}</td>
                        <td>{{ $t("detail.nocheck") }}</td>
                      </tr>
                      <tr>
                        <td>{{ $t("detail.returns") }}</td>
                        <td>48h</td>
                      </tr>
                      <tr>
                        <td>{{ $t("detail.ship") }}</td>
                        <td>20,000 đ</td>
                      </tr>
                      <tr>
                        <td>{{ $t("detail.product") }}</td>
                        <td>{{ $t("detail.genuine") }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="u-s-m-b-15">
                  <span class="pd-detail__label u-s-m-b-8"
                    >Đổi Trả Và Bảo Hành</span
                  >
                  <ul class="pd-detail__policy-list">
                    <li>
                      <div class="infom">
                        <i class="fas fa-shield-alt"></i>
                      </div>

                      <span>100% Chính Hãng </span>
                    </li>
                    <li>
                      <div class="infom">
                        <i class="fas fa-user-shield"></i>
                      </div>

                      <span>15 Ngày Đổi/Trả Hàng</span>
                      <span class="refund-cancel"
                        >Được trả hàng với lý do "Không vừa ý" (Sản phẩm chưa
                        qua sử dụng và còn nguyên tem mạc)</span
                      >
                    </li>
                  </ul>
                </div>
                <div class="u-s-m-b-15">
                  <span class="pd-detail__label u-s-m-b-8">Chia Sẻ</span>
                  <div class="networkshare">
                    <ShareNetwork
                      v-for="network in networks"
                      :network="network.network"
                      :key="network.network"
                      :style="{ backgroundColor: network.color }"
                      :url="sharing.url"
                      :title="sharing.title"
                      :description="sharing.description"
                      :quote="sharing.quote"
                      :hashtags="sharing.hashtags"
                      :twitterUser="sharing.twitterUser"
                    >
                      <i :class="network.icon"></i>
                      <span>{{ network.name }}</span>
                    </ShareNetwork>
                  </div>
                </div>
              </div>
              <!--====== End - Product Right Side Details ======-->
            </div>
          </div>
        </div>
      </div>

      <!--====== Product Detail Tab ======-->
      <div class="u-s-p-y-90 detailtab">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="pd-tab">
                <div class="u-s-m-b-30">
                  <ul class="nav pd-tab__list">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#pd-desc"
                        >Chi Tiết Sản Phẩm</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#pd-tag"
                        >Hỏi Đáp</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="view-review"
                        data-toggle="tab"
                        href="#pd-rev"
                        >Đánh Giá Đã Mua

                        <span>(0)</span></a
                      >
                    </li>
                  </ul>
                </div>
                <TabDetail
                  :thongtin="this.detail.thongtin"
                  :desciption="this.detail.description"
                  :table="this.detail.typemenu"
                  :id="this.detail.id"
                  :chatprop="this.detail.chat"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Product Detail Tab ======-->
      <div class="sanphamkhac">
        <!--====== Section Intro ======-->
        <div class="section__intro u-s-m-b-46" style="margin-bottom: 21px">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="block">
                  <span class="block__title">Sản Phẩm Khác</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--====== End - Section Intro ======-->

        <!--====== Section Content ======-->
        <div class="section__content">
          <div class="container">
            <div class="tab-content">
              <!--====== Tab 1 ======-->
              <div class="tab-pane fade show active" id="w-l-p">
                <div class="slider-fouc">
                  <div class="owl-carousel tab-slider" data-item="5">
                    <div
                      v-for="(item, index) in otherproduct"
                      :key="index"
                      class="u-s-m-b-30"
                    >
                      <div class="product-o product-o--hover-on">
                        <div class="product-o__wrap">
                          <a
                            class="
                              aspect aspect--bg-grey aspect--square
                              u-d-block
                            "
                            @click.prevent="ondetail(item)"
                          >
                            <img
                              class="aspect__img"
                              :src="item.galley[0]"
                              alt=""
                            />
                          </a>
                        </div>
                        <span class="product-o__category">
                          <a @click.prevent="ondetail(item)">Electric</a>
                        </span>
                        <span class="product-o__name">
                          <a @click.prevent="ondetail(item)">{{ item.name }}</a>
                        </span>
                        <div class="product-o__rating gl-rating-style">
                          <i class="far fa-star"></i><i class="far fa-star"></i
                          ><i class="far fa-star"></i><i class="far fa-star"></i
                          ><i class="far fa-star"></i>

                          <span class="product-o__review">(0)</span>
                        </div>

                        <span class="product-o__price">{{ item.price }} đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--====== End - Tab 1 ======-->
            </div>
          </div>
        </div>
        <!--====== End - Section Content ======-->
      </div>
      <!--====== End - Section 1 ======-->
      <!--====== End - Product Detail Tab ======-->
      <div class="quantam">
        <!--====== Section Intro ======-->
        <div class="section__intro u-s-m-b-46" style="margin-bottom: 21px">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="block">
                  <span class="block__title">CÓ THỂ BẠN QUAN TÂM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--====== End - Section Intro ======-->

        <!--====== Section Content ======-->
        <div class="section__content">
          <div class="container">
            <div class="tab-content">
              <!--====== Tab 1 ======-->
              <div class="tab-pane fade show active" id="w-l-p">
                <div class="slider-fouc">
                  <div class="owl-carousel tab-slider" data-item="5">
                    <div
                      v-for="(item, index) in product1"
                      :key="index"
                      class="u-s-m-b-30"
                    >
                      <div class="product-o product-o--hover-on">
                        <div class="product-o__wrap">
                          <a
                            class="
                              aspect aspect--bg-grey aspect--square
                              u-d-block
                            "
                            @click.prevent="ondetail(item)"
                          >
                            <img
                              class="aspect__img"
                              :src="item.galley[0]"
                              alt=""
                            />
                          </a>
                        </div>
                        <span class="product-o__category">
                          <a @click.prevent="ondetail(item)">Electric</a>
                        </span>
                        <span class="product-o__name">
                          <a @click.prevent="ondetail(item)">{{ item.name }}</a>
                        </span>
                        <div class="product-o__rating gl-rating-style">
                          <i class="far fa-star"></i><i class="far fa-star"></i
                          ><i class="far fa-star"></i><i class="far fa-star"></i
                          ><i class="far fa-star"></i>

                          <span class="product-o__review">(0)</span>
                        </div>

                        <span class="product-o__price">{{ item.price }} đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--====== End - Tab 1 ======-->
            </div>
          </div>
        </div>
        <!--====== End - Section Content ======-->
        <!--====== Section Content ======-->
        <div class="section__content">
          <div class="container">
            <div class="tab-content">
              <!--====== Tab 1 ======-->
              <div class="tab-pane fade show active" id="w-l-p">
                <div class="slider-fouc">
                  <div class="owl-carousel tab-slider" data-item="5">
                    <div
                      v-for="(item, index) in product2"
                      :key="index"
                      class="u-s-m-b-30"
                    >
                      <div class="product-o product-o--hover-on">
                        <div class="product-o__wrap">
                          <a
                            class="
                              aspect aspect--bg-grey aspect--square
                              u-d-block
                            "
                            @click.prevent="ondetail(item)"
                          >
                            <img
                              class="aspect__img"
                              :src="item.galley[0]"
                              alt=""
                            />
                          </a>
                        </div>
                        <span class="product-o__category">
                          <a @click.prevent="ondetail(item)">Electric</a>
                        </span>
                        <span class="product-o__name">
                          <a @click.prevent="ondetail(item)">{{ item.name }}</a>
                        </span>
                        <div class="product-o__rating gl-rating-style">
                          <i class="far fa-star"></i><i class="far fa-star"></i
                          ><i class="far fa-star"></i><i class="far fa-star"></i
                          ><i class="far fa-star"></i>

                          <span class="product-o__review">(0)</span>
                        </div>

                        <span class="product-o__price">{{ item.price }} đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--====== End - Tab 1 ======-->
            </div>
          </div>
        </div>
        <!--====== End - Section Content ======-->
        <!--====== Section Content ======-->
        <div class="section__content">
          <div class="container">
            <div class="tab-content">
              <!--====== Tab 1 ======-->
              <div class="tab-pane fade show active" id="w-l-p">
                <div class="slider-fouc">
                  <div class="owl-carousel tab-slider" data-item="5">
                    <div
                      v-for="(item, index) in product3"
                      :key="index"
                      class="u-s-m-b-30"
                    >
                      <div class="product-o product-o--hover-on">
                        <div class="product-o__wrap">
                          <a
                            class="
                              aspect aspect--bg-grey aspect--square
                              u-d-block
                            "
                            @click.prevent="ondetail(item)"
                          >
                            <img
                              class="aspect__img"
                              :src="item.galley[0]"
                              alt=""
                            />
                          </a>
                        </div>
                        <span class="product-o__category">
                          <a @click.prevent="ondetail(item)">Electric</a>
                        </span>
                        <span class="product-o__name">
                          <a @click.prevent="ondetail(item)">{{ item.name }}</a>
                        </span>
                        <div class="product-o__rating gl-rating-style">
                          <i class="far fa-star"></i><i class="far fa-star"></i
                          ><i class="far fa-star"></i><i class="far fa-star"></i
                          ><i class="far fa-star"></i>

                          <span class="product-o__review">(0)</span>
                        </div>

                        <span class="product-o__price">{{ item.price }} đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--====== End - Tab 1 ======-->
            </div>
          </div>
        </div>
        <!--====== End - Section Content ======-->
      </div>
      <!--====== End - Section 1 ======-->
    </div>
    <!--====== End - App Content ======-->
    <Footer />
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import getApi from "@/api/getApi";
import { env } from "@/env/env";
import Convert from "@/ultities/convert";

export default {
  name: "Detail",
  mixins: [componentmixin],
  components: {},
  data: () => ({
    detail: {},
    priceNew: "",
    amount: 1,
    user: "",
    loadProd: false,
    otherproduct: [],
    flashsale: null,
    urldetail: "",
    sharing: {
      url: "https://news.vuejs.org/issues/180",
      title:
        "Say hi to Vite! A brand new, extremely fast development setup for Vue.",
      description:
        'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
      quote: "The hot reload is so fast it's near instant. - Evan You",
      hashtags: "vuejs,vite,javascript",
      twitterUser: "nguyenhuuvinh",
    },
    networks: [
      {
        network: "facebook",
        name: "Facebook",
        icon: "fab fah fa-lg fa-facebook-f",
        color: "#1877f2",
      },
      {
        network: "twitter",
        name: "Twitter",
        icon: "fab fah fa-lg fa-twitter",
        color: "#1da1f2",
      },
      {
        network: "line",
        name: "Line",
        icon: "fab fah fa-lg fa-line",
        color: "#00c300",
      },
      {
        network: "skype",
        name: "Skype",
        icon: "fab fah fa-lg fa-skype",
        color: "#00aff0",
      },
      {
        network: "telegram",
        name: "Telegram",
        icon: "fab fah fa-lg fa-telegram-plane",
        color: "#0088cc",
      },
      {
        network: "messenger",
        name: "Messenger",
        icon: "fab fah fa-lg fa-facebook-messenger",
        color: "#0084ff",
      },
      {
        network: "viber",
        name: "Viber",
        icon: "fab fah fa-lg fa-viber",
        color: "#59267c",
      },
      {
        network: "linkedin",
        name: "LinkedIn",
        icon: "fab fah fa-lg fa-linkedin",
        color: "#007bb5",
      },
      {
        network: "reddit",
        name: "Reddit",
        icon: "fab fah fa-lg fa-reddit-alien",
        color: "#ff4500",
      },
    ],
    product1: [],
    product2: [],
    product3: [],
  }),
  watch: {
    otherproduct: {
      deep: true,
      handler(val) {
        if (val.length > 0) {
          val.forEach((e, index) => {
            if (e.id == this.detail.id) {
              val.splice(index, 1);
            }
          });
        }
      },
    },
    loadProd: {
      deep: true,
      handler(val) {
        if (val) {
          require("@/assets/js/vendor");
          require("@/assets/js/jquery.shopnav");
          require("@/assets/js/app");
        }
      },
    },
    detail: {
      deep: true,
      handler(val) {
        if (val.price) {
          var price = parseInt(val.price.replaceAll(",", ""));
          var discount = parseFloat(val.discount);
          var priceNew = parseInt(price * ((100 - discount) / 100));
          this.priceNew = new Number(priceNew)
            .toLocaleString()
            .replaceAll(".", ",");
          this.loadProd = true;
          this.setSocial();
        }
      },
    },
  },
  created() {
    var detail = JSON.parse(localStorage.getItem("detail"));
    var id = detail.id;
    var name = detail.name;

    getApi(`/getdetail/${name}/${id}`, null, (result) => {
      var product = Convert.srcImage(result.product);
      this.detail = product;
      this.detail.thongtin = result.thongtin;
      this.detail.soluong = parseInt(this.detail.soluong);
      this.detail.chat = result.chat;
      console.log(this.detail);
      this.getOther();
    });
    getApi("/otherProduct", { table: name }, (result) => {
      this.otherproduct = Convert.srcImage(result.data);
    });
    getApi("/relateProduct", {}, (result) => {
      this.product1 = Convert.srcImage(result.data.product1);
      this.product2 = Convert.srcImage(result.data.product2);
      this.product3 = Convert.srcImage(result.data.product3);
    });

    var user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : JSON.parse(sessionStorage.getItem("user"));
    var flashsale = JSON.parse(localStorage.getItem("flashsale"));
    if (flashsale) {
      this.flashsale = flashsale;
      localStorage.removeItem("flashsale");
    }
    if (user) {
      this.user = user;
    }
    // this.sharing.url =
    //   "http://192.168.1.8:8080" + this.$router.currentRoute.fullPath;
  },
  methods: {
    setSocial() {
      this.sharing.title = this.detail.name;
      this.sharing.description = this.detail.summary;
      this.sharing.url =
        env.server + ":8080" + this.$router.currentRoute.fullPath;
      this.sharing.quote =
        this.detail.name +
        "." +
        this.detail.summary +
        " Link LAZUDA: " +
        this.sharing.url;
      this.sharing.hashtags = "LAZUDA" + "," + this.sharing.url;
    },
    getOther() {},
    handleChange(event) {
      this.amount = event;
    },
    ondetail(item) {
      var detail = {
        id: item.id,
        name: item.typemenu,
      };
      localStorage.setItem("detail", JSON.stringify(detail));
      location.href = "/detail_" + Convert.removeVietnameseTones(item.name);
    },
    onBuyNow() {
      if (!this.user) {
        this.$notify({
          title: "Thêm Thất Bại",
          dangerouslyUseHTMLString: true,
          message: `<strong>Bạn chưa đăng nhập tài khoản</strong>
              <style>
              .el-notification__icon {margin-top: 0px;}
              .el-notification__group {margin-top: -13px;}
              .el-notification__group h2 {font-size: 12px;}
              .el-notification__group .el-notification__content {margin-top: -8px;}
              </style>
            `,
          duration: 3000,
          type: "error",
        });
        return;
      } else {
        var thongtindonhang = {};
        thongtindonhang.sanpham = [this.detail];
        thongtindonhang.sanpham[0].amount = this.amount;
        var tongcong = Convert.numberRemoveDot(this.detail.price) * this.amount;
        var tongcongconvert = Convert.numberHaveDot(tongcong);

        thongtindonhang.sanpham[0].tongcong = tongcongconvert;
        thongtindonhang.phigiaohang = "20,000";
        thongtindonhang.soluongsanpham = 1;
        thongtindonhang.tongsoluong = 1;
        thongtindonhang.tongcong = this.detail.price;
        thongtindonhang.phivat = Convert.numberHaveDot(
          (Convert.numberRemoveDot(thongtindonhang.tongcong) * 10) / 100
        );
        localStorage.setItem(
          "thongtindonhang",
          JSON.stringify(thongtindonhang)
        );
        this.$router.replace("/checkout");
      }
    },
    onAddCart() {
      if (!this.user) {
        this.$notify({
          title: "Thêm Thất Bại",
          dangerouslyUseHTMLString: true,
          message: `<strong>Bạn chưa đăng nhập tài khoản</strong>
              <style>
              .el-notification__icon {margin-top: 0px;}
              .el-notification__group {margin-top: -13px;}
              .el-notification__group h2 {font-size: 12px;}
              .el-notification__group .el-notification__content {margin-top: -8px;}
              </style>
            `,
          duration: 3000,
          type: "error",
        });
        return;
      }
      var detail = JSON.parse(localStorage.getItem("detail"));
      var id = detail.id;
      var name = detail.name;
      var body = {
        idsanpham: id,
        loaisanpham: name,
        iduser: this.user.id,
        amount: this.amount,
      };
      getApi(`/addcart`, body, (result) => {
        if (result.status == 200) {
          this.$notify({
            title: "Thêm Sản Phẩm",
            dangerouslyUseHTMLString: true,
            message: `<strong>Bạn Đã Thêm Sản Phẩm Vào Giỏ Hàng</strong>
              <style>
              .el-notification__icon {margin-top: 0px;}
              .el-notification__group {margin-top: -13px;}
              .el-notification__group h2 {font-size: 12px;}
              .el-notification__group .el-notification__content {margin-top: -8px;}
              </style>
            `,
            duration: 3000,
            type: "success",
          });
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
#reviewer-text {
  border: 1px solid;
}
#reviewer-email {
  border: 1px solid;
}
#reviewer-name {
  border: 1px solid;
}
.radio-box__label:after {
  border: 2px solid red !important;
}
.pd-detail__preview-desc {
  color: black;
}
.pd-detail__name {
  font-weight: bold;
}
/deep/ .pd-tab__desc .pd-table tbody tr:last-child {
  border-bottom: 1px solid black;
}
/deep/ .input-counter {
  z-index: 0;
  .el-input-number {
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
}
/deep/ .pd-detail__form .btn {
  border-radius: unset;
}
/deep/ .pd-detail__del {
  color: black;
  margin-top: 4px;
}
/deep/ .pd-detail__policy-list > li i {
  font-size: 27px;
  margin-top: 5px;
}

.config-detail {
  display: block;
}
/deep/ .pd-detail__policy-list {
  padding-left: 0;
}
/deep/ .pd-detail__policy-list > li span {
  color: #333333;
}
/deep/ .pd-detail__del {
  font-size: 17px;
}
/deep/ .btn--e-brand-b-2 {
  width: 240px;
  height: 50px;
  margin-right: 10px;
  border: 1px solid #ff4500;
  font-weight: bold;
  &:hover {
    background-color: #ffffff;
    color: #ff4500;
    transition: 0.2s;
  }
}
/deep/ .input-counter {
  display: -webkit-box;
}
.infom {
  display: inline-block;
  width: 50px;
}
.amount {
  margin-top: 4px;
  width: max-content;
}
/deep/ .pd-detail {
  margin-top: 10px;
}
/deep/ .onbuy {
  transform: translate(248px, -50px);
}
/deep/ .block__title {
  font-size: 19px;
}
.addBack {
  background-color: #ffffff;
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.5);
}
.addWidth {
  max-width: 1260px;
}
.pro-left {
  border-right: 4px solid #eee;
}
/deep/ .section_countdown-status {
  border-bottom: 2px solid #eee;
}
/deep/ .pd-detail__form {
  border-bottom: 2px solid #eee;
}
/deep/ .pd-detail__name {
  padding-top: 10px;
}
/deep/ .section_countdown-wrap {
  text-align: center;
  margin-top: -42px;
  .fs {
    width: 20%;
  }
}
a[class^="share-network-"] {
  flex: none;
  color: #ffffff;
  width: 144px;
  background-color: #333;
  border-radius: 3px;
  overflow: hidden;
  display: inline-block;
  flex-direction: row;
  align-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px 10px 0;
  &:hover {
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(-5px) scale(1.11);
  }
}
a[class^="share-network-"] .fah {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  flex: 0 1 auto;
}
a[class^="share-network-"] span {
  padding: 0 10px;
  flex: 1 1 0%;
  font-weight: 500;
}
.detailtab {
  margin: 3% 10% 3% 10%;
  background-color: #ffffff;
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.5);
  overflow: hidden;
  padding-bottom: 1.625rem;
}
.sanphamkhac,
.quantam {
  margin: 3% 10% 3% 10%;
  background-color: #ffffff;
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.5);
  .section__intro {
    padding-top: 2%;
  }
}
/deep/ .product-o__wrap:before {
  background: rgba(0, 0, 0, 0.2);
}
/deep/ .t-next {
  right: 2%;
}
.networkshare {
  margin-left: 20px;
}
.refund-cancel {
  display: block;
  margin-left: 51px;
  color: #7f7f7f !important;
  font-size: 13px;
}
</style>
