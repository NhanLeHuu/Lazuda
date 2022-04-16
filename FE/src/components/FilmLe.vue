<template>
  <fragment>
    <div class="container">
      <div class="row">
        <div class="msg">
          <!--====== Section 3 ======-->
          <div class="u-s-p-b-60">
            <!--====== Section Intro ======-->
            <div class="section__intro u-s-m-b-46">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="block">
                      <span class="block__title">
                        <i data-v-62c1a24e="" class="fas fa-film" aria-hidden="true"></i>Phim Lẻ
                      </span>
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
                  <div
                    v-for="(item, index) in film"
                    :key="index"
                    class="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30"
                  >
                    <div class="product-r u-h-100">
                      <!-- <label class="status">{{ item.status }}</label> -->
                      <div class="product-r__container">
                        <a
                          class="
                            aspect aspect--bg-grey aspect--square
                            u-d-block
                          "
                          @click.prevent="ondetail(item)"
                        >
                          <img class="aspect__img" :src="item.img" alt=""
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
                              >{{ item.title }}</a
                            ></span
                          >
                        </div>

                        <!-- <span class="product-r__price">{{ item.chuong }}</span> -->

                        <span class="product-r__description">{{
                          item.type
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--====== End - Section Content ======-->
          </div>
          <!--====== End - Section 3 ======-->
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
// import getApi from "@/api/getApi";
// import Convert from "@/ultities/convert";

export default {
  name: "FilmLe",
  components: { Fragment },
  props: {
    phimle: {},
  },
  watch: {
    phimle: {
      deep: true,
      handler(val) {
        if (val.length > 0) {
          this.film = val;
        }
      },
    },
  },
  data: () => ({
    film: [],
  }),
  methods: {
    ondetail (detail) {
      localStorage.setItem("film", JSON.stringify(detail));
      this.$router.push("/summaryphim")
    }
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
  margin: 0 auto;
  & > a {
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
  }
}
/deep/ .product-r__container {
  height: 307px;
  .aspect--square {
    height: 307px;
  }
}
/deep/ .section__heading {
  font-size: 19px;
}
/deep/ .product-r {
  border-radius: unset;
  width: 205px;
  transition: 0.4s all ease;
  &:hover {
    box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.5);
  }
}
/deep/ .msg {
  overflow: hidden;
  margin: 3% 0;
  background-color: unset;
  box-shadow: unset;
}
/deep/ .product-r__category {
  p {
    display: inline-block;
    margin-right: 2px;
    color: crimson;
  }
  a {
    padding: 4px;
    display: inline-block;
    color: white;
    font-size: 10px;
    background: #ff4500;
    border-radius: 2px;
    margin: 0 4px;
  }
}
/deep/ .product-r__name {
  & > a {
    font-size: 16px;
    font-weight: bold;
  }
  & > a:hover {
    color: black;
  }
}
/deep/ .product-r__price {
  color: #333333;
  font-size: 14px;
}
/deep/ .product-r__n-p-wrap {
  margin-top: 9px;
}
/deep/ .product-r__description {
  font-family: Quicksand, sans-serif;
  color: #000;
  font-weight: 500;
  text-align: center;
}
/deep/ .block__title {
  color: #fff;
  font-size: 24px;
  i {
    margin-right: 3px;
  }
}
.status {
  background-color: #a94442;
  z-index: 1;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, #f0c 0%, #339 51%, #f0c 100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  transition: 0.7s;
  padding: 3px 6px;
  position: absolute;
  top: 1%;
  left: 2%;
  font-size: 13px;
  color: #fff;
  text-align: center;
  line-height: 1.6;
}
</style>
