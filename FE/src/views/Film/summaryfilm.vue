<template>
  <fragment>
    <Header />
    <!--====== Section 3 ======-->
    <div class="wrapperphim">
      <div class="backgroundphim">
        <div class="tomau">
          <div
            v-loading="loading"
            element-loading-text="Lazuda đang lấy dữ liệu..."
            element-loading-background="rgba(0, 0, 0, 0.8)"
            class="container"
          >
            <div class="row addmsg topphim">
              <div class="row gioithieu">
                <div class="col-lg-4 dblock">
                  <img :src="film.data.img" :alt="film.title" />
                  <div class="btnplay dblock">
                    <button @click.prevent="onReadingFilm" class="play">
                      <i class="fas fa-video"></i> Xem Phim
                    </button>
                  </div>
                </div>
                <div class="col-lg-8 thongtin">
                  <div class="title">{{ film.title }}</div>
                  <p class="typefilm">{{ film.type }}</p>
                  <div class="thongtin-list"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="trailer">
            <p>Xem Trailer</p>
            <div class="iframe"></div>
          </div>
          <div class="mota"></div>
          <div class="container">
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
                      v-for="(item, index) in filmlienquan"
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
          </div>
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
import * as $ from "jquery";
// import Convert from "@/ultities/convert";

export default {
  name: "summaryfilm",
  mixins: [componentmixin],
  props: {},
  watch: {},
  data: () => ({
    loading: true,
    film: { data: { img: "" } },
    filmlienquan: [],
  }),
  mounted() {
    this.film = JSON.parse(localStorage.getItem("film"));
    this.film.data = { img: "" };
    var body = {
      summary: this.film.href,
    };
    getApi("/getsummaryfilm", body, (result) => {
      if (result.status == 200) {
        this.film.data = result.data;
        this.filmlienquan = result.data.filmlienquan;
        this.renderData();
      }
    });
  },
  methods: {
    renderData() {
      $(".thongtin-list").append(this.film.data.thongtin);
      this.film.data.mota = this.film.data.mota.replace(
        /(<img\s+src=")/g,
        `<img src="https://www.fullphim.net`
      );
      this.film.data.trailer = this.film.data.trailer.replace(
        /width="\d+"/,
        `width="100%"`
      );
      this.film.data.trailer = this.film.data.trailer.replace(
        /height="\d+"/,
        `height="480"`
      );

      $(".mota").append(this.film.data.mota);
      $("#trailer .iframe").append(this.film.data.trailer);
      $(".backgroundphim").css(
        "background-image",
        `url("${this.film.data.background}")`
      );
      this.$forceUpdate();
      this.loading = false;
    },
    onReadingFilm() {
      localStorage.setItem("readingfilm", JSON.stringify(this.film));
      this.$router.push("/readingphim");
    },
    removeStatus(val) {
      val.forEach((e) => {
        e.status = e.status.replace(/\s+-/, "-");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap");
/deep/ .addmsg {
  background-color: RGBA(9, 22, 31, 0.5);
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.08);
  padding: 20px;
  margin-bottom: 5%;
}
.backgroundphim {
  background-size: contain;
  background-repeat: no-repeat;
}
.wrapperphim {
  background-color: RGBA(8, 27, 39, 1);
}
.tomau {
  background-color: RGBA(8, 27, 39, 0.5);
}
#trailer {
  text-align: center;
  width: 80%;
  margin-left: 10.5%;
  p {
    color: #fff;
    font-size: 27px;
    margin-bottom: 20px;
  }
  .iframe {
  }
}
.mota {
  width: 80%;
  margin-left: 10.5%;
  /deep/ p {
    color: #9cabb6;
    font-size: 17px;
    font-family: Roboto, sans-serif;
    line-height: 29px;
  }
  /deep/ figure {
    text-align: center;
    margin: 5px auto;
  }
  /deep/ h2 {
    color: #fff;
    margin: 30px 0;
    // font-size: 34px;
  }

  /deep/ h3 {
    color: #fff;
    margin: 20px 0;
    // font-size: 34px;
  }
}
.dblock {
  display: block;
  width: 100%;
  img {
    width: 100%;
    border-radius: 6px;
  }
}
.thongtin-list {
  margin-bottom: 25px;
  font-family: Roboto, sans-serif;
  line-height: 40px;
  color: #fff;
  font-size: 20px;
}
.gioithieu {
  border-bottom: 1xp solid #eee;
}
.btnplay {
  margin: -1px 0;
  text-align: center;
}
.typefilm {
  display: inline-block;
  margin-left: 40%;
  font-size: 15px;
  color: #fff;
  text-decoration: underline;
}
.play {
  color: #fff;
  background: #ff4500;
  border: 1px solid #ff4500;
  padding: 14px 18px;
  border-radius: 2px;
  margin: 17px 0;
  display: inline-block;
  font: 22px / 25px UTMCafetaRegular;
  cursor: pointer;
  outline: none;
  i {
    margin-right: 14px;
  }
  &:focus {
    border: 1px solid #ff4500;
  }
}
.thongtin {
  padding-left: 51px;
  .title {
    font-weight: 800;
    color: #fff;
    font-size: 50px;
    font-family: Nunito, sans-serif;
  }
}
.content {
  color: #000;
  p {
    font-size: 20px;
  }
  .content-info {
    color: #000;
    margin-top: 8px;
    max-height: 173px;
    overflow-x: hidden;
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
}
/deep/ .block__title {
  font-size: 23px;
  color: #fff;
}
/deep/ .section__intro {
  width: 100%;
}
</style>
