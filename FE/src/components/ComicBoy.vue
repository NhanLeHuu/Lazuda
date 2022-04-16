<template>
  <fragment>
    <div class="container">
      <div class="row msg">
        <!--====== Section 3 ======-->
        <div class="u-s-p-b-60">
          <!--====== Section Intro ======-->
          <div class="section__intro u-s-m-b-46">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="block">
                    <span class="block__title"><i class="fas fa-male"></i> Truyện cập nhật</span>
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
                  v-for="(item, index) in comicboy"
                  :key="index"
                  class="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30 addhover"
                >
                  <div class="product-r u-h-100">
                    <div class="product-r__container">
                      <a
                        class="aspect aspect--bg-grey aspect--square u-d-block"
                        @click.prevent="onsummary(item)"
                      >
                        <img class="aspect__img" :src="item.img" alt=""
                      /></a>
                    </div>
                    <div class="product-r__info-wrap">
                      <span class="product-r__category">
                        <p>Thể loại</p>
                        <a
                          v-for="(theloai, i) in item.theloai"
                          :key="i + 10"
                          ref="shop-side-version-2.html"
                          >{{ theloai }}
                        </a>
                      </span>
                      <div class="product-r__n-p-wrap">
                        <span class="product-r__name">
                          <a
                            data-tooltip="tooltip"
                            data-placement="right"
                            :title="item.name"
                            @click.prevent="onsummary(item)"
                            >{{ item.title }}</a
                          ></span
                        >
                      </div>

                      <span class="product-r__price">{{ item.chuong }}</span>

                      <span class="product-r__description">{{
                        item.noidung
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
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
// import getApi from "@/api/getApi";
// import Convert from "@/ultities/convert";

export default {
  name: "ComicBoy",
  components: { Fragment },
  props: {
    boy: {},
  },
  watch: {
    boy: {
      deep: true,
      handler(val) {
        if (val.length > 0) {
          this.comicboy = val;
        }
      },
    },
  },
  data: () => ({
    comicboy: [],
  }),
  methods: {
    onsummary(detail) {
      localStorage.setItem("comic", JSON.stringify(detail));
      this.$router.push("/summarycomic");
    },
  }
};
</script>

<style lang="scss" scoped>
/deep/ .section__intro {
  width: 100%;
}
/deep/ .block__title {
  color: #56ccf2;
  font-size: 24px;
  i {
    color: #56ccf2;
    margin-right: 3px;
  }
}
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
.addhover:hover {
  transition: 0.3s all ease;
  transform: translateY(-5px);
}
/deep/ .product-r {
  border-radius: unset;
  overflow: visible;
  &:before {
    content: "";
    width: 17px;
    height: 100%;
    position: absolute;
    top: -1%;
    left: 19%;
    transform: skewY(-45deg) translate(-57px, -43px);
    background-image: url("../assets/logo/spinebook.png");
    background-size: contain;
  }
  &:hover {
    transform: unset;
  }
  &:after {
    content: "";
    width: 90%;
    height: 16px;
    position: absolute;
    bottom: 11px;
    left: 47px;
    transform: skewX(-45deg) translate(-11px, 30px);
    background: #fff;
    background-image: linear-gradient(
      to bottom,
      transparent 6px,
      #e4e0ce 8px,
      transparent 8px,
      transparent 12px,
      #e4e0ce 12px,
      transparent 14px,
      transparent 18px,
      #e4e0ce 18px,
      transparent 20px,
      transparent 24px,
      #e4e0ce 24px,
      transparent 26px,
      transparent 30px,
      #e4e0ce 30px,
      transparent 32px,
      transparent 36px,
      #e4e0ce 36px,
      transparent 38px,
      transparent 42px,
      #e4e0ce 42px,
      transparent 44px,
      transparent 48px,
      #e4e0ce 48px,
      transparent 50px
    );
  }
}
/deep/ .msg {
  background: unset;
  margin: 5% 0;
  box-shadow: 2px 2px 8px 3px rgba(36, 37, 38, 0.08);
  overflow: hidden;
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
}
/deep/ .block__title {
  font-size: 23px;
}
</style>
