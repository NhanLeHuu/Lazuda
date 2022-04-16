<template>
  <fragment>
    <template v-loading="loading">
      <Header />
      <ComicDeCu :decu="allproduct.decu" />
      <ComicGirl :girl="allproduct.girl" />
      <ComicBoy :boy="allproduct.boy" />
      <Footer />
    </template>
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import getApi from "@/api/getApi";

export default {
  name: "comic",
  mixins: [componentmixin],
  data: () => ({
    allproduct: "",
    loading: true,
  }),
  mounted() {
    getApi("/getallcomic", {}, (result) => {
      if (result.status == 200) {
        this.allproduct = result.pagehome;
        this.loading = false;
        console.log(this.allproduct)
      }
    });
  },
};
</script>

<style>
</style>