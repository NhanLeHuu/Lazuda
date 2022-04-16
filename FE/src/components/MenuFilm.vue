<template>
  <fragment>
    <el-row :gutter="20">
      <!-- Start Banner -->
      <el-col class="nopadding" :span="24">
        <el-carousel class="banner" height="500px">
          <el-carousel-item v-for="(item, index) in 4" :key="index">
            <img :src="require(`../assets/banners/film${item}.jpg`)" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <!-- End Banner -->
    </el-row>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  components: { Fragment },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-col-21 {
  width: 84.5%;
}
.menu {
  padding: 0 !important;
  z-index: 1;
}
.banner {
  z-index: 1;
}
.el-scrollbar {
  background-color: #ffffff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu--collapse {
  width: auto;
}
.nopadding {
  padding: unset !important;
}
/deep/ .el-col-24 {
  padding-right: 34px!important;
  padding-left: 10px!important;
}
</style>
