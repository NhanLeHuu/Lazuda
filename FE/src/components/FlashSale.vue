<template>
  <fragment>
    <!--====== Women Tab ======-->
    <div class="u-s-p-b-60">
      <!--====== Section 8 ======-->
      <div class="section__intro u-s-m-b-46 flashsale">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__text-wrap">
                <h1 class="section__heading u-c-secondary u-s-m-b-12">
                  {{ $t("flashsale.fast") }}
                </h1>

                <span class="section__span u-c-silver u-s-m-b-16">{{
                  $t("flashsale.end")
                }}</span>
                <div class="section_countdown-wrap">
                  <div
                    class="countdown countdown--style-section"
                    :data-countdown="ngaygio"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--====== End - Section Intro ======-->
        <!--====== Section Content ======-->
      </div>
      <!--====== End - Section 8 ======-->
      <!--====== Section Intro ======-->
      <div class="section__intro u-s-m-b-46">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="block">
                <span class="block__title">{{ $t("flashsale.saleoff") }}</span>
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
                    v-for="(item, index) in product"
                    :key="index"
                    class="u-s-m-b-30"
                  >
                    <div class="product-o product-o--hover-on">
                      <div style="cursor: pointer" class="product-o__wrap">
                        <a
                          class="aspect aspect--bg-grey aspect--square u-d-block"
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
    <!--====== End - Women Tab ======-->
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import getApi from "@/api/getApi";
import Convert from "@/ultities/convert";

export default {
  components: { Fragment },
  data: () => ({
    product: [],
    ngaygio: "",
  }),
  created() {
    var y = 0;
    getApi("/getflashsale", {}, (result) => {
      var list = result.data;
      var listreceived = [];
      this.ngaygio = result.data[0].ngaygio;

      list.forEach((e) => {
        let body = {
          id: e.idsanpham,
          table: e.typemenu,
        };
        getApi("/getproductfs", body, (product) => {
          listreceived.push(product.data);
          if (y + 1 == list.length) {
            this.product = Convert.srcImage(listreceived);
            this.$emit("FSloaded", true);
          }
          y++;
        });
      });
    });
  },
  methods: {
    ondetail(item) {
      var detail = {
        id: item.id,
        name: item.typemenu,
      };
      localStorage.setItem("detail", JSON.stringify(detail));
      location.href = "/detail_" + Convert.removeVietnameseTones(item.name);
      localStorage.setItem("flashsale", JSON.stringify(this.ngaygio));
    },
  },
};
</script>

<style lang="scss" scoped>
.flashsale {
  margin-top: 15px;
  margin-bottom: -45px;
}
/deep/ .product-o__wrap:before {
  background: rgba(0, 0, 0, 0.2);
}
/deep/ .aspect.aspect--bg-grey {
  z-index: 1;
}
</style>
