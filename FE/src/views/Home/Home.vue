<template>
  <fragment>
    <Header />
    <Menu />
    <!-- <Feature /> -->
    <FlashSale @FSloaded="getFSLoad" />
    <ProductBuyMore
      :getProductBuyMore="productbuymore"
      @PBMloaded="getPBMloaded"
    />
    <Industry @IDTLoaded="getIDTLoad" />
    <ProductNow
      @PNloaded="getPNLoad"
      :getProduct="productNow"
      @detailModal="getDetailModal"
    />
    <Footer />
    <!--====== Modal Section ======-->
    <Modal :detail="detailModal" />
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import getApi from "@/api/getApi";
import Modal from "@/components/Modal";

export default {
  name: "Home",
  components: {
    Modal,
  },
  mixins: [componentmixin],
  watch: {
    allLoad: {
      deep: true,
      handler(val) {
        if (val.productNow && val.falseSale && val.industry) {
          this.loadJS();
        }
      },
    }
  },
  data: () => ({
    productNow: {
      smartphone: [],
      tivi: [],
      tulanh: [],
      dongho: [],
    },
    limiter: {
      smartphone: 5,
      tivi: 5,
      tulanh: 5,
      dongho: 5,
    },
    detailModal: {},
    flashsale: [],
    industry: {},
    productbuymore: [],
    allLoad: {
      productNow: false,
      falseSale: false,
      buymore: false,
      industry: false,
    },
  }),
  created() {
    var product = ["smartphone", "tivi", "tulanh", "dongho"];

    product.forEach((e) => {
      var body = {
        table: e,
        limit: this.limiter[e]
      };
      getApi("/producttoday", body, (result) => {
        if (result.status == 200) {
          this.productNow[e] = result.data;
        }
      });
    });
  },
  methods: {
    getPBMloaded(load) {
      this.allLoad.buymore = load
    },
    getFSLoad(load) {
      this.allLoad.falseSale = load;
    },
    getPNLoad(load) {
      this.allLoad.productNow = load;
    },
    getIDTLoad(load) {
      this.allLoad.industry = load;
    },
    getDetailModal(product) {
      this.detailModal = product;
    },
    loadJS() {
      // remove module
      // delete require.cache[require.resolve('./b.js')]
      require("@/assets/js/vendor");
      require("@/assets/js/jquery.shopnav");
      require("@/assets/js/app");
      setTimeout(() => {
        this.$load = true;
      }, 100);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
