<template>
  <fragment>
    <template v-loading="loading">
      <Header />
      <MenuFilm />
      <FilmBo :phimbo="allproduct.phimbo" />
      <FilmLe :phimle="allproduct.phimle" />
      <FilmRap :phimrap="allproduct.phimrap" />
      <FilmCartoon :phimhoathinh="allproduct.phimhoathinh" />
      <Footer />
    </template>
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import getApi from "@/api/getApi";
import * as $ from "jquery";

export default {
  name: "comic",
  mixins: [componentmixin],
  data: () => ({
    allproduct: "",
    loading: true,
  }),
  mounted() {
    getApi("/getallfilm", {}, (result) => {
      if (result.status == 200) {
        this.allproduct = result.pagehome;
        this.loading = false;
      }
    });
  },
  methods: {
    
  },
};
</script>

<style>
</style>