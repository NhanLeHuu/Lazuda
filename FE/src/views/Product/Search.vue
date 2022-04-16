<template>
  <fragment>
    <Header @btnpress="onPress" />
    <!--====== App Content ======-->
    <div class="app-content">
      <!--====== Section 1 ======-->
      <div class="u-s-p-y-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-12">
              <div class="shop-w-master">
                <div class="shop-w-master__sidebar">
                  <div
                    v-for="(item, index) in sidebar"
                    :key="index"
                    class="u-s-m-b-30"
                  >
                    <div class="shop-w shop-w--style">
                      <div class="shop-w__intro-wrap">
                        <h1 class="shop-w__h">{{ item.label }}</h1>

                        <span
                          class="fas fa-minus shop-w__toggle"
                          @click.prevent="onCollapse"
                        ></span>
                      </div>
                      <div class="shop-w__wrap" id="s-shipping">
                        <ul class="shop-w__list gl-scroll">
                          <li v-for="(li, i) in item.content" :key="i">
                            <!--====== Check Box ======-->
                            <div class="radio-box newsletter__radio">
                              <input
                                type="radio"
                                :id="li.name"
                                @change.prevent="onFilter(item, li)"
                                :name="item.label"
                              />
                              <div
                                class="radio-box__state radio-box__state--primary"
                              >
                                <label
                                  class="radio-box__label"
                                  :for="li.name"
                                  >{{ li.name }}</label
                                >
                              </div>
                            </div>
                            <!--====== End - Check Box ======-->
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-12">
              <div class="shop-p">
                <div class="shop-p__toolbar u-s-m-b-30">
                  <div class="shop-p__meta-wrap u-s-m-b-60">
                    <span class="shop-p__meta-text-1"
                      >Tìm thấy {{ product.length }} kết quả</span
                    >
                    <div class="shop-p__meta-text-2">
                      <span>Keyword: </span>

                      <a class="gl-tag btn--e-brand-shadow" href="#">
                        {{ keyword }}</a
                      >
                    </div>
                  </div>
                  <div class="shop-p__tool-style">
                    <div class="tool-style__group u-s-m-b-8">
                      <span class="js-shop-grid-target is-active"
                        >Hiển thị theo hàng ngang</span
                      >

                      <span class="js-shop-list-target"
                        >Hiển thị theo danh sách</span
                      >
                    </div>
                    <form>
                      <div class="tool-style__form-wrap">
                        <div class="u-s-m-b-8">
                          <select
                            class="select-box select-box--transparent-b-2"
                          >
                            <option>Show: 8</option>
                            <option selected>Show: 12</option>
                            <option>Show: 16</option>
                            <option>Show: 28</option>
                          </select>
                        </div>
                        <div class="u-s-m-b-8">
                          <select
                            class="select-box select-box--transparent-b-2"
                          >
                            <option selected>Sắp xếp</option>
                            <option>Theo giá cao nhất</option>
                            <option>Theo giá thấp nhất</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="shop-p__collection">
                  <div class="row is-grid-active">
                    <div
                      v-for="(item, index) in product"
                      :key="index"
                      class="col-lg-3 col-md-6 col-sm-6"
                    >
                      <div class="product-m">
                        <div class="product-m__thumb">
                          <a
                            class="aspect aspect--bg-grey aspect--square u-d-block"
                            @click.prevent="ondetail(item)"
                          >
                            <img
                              class="aspect__img"
                              :src="item.galley[0]"
                              alt=""
                          /></a>
                          <div class="product-m__quick-look">
                            <a
                              class="fas fa-search"
                              data-modal="modal"
                              data-modal-id="#quick-look"
                              data-tooltip="tooltip"
                              data-placement="top"
                              title="Quick Look"
                            ></a>
                          </div>
                        </div>
                        <div class="product-m__content">
                          <div class="product-m__category">
                            <a href="shop-side-version-2.html">Men Clothing</a>
                          </div>
                          <div class="product-m__name">
                            <a @click.prevent="ondetail(item)">{{
                              item.name
                            }}</a>
                          </div>
                          <div class="product-m__price">{{ item.price }} đ</div>
                          <div class="product-m__hover">
                            <div class="product-m__preview-description">
                              <span>{{ item.summary }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="u-s-p-y-60">
                  <!--====== Pagination ======-->
                  <ul class="shop-p__pagination">
                    <li class="is-active">
                      <a href="shop-side-version-2.html">1</a>
                    </li>
                    <li>
                      <a href="shop-side-version-2.html">2</a>
                    </li>
                    <li>
                      <a href="shop-side-version-2.html">3</a>
                    </li>
                    <li>
                      <a href="shop-side-version-2.html">4</a>
                    </li>
                    <li>
                      <a
                        class="fas fa-angle-right"
                        href="shop-side-version-2.html"
                      ></a>
                    </li>
                  </ul>
                  <!--====== End - Pagination ======-->
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { smartphone } from "@/ultities/search";
import * as $ from "jquery";
import Convert from "@/ultities/convert";

export default {
  name: "Search",
  mixins: [componentmixin],
  watch: {
    product: {
      deep: true,
      handler(val) {
        if (val.length > 0) {
          this.getLoad();
        }
      },
    },
  },
  data: () => ({
    keyword: "",
    product: [],
    copyProduct: [],
    table: "",
    preproduct: [],
    sidebar: [],
  }),
  mounted() {
    var industry = JSON.parse(localStorage.getItem("industry"));
    if (industry) {
      this.getIndustry(industry);
    } else {
      this.getKeyWord();
    }
    this.rmZoom();
  },
  methods: {
    rmZoom() {
      $(".zoomContainer").remove();
    },
    onFilter(item, li) {
      this.filterProduct(item, li);
    },
    filterProduct(item, li) {
      switch (this.table) {
        case "smartphone":
          this.smartphone(item, li);
          break;
      }
    },
    smartphone(item, li) {
      // filter
      // this.product =
      //   this.preproduct.length == 0 ? this.copyProduct : this.preproduct;
      this.product = this.copyProduct;

      switch (item.label) {
        case "KHOẢNG GIÁ":
          this.smartphoneprice(li);
          break;
        case "BẢO HÀNH":
          this.smartphonebaohanh(li);
          break;
        case "XUẤT XỨ":
          this.smartphonexuatxu(li);
          break;
        case "RAM":
          this.smartphoneram(li);
          break;
        case "SỐ SIM":
          this.smartphonesim(li);
          break;
      }
      // end
    },
    smartphonesim(li) {
      var pro = [];

      this.product.filter((product) => {
        var sosim = product.sosim.replace(".", "").toLocaleLowerCase();
        var sosimli = li.name.toLocaleLowerCase();

        if (sosim == sosimli) {
          pro.push(product);
          return true;
        }
      });

      this.preproduct = pro;
      this.product = pro;
    },
    smartphoneram(li) {
      var pro = [];

      this.product.filter((product) => {
        if (li.filter == "<") {
          let ram = Convert.NumberFromString(product.ram);
          let khoanggia = Convert.NumberFromString(li.data);
          if (ram < khoanggia) {
            pro.push(product);
            return true;
          }
        }

        if (li.filter == "~") {
          let ram = Convert.NumberFromString(product.ram);
          let khoanggia = li.data.split(",");
          khoanggia[0] = Convert.NumberFromString(khoanggia[0]);
          khoanggia[1] = Convert.NumberFromString(khoanggia[1]);

          if (khoanggia[0] <= ram && ram <= khoanggia[1]) {
            pro.push(product);
            return true;
          }
        }

        if (li.filter == ">") {
          let ram = Convert.NumberFromString(product.ram);
          let khoanggia = Convert.NumberFromString(li.data);
          if (ram > khoanggia) {
            pro.push(product);
            return true;
          }
        }
      });

      this.preproduct = pro;
      this.product = pro;
    },
    smartphonexuatxu(li) {
      var pro = [];

      this.product.filter((product) => {
        var xuatxu = product.xuatxu.replace(".", "").toLocaleLowerCase();
        var xuatxuli = li.name.toLocaleLowerCase();

        if (xuatxu == xuatxuli) {
          pro.push(product);
          return true;
        }
      });

      this.preproduct = pro;
      this.product = pro;
    },
    smartphonebaohanh(li) {
      var pro = [];

      this.product.filter((product) => {
        var getbh = product.baohanh.replace(".", "").toLocaleLowerCase();
        var baohanh = Convert.NumberFromString(getbh);
        var baohanhli = parseInt(li.data);

        if (baohanh == baohanhli) {
          pro.push(product);
          return true;
        }
      });

      this.preproduct = pro;
      this.product = pro;
    },
    smartphoneprice(li) {
      var pro = [];

      this.product.filter((product) => {
        if (li.filter == "<") {
          let price = Convert.numberRemoveDot(product.price);
          let khoanggia = parseInt(li.data);
          if (price < khoanggia) {
            pro.push(product);
            return true;
          }
        }

        if (li.filter == "~") {
          let price = Convert.numberRemoveDot(product.price);
          let khoanggia = li.data.split(",");
          khoanggia[0] = parseInt(khoanggia[0]);
          khoanggia[1] = parseInt(khoanggia[1]);

          if (khoanggia[0] <= price && price <= khoanggia[1]) {
            pro.push(product);
            return true;
          }
        }

        if (li.filter == ">") {
          let price = Convert.numberRemoveDot(product.price);
          let khoanggia = parseInt(li.data);
          if (price > khoanggia) {
            pro.push(product);
            return true;
          }
        }
      });

      this.preproduct = pro;
      this.product = pro;
    },
    onCollapse(event) {
      var element = event.currentTarget;
      var content = $(element).parent().next();

      if ($(content).hasClass("collapse")) {
        $(content).removeClass("collapse");
      } else {
        $(content).addClass("collapse");
      }
      if ($(element).hasClass("fa-plus")) {
        $(element).removeClass("fa-plus");
        $(element).addClass("fa-minus");
      } else if ($(element).hasClass("fa-minus")) {
        $(element).removeClass("fa-minus");
        $(element).addClass("fa-plus");
      }
    },
    onPress() {
      this.getKeyWord();
    },
    getIndustry(industry) {
      var body = {
        table: industry,
      };
      getApi("/getpindustry", body, (result) => {
        console.log(result);
        if (result.status === 200) {
          this.product = Convert.srcImage(result.data);
          this.copyProduct = Convert.srcImage(result.data);
          this.table = result.data[0].typemenu;
          this.setSideBar();
          localStorage.removeItem("industry");
        }
      });
    },
    ondetail(item) {
      var detail = {
        id: item.id,
        name: item.typemenu,
      };
      localStorage.setItem("detail", JSON.stringify(detail));
      location.href = "/detail_" + Convert.removeVietnameseTones(item.name);
    },
    getKeyWord() {
      this.keyword = JSON.parse(localStorage.getItem("search"));
      var body = {
        keyword: this.keyword,
      };
      getApi("/search", body, (result) => {
        this.product = Convert.srcImage(result.data.result);
        this.copyProduct = Convert.srcImage(result.data.result);
        this.table = result.data.table;
        // console.log(this.product);
        this.setSideBar();
      });
    },
    setSideBar() {
      switch (this.table) {
        case "smartphone":
          this.sidebar = smartphone;
          break;
        case " ":
      }
    },
    getLoad() {
      // remove module
      // delete require.cache[require.resolve('./b.js')]
      require("@/assets/js/vendor");
      require("@/assets/js/jquery.shopnav");
      require("@/assets/js/app");
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .btn--e-brand-shadow {
  border-radius: unset;
}
/deep/ .product-m__price {
  color: #ff4500;
}
/deep/ .newsletter__radio .radio-box__label {
  color: #7f7f7f;
}
.collapse {
  display: none !important;
}
/deep/ .shop-w__list {
  max-height: 180px;
}
/deep/ .tool-style__form-wrap select {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
</style>