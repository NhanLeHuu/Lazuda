<template>
  <fragment>
    <Header @btnpress="onPress" />
    <!--====== Section 3 ======-->
    <div
      v-loading="loading"
      element-loading-text="Lazuda đang lấy dữ liệu..."
      element-loading-background="rgba(0, 0, 0, 0.8)"
      class="container"
    >
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
                        <i
                          data-v-62c1a24e=""
                          class="fas fa-film"
                          aria-hidden="true"
                        ></i
                        >Tìm Phim
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
                    v-for="(item, index) in filmsearch"
                    :key="index"
                    class="col-lg-12 col-md-4 col-sm-6 u-s-m-b-30"
                  >
                    <div class="product-r u-h-100">
                      <div class="row">
                        <div class="col-lg-8 product-r__container">
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
                        <div class="col-lg-4 product-r__info-wrap">
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

                          <span class="product-r__price">{{
                            item.chuong
                          }}</span>

                          <span class="product-r__description">{{
                            item.noidung
                          }}</span>
                        </div>
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
    <!--====== End - Section 3 ======-->
    <Footer />
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import getApi from "@/api/getApi";
// import Convert from "@/ultities/convert";

export default {
  name: "summarycomic",
  mixins: [componentmixin],
  props: {},
  watch: {},
  data: () => ({
    loading: true,
    filmsearch: [],
  }),
  mounted() {
    this.getKeyWord();
  },
  methods: {
    ondetail(detail) {
      if (detail.href.includes("/phim/")) {
        localStorage.setItem("film", JSON.stringify(detail));
        this.$router.push("/summaryphim");
      } else if (detail.href.includes("/p/")) {
        detail.data = {
          hrefreading: detail.href,
        };
        localStorage.setItem("readingfilm", JSON.stringify(detail));
        this.$router.push("/readingphim");
      }
    },
    onPress() {
      this.getKeyWord();
    },
    getKeyWord() {
      this.loading = true;
      var searchphim = JSON.parse(localStorage.getItem("searchphim"));
      var body = {
        urlsearch: "https://www.fullphim.net/search?query=" + searchphim,
      };
      console.log(body.urlsearch);
      getApi("/getsearchfilm", body, (result) => {
        console.log(result.data);
        if (result.status == 200) {
          this.filmsearch = result.data;
          this.$forceUpdate();
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap");
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
    display: block;
    overflow: hidden;
  }
}
/deep/ .aspect__img {
  width: 96%;
  height: unset;
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
  transition: 0.4s all ease;
  height: 380px;
  background-color: #081b27;
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
/deep/ .aspect--bg-grey {
  background-color: #081b27;
}
/deep/ .product-r__name {
  & > a {
    font-weight: bold;
    font-size: 25px;
    font-family: Nunito, sans-serif;
    color: #fff;
  }
  & > a:hover {
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
  color: #fff;
  font-weight: 500;
  font-size: 16px;
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
  padding: 3px 6px;
  position: absolute;
  transition: 0.4s all ease;
  top: 1%;
  left: 2%;
  font-size: 13px;
  color: #fff;
  text-align: center;
  line-height: 1.6;
}
</style>
