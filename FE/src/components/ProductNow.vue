<template>
  <fragment>
    <!--====== Section 2 ======-->
    <div class="u-s-p-b-60">
      <!--====== Section Intro ======-->
      <div class="section__intro u-s-m-b-16 productnow">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__text-wrap">
                <h1 class="section__heading u-c-secondary u-s-m-b-12">
                  {{ $t("productnow.name") }}
                </h1>

                <span class="section__span u-c-silver">{{
                  $t("productnow.select")
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Intro ======-->

      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="filter-category-container">
                <div class="filter__category-wrapper">
                  <button
                    class="btn filter__btn filter__btn--style-1 js-checked"
                    type="button"
                    data-filter="*"
                  >
                    {{ $t('productnow.popular') }}
                  </button>
                </div>
                <div class="filter__category-wrapper">
                  <button
                    class="btn filter__btn filter__btn--style-1"
                    type="button"
                    data-filter=".tulanh"
                  >
                    {{ $t('productnow.tulanh') }}
                  </button>
                </div>
                <div class="filter__category-wrapper">
                  <button
                    class="btn filter__btn filter__btn--style-1"
                    type="button"
                    data-filter=".smartphone"
                  >
                    {{ $t('productnow.dienthoai') }}
                  </button>
                </div>
                <div class="filter__category-wrapper">
                  <button
                    class="btn filter__btn filter__btn--style-1"
                    type="button"
                    data-filter=".tivi"
                  >
                    {{ $t('productnow.tivi') }}
                  </button>
                </div>
                <div class="filter__category-wrapper">
                  <button
                    class="btn filter__btn filter__btn--style-1"
                    type="button"
                    data-filter=".dongho"
                  >
                    {{ $t('productnow.dongho') }}
                  </button>
                </div>
              </div>
              <div class="filter__grid-wrapper u-s-m-t-30">
                <div class="row">
                  <!-- Tu lanh -->
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item tulanh"
                    v-for="(item, key) in getProduct.tulanh"
                    :key="key + 100"
                  >
                    <div
                      class="product-o product-o--hover-on product-o--radius"
                    >
                      <div class="product-o__wrap">
                        <a
                          class="aspect aspect--bg-grey aspect--square u-d-block"
                          href="product-detail.html"
                        >
                          <img class="aspect__img" :src="item.galley[0]"
                        /></a>
                      </div>

                      <span class="product-o__category">
                        <a href="shop-side-version-2.html">Electronics</a></span
                      >

                      <span class="product-o__name">
                        <a
                          data-tooltip="tooltip"
                          data-placement="right"
                          :title="item.name"
                          @click.prevent="ondetail(item)"
                          >{{ item.name }}</a
                        ></span
                      >
                      <div class="product-o__rating gl-rating-style">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fas fa-star-half-alt"></i>

                        <span class="product-o__review">(23)</span>
                      </div>

                      <span class="product-o__price">{{ item.price }} đ</span>
                    </div>
                  </div>
                  <!-- Tivi -->
                  <div
                    v-for="(item, key) in getProduct.tivi"
                    :key="key + 10"
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item tivi"
                  >
                    <div
                      class="product-o product-o--hover-on product-o--radius"
                    >
                      <div class="product-o__wrap">
                        <a
                          class="aspect aspect--bg-grey aspect--square u-d-block"
                          href="product-detail.html"
                        >
                          <img class="aspect__img" :src="item.galley[0]"
                        /></a>
                      </div>

                      <span class="product-o__category">
                        <a href="shop-side-version-2.html">Electronics</a></span
                      >

                      <span class="product-o__name">
                        <a
                          data-tooltip="tooltip"
                          data-placement="right"
                          :title="item.name"
                          @click.prevent="ondetail(item)"
                          >{{ item.name }}</a
                        ></span
                      >
                      <div class="product-o__rating gl-rating-style">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fas fa-star-half-alt"></i>

                        <span class="product-o__review">(23)</span>
                      </div>

                      <span class="product-o__price">{{ item.price }} đ</span>
                    </div>
                  </div>
                  <!-- Dong ho -->
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item dongho"
                    v-for="(item, key) in getProduct.dongho"
                    :key="key + 1000"
                  >
                    <div
                      class="product-o product-o--hover-on product-o--radius"
                    >
                      <div class="product-o__wrap">
                        <a
                          class="aspect aspect--bg-grey aspect--square u-d-block"
                          href="product-detail.html"
                        >
                          <img class="aspect__img" :src="item.galley[0]"
                        /></a>
                      </div>

                      <span class="product-o__category">
                        <a href="shop-side-version-2.html">Electronics</a></span
                      >

                      <span class="product-o__name">
                        <a
                          data-tooltip="tooltip"
                          data-placement="right"
                          :title="item.name"
                          @click.prevent="ondetail(item)"
                          >{{ item.name }}</a
                        ></span
                      >
                      <div class="product-o__rating gl-rating-style">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fas fa-star-half-alt"></i>

                        <span class="product-o__review">(23)</span>
                      </div>

                      <span class="product-o__price">{{ item.price }} đ</span>
                    </div>
                  </div>
                  <!-- Smartphone -->
                  <div
                    v-for="(item, key) in getProduct.smartphone"
                    :key="key"
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item smartphone"
                  >
                    <div
                      class="product-o product-o--hover-on product-o--radius"
                    >
                      <div class="product-o__wrap">
                        <a
                          class="aspect aspect--bg-grey aspect--square u-d-block"
                          href="product-detail.html"
                        >
                          <img class="aspect__img" :src="item.galley[0]" alt=""
                        /></a>
                      </div>

                      <span class="product-o__category">
                        <a href="shop-side-version-2.html">Electronics</a></span
                      >

                      <span class="product-o__name">
                        <a
                          data-tooltip="tooltip"
                          data-placement="right"
                          :title="item.name"
                          @click.prevent="ondetail(item)"
                          >{{ item.name }}</a
                        ></span
                      >
                      <div class="product-o__rating gl-rating-style">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fas fa-star"></i><i class="fas fa-star"></i
                        ><i class="fas fa-star-half-alt"></i>

                        <span class="product-o__review">(23)</span>
                      </div>

                      <span class="product-o__price">{{ item.price }} VNĐ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="load-more">
                <!-- <button class="btn btn--e-brand" type="button">
                  Load More
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Content ======-->
    </div>
    <!--====== End - Section 2 ======-->
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Convert from "@/ultities/convert";
import * as $ from "jquery";

export default {
  props: {
    getProduct: {
      default: {},
    },
  },
  data: () => ({
    product: {},
  }),
  watch: {
    getProduct: {
      deep: true,
      handler(product) {
        let smartphone = product.smartphone;
        let tivi = product.tivi;
        let tulanh = product.tulanh;
        let dongho = product.dongho;

        product.smartphone = Convert.srcImage(smartphone);
        product.tivi = Convert.srcImage(tivi);
        product.tulanh = Convert.srcImage(tulanh);
        product.dongho = Convert.srcImage(dongho);

        this.product = product;
        this.$emit("PNloaded", true);
        return product;
      },
    },
  },
  components: { Fragment },
  mounted() {
    var getDetail = setInterval(() => {
      var get = $(".ondetail");
      if (get.length > 0) {
        $(".ondetail").click((e) => {
          var tag = e.currentTarget;
          var name = $(tag).attr("name");
          var id = $(tag).attr("id");
          var detail = {};
          this.product[name].forEach((element) => {
            if (element.id === parseInt(id)) {
              detail = element;
            }
          });
          this.$emit("detailModal", detail);
        });
        clearInterval(getDetail);
      }
    }, 100);
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
  },
};
</script>

<style lang="scss" scoped>
.section__text-wrap {
  border-top: 1px solid #e7e7e7;
}
.section__intro {
  margin-top: 30px;
}
/deep/ .product-o__price {
  color: #ff4500;
}
.section__text-wrap {
  padding-top: 100px;
}
/deep/ .product-o__wrap:before {
  background: rgba(0, 0, 0, 0);
}
/deep/ .product-o--radius {
  border-radius: unset;
}
/deep/ .product-o--hover-on {
  &:hover {
    .product-o__wrap .aspect .aspect__img {
      transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateY(-15px) scale(1.2);
    }
  }
}
</style>
