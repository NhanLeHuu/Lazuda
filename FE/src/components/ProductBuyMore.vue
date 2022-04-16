<template>
  <fragment>
    <!--====== Section 6 ======-->

    <div class="u-s-p-b-60">
      <!--====== Section Intro ======-->
      <div class="section__intro u-s-m-b-46">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__text-wrap">
                <h1 class="section__heading u-c-secondary u-s-m-b-12">
                  {{ $t('productbuymore.name') }}
                </h1>
              </div>
              <el-divider></el-divider>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Intro ======-->

      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="row">
            <div
              v-for="(item, index) in product"
              :key="index"
              class="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30"
            >
              <div class="product-r u-h-100">
                <div class="product-r__container">
                  <a
                    class="aspect aspect--bg-grey aspect--square u-d-block"
                    @click.prevent="ondetail(item)"
                  >
                    <img class="aspect__img" :src="item.galley[0]" alt=""
                  /></a>
                </div>
                <div class="product-r__info-wrap">
                  <!-- <span class="product-r__category">
                    <a href="shop-side-version-2.html">Women Clothing</a></span
                  > -->
                  <div class="product-r__n-p-wrap">
                    <span class="product-r__name">
                      <a
                        data-tooltip="tooltip"
                        data-placement="right"
                        :title="item.name"
                        @click.prevent="ondetail(item)"
                        >{{ item.name }}</a
                      ></span
                    >
                  </div>

                  <span class="product-r__price">{{ item.price }} đ</span>

                  <span class="product-r__description">{{ item.summary }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Content ======-->
    </div>
    <!--====== End - Section 6 ======-->
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
  }),
  created() {
    getApi("/getproductbuymore", {}, (result) => {
      if (result.status == 200) {
        var list = result.data;

        list.forEach((e) => {
          var body = {
            id: e.idsanpham,
            table: e.typemenu
          };
          getApi("/getproductpbm", body, (result) => {
            if (result.status == 200) {
              var p = Convert.srcImage(result.data);
              this.product.push(p);
              this.$emit("PBMloaded", true);
            }
          });
        });
      }
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
    },
  }
};
</script>

<style lang="scss" scoped>
/deep/ .section__text-wrap {
  text-align: left;
  margin-bottom: -24px;
}
/deep/ .product-r__price {
  margin-bottom: 5px;
}
/deep/ .product-r__name {
  overflow: hidden;
  & > a {
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
  }
}
/deep/ .section__heading {
  font-size: 19px;
}
</style>
