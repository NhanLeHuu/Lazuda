<template>
  <fragment>
    <Header />
    <!--====== Section 3 ======-->
    <div
      v-loading="loading"
      element-loading-text="Lazuda đang lấy dữ liệu..."
      element-loading-background="rgba(0, 0, 0, 0.8)"
      class="container"
    >
      <div class="row readingfilm">
        <div id="movies"></div>
        <div class="diver"></div>
        <div class="thongtin">
          <div class="name">
            <h1>{{ readingfilm.title }}</h1>
            <p>{{ readingfilm.type }}</p>
          </div>
        </div>
        <div v-if="readingfilm.api.episode.length > 0" class="episode">
          <p>DANH SÁCH TẬP</p>
          <div>
            <button
              @click.prevent="onTap(item)"
              v-for="(item, index) in readingfilm.api.episode"
              :key="index"
            >
              Tập {{ item.tap }}
            </button>
          </div>
        </div>
      </div>
      <div class="row phimlienquan">
        <!--====== Section Intro ======-->
        <div class="section__intro u-s-m-b-46">
          <div class="row">
            <div class="col-lg-12">
              <div class="block">
                <span class="block__title"
                  ><i class="fas fa-film"></i> Phim liên quan</span
                >
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
                v-for="(item, index) in readingfilm.api.filmlienquan"
                :key="index"
                class="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30"
              >
                <div class="product-r u-h-100">
                  <!-- <label class="status">{{ item.status }}</label> -->
                  <div class="product-r__container">
                    <a
                      class="aspect aspect--bg-grey aspect--square u-d-block"
                      @click.prevent="ondetail(item)"
                    >
                      <img class="aspect__img" :src="item.img" alt=""
                    /></a>
                  </div>
                  <div class="product-r__info-wrap">
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

                    <span class="product-r__description">{{ item.type }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--====== End - Section Content ======-->
      </div>
    </div>

    <Footer />
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import * as $ from "jquery";
import getApi from "@/api/getApi";
// import Convert from "@/ultities/convert";

export default {
  name: "readingfilm",
  mixins: [componentmixin],
  components: {},
  data: () => ({
    loading: true,
    readingfilm: {
      api: {
        filmlienquan: [],
        episode: [],
      },
    },
  }),
  mounted() {
    this.readingfilm = JSON.parse(localStorage.getItem("readingfilm"));
    this.readingfilm.api = {};
    this.readingfilm.api.filmlienquan = [];
    this.readingfilm.api.episode = [];
    var body = {
      href: this.readingfilm.data.hrefreading,
    };
    // this.openURL(body.href);

    getApi("/getreadingfilm", body, (result) => {
      if (result.status == 200) {
        this.readingfilm.api = result.data;
        this.readingfilm.api.iframe = this.readingfilm.api.iframe.replace(
          /width="\d+%"/,
          `width="99%"`
        );
        this.readingfilm.api.iframe = this.readingfilm.api.iframe.replace(
          /height="\d+%"/,
          `height="100%"`
        );
        this.readingfilm.api.iframe = this.readingfilm.api.iframe.replace(
          /style=.*"/,
          ""
        );

        $("#movies").append(this.readingfilm.api.iframe);
        this.$forceUpdate();
        this.loading = false;
        console.log(this.readingfilm.api.iframe);
      }
    });
  },
  beforeDestroy() {
    $("#js-scrollspy-trigger").removeClass("addbackground");
    $(".header--style-1").removeClass("addbackground");
    $(".pictureuser").next().removeClass("addtextcolor");
    $(".fas.fa-language").removeClass("addtextcolor");
  },
  methods: {
    openURL(url) {
      // var iframe = window.open(
      //   url,
      //   "Dynamic Popup",
      //   "height=100px,width=100px" +
      //     "scrollbars=auto, resizable=no, location=no, status=no"
      // );
      // var popup = window.open(
      //   url,
      //   "NewWin",
      //   "toolbar=no,status=no,width=100,height=100"
      // );
      // popup.moveTo(9000, 9000);
      // setTimeout(() => {
      //   popup.stop();
      //   popup.close();
      // }, 2000);
    },
    onTap(item) {
      console.log(item);
    },
    ondetail(detail) {
      localStorage.setItem("film", JSON.stringify(detail));
      this.$router.push("/summaryphim");
    },
  },
};
</script>

<style lang="scss" scoped>
.readingfilm {
  margin: 5% 0;
}
#movies {
  width: 100%;
  height: 618px;
  display: block;
  margin: 0 auto;
  background: #000;
}
.thongtin {
  display: block;
  width: 100%;
  background: #091720;
  border-bottom: 1px solid #eee;
}
.diver {
  font-size: 14px;
  padding: 18px;
  color: #fff;
  text-align: center;
  background: #27323a;
  display: block;
  width: 100%;
  font-family: Nunito, sans-serif;
}
.name {
  margin-top: -27px;
  margin-bottom: 27px;
  h1 {
    font: 25px "UTMCafetaRegular" !important;
    text-shadow: 1px 1px 1px #222;
    color: #fff;
    margin-top: 6%;
    margin-left: 35px;
  }
  p {
    color: #ccc;
    margin-left: 35px;
  }
}
.episode {
  display: block;
  width: 100%;
  background: #091720;
  padding: 0 35px;
  padding-top: 25px;
  padding-bottom: 63px;
  p {
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  div {
    display: flex;
    flex-flow: row wrap;
    border: 1px solid #fff;
    button {
      padding: 9px 15px;
      background-color: #ff4500;
      border: 1px solid #ff4500;
      margin: 7px 10px;
      color: #fff;
      cursor: pointer;
    }
  }
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
.phimlienquan {
  margin: 10% 0;
  background-color: #091720;
}
/deep/ .block__title {
  font-size: 23px;
  font-size: 23px;
  margin-left: 17px;
  color: #fff;
  margin-top: 6px;
}
/deep/ .section__intro {
  width: 100%;
}
</style>
