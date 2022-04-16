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
      <div class="row addmsg">
        <h5 class="chapter">{{ readingcomic.chapter }}</h5>
        <div class="tutorial">
          <em>Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter</em>
        </div>
        <div class="btncomic">
          <button
            @click.prevent="preChapter"
            v-if="readingcomic.prechapter != '#'"
          >
            <i class="fas fa-arrow-circle-left"></i>
            Chap Trước
          </button>
          <button class="turnlight" @click.prevent="turnLight">
            <i class="fas fa-lightbulb"></i>{{ lightText }}
          </button>
          <button
            @click.prevent="nextChapter"
            v-if="readingcomic.nextchapter != '#'"
          >
            Chap Sau
            <i class="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="reading">
      <div class="book">
        <div
          v-for="(item, index) in readingcomic.truyentranh"
          :key="index"
          :id="'page-' + item.index"
          class="page no-anim"
        >
          <div
            v-for="(img, indeximg) in item.content"
            :class="{ 'side-1': img.p % 2 != 0, 'side-2': img.p % 2 == 0 }"
            :id="'p' + img.p"
            :key="indeximg + 10"
          >
            <div class="content">
              <img :src="img.img" />
            </div>
            <!-- .content -->
          </div>
        </div>
        <!-- .page -->
      </div>
      <!-- <img
        v-for="(item, index) in readingcomic.reading"
        :key="index"
        :src="item"
      /> -->
    </div>
    <div class="row">
      <div style="text-align: right" class="container">
        <button class="homecomic" @click.prevent="$router.push('/comichome')">
          <i class="fas fa-home"></i> Trang Chủ Lazuda Comic
        </button>
      </div>
    </div>
    <div class="dividercomic"></div>
    <!--====== End - Section 3 ======-->
    <Footer />
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import * as $ from "jquery";
import getApi from "@/api/getApi";
// import Convert from "@/ultities/convert";

export default {
  name: "summarycomic",
  mixins: [componentmixin],
  components: {},
  data: () => ({
    loading: true,
    readingcomic: {
      truyentranh: [],
    },
    lightText: "Tắt Đèn",
  }),
  mounted() {
    this.readingcomic = JSON.parse(localStorage.getItem("readingcomic"));
    this.readingcomic.truyentranh = [];
    var body = {
      href: this.readingcomic.href,
    };

    getApi("/getreadingcomic", body, (result) => {
      if (result.status == 200) {
        this.setImg(result.data);
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
    setImg(data) {
      this.readingcomic = data;
      var truyentranh = [];
      var y = 0;

      this.readingcomic.reading.forEach((element, i) => {
        if (!truyentranh[y] || truyentranh[y].content.length < 2) {
          // null
          if (!truyentranh[y]) {
            truyentranh.push({
              index: y + 1,
              content: [
                {
                  img: element,
                  p: i + 1,
                },
              ],
            });
          } else {
            truyentranh[y].content.push({ img: element, p: i + 1 });
          }
        } else {
          y++;
          truyentranh.push({
            index: y + 1,
            content: [
              {
                img: element,
                p: i + 1,
              },
            ],
          });
        }
      });
      this.readingcomic.truyentranh = truyentranh;
      this.$forceUpdate();
      this.loading = false;
      setTimeout(() => {
        this.bookJS();
      }, 600);
    },
    bookJS() {
      $(".page").click(function () {
        $(this).removeClass("no-anim").toggleClass("flipped");
        $(".page > div").click(function (e) {
          e.stopPropagation();
        });
        reorder();
      });

      function reorder() {
        $(".book").each(function () {
          var pages = $(this).find(".page");
          var pages_flipped = $(this).find(".flipped");
          pages.each(function (i) {
            $(this).css("z-index", pages.length - i);
          });
          pages_flipped.each(function (i) {
            $(this).css("z-index", i + 1);
          });
        });
      }
      reorder();
    },
    turnLight() {
      if ($("#js-scrollspy-trigger").hasClass("addbackground")) {
        $("#js-scrollspy-trigger").removeClass("addbackground");
        $(".header--style-1").removeClass("addbackground");
        $(".pictureuser").next().removeClass("addtextcolor");
        $(".fas.fa-language").removeClass("addtextcolor");
        this.lightText = "Tắt Đèn";
      } else {
        $("#js-scrollspy-trigger").addClass("addbackground");
        $(".header--style-1").addClass("addbackground");
        $(".pictureuser").next().addClass("addtextcolor");
        $(".fas.fa-language").addClass("addtextcolor");
        this.lightText = "Bật Đèn";
      }
    },
    nextChapter() {
      this.readingcomic.truyentranh = []
      this.$forceUpdate();
      this.loading = true;
      var body = {
        href: this.readingcomic.nextchapter,
      };
      getApi("/getreadingcomic", body, (result) => {
        if (result.status == 200) {
          this.setImg(result.data);
        }
      });
    },
    preChapter() {
      this.readingcomic.truyentranh = []
      this.$forceUpdate();
      this.loading = true;
      var body = {
        href: this.readingcomic.prechapter,
      };
      getApi("/getreadingcomic", body, (result) => {
        if (result.status == 200) {
          this.setImg(result.data);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// book
.content {
}
.book {
  height: 100%;
  width: 1390px;
  background-image: linear-gradient(
      90deg,
      hsla(30, 40%, 50%, 0.6),
      hsla(30, 40%, 20%, 0.9),
      hsla(30, 40%, 50%, 0.4) 90%
    ),
    url("../../assets/logo/paper2.jpg");
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  border: 3px solid hsla(30, 10%, 20%, 1);
  border-radius: 5px;
  box-shadow: 0 0 150px hsla(170, 0%, 0%, 0.4);
}

.page {
  height: 100%;
  width: 50%;
  line-height: 1.5;
  border-right: 10px solid transparent;
  position: absolute;
  top: 0;
  right: 0;
  transform-origin: 0 50%;
  transition: 0.8s;
  /*animation: unflip .3s linear;*/
}

[class*="side"] {
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: hsl(30, 40%, 70%);
  background-image: url("../../assets/logo/paper2.jpg");
  background-size: 100% 100%;
  backface-visibility: hidden;
  overflow: auto;
  padding: 1% 1%;
}

.side-1 {
  z-index: 2;
  box-shadow: inset 50px 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

.side-2 {
  transform: rotateY(180deg);
  box-shadow: inset -50px 0 50px rgba(0, 0, 0, 0.5);
}

.flipped > .side-1 {
  box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.8);
  transition: 0.6s;
}

.flipped > [class*="side"] {
  pointer-events: auto;
}

.page:after {
  width: 100px;
  height: 50px;
  background-color: #555;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -42px;
  margin: auto;
  color: white;
  text-shadow: 0 -1px 0 #222;
  line-height: 50px;
  text-align: center;
  font-family: monospace;
  cursor: pointer;
  // background-image: url("../../assets/logo/turncomic.png");
  content: "trang sau";
  animation: hide 0.2s linear;
  z-index: 2;
  display: none;
}
.page:hover::after {
  display: block;
}
.page.flipped:hover::after {
  display: block;
}
.page.flipped:after {
  content: "trang trước";
  display: none;
  animation: hide 0.2s linear;
  transform: rotateY(180deg);
  pointer-events: auto;
  cursor: pointer;
}
/* to hide on flip animation */

@keyframes hide {
  0% {
    opacity: 0;
  }
  85% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.flipped {
  transform: rotateY(-180deg);
  transition: 1s all ease;
  pointer-events: none;
  /*animation: flip .3s linear;
  animation-fill-mode: forwards;*/
}

.no-anim,
.no-anim:after {
  animation: none;
  /* disable animation when page loads */
}
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background: #222;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::selection {
  background: #222;
  color: white;
}

::-moz-selection {
  background: #222;
  color: white;
}

body * {
  transform-style: preserve-3d;
  /* am i doing this wrong? */
}

body {
  background: radial-gradient(hsla(199, 40%, 90%, 0.7), hsla(0, 0%, 100%, 0))
      no-repeat,
    linear-gradient(60deg, purple, dodgerblue, violet);
  color: #222;
  font-family: "Gabriela", serif;
  perspective: 70em;
  /*in your face*/
  overflow-y: hidden;
}

h1,
p {
  margin: 5% 0;
}

@keyframes flip {
  to {
    transform: rotateY(-180deg);
  }
}

@keyframes unflip {
  from {
    transform: rotateY(-180deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
//
.tutorial {
  width: 100%;
  margin: 10px 0;
  text-align: center;
  em {
    color: #333333;
    font-size: 16px;
  }
}
.reading {
  text-align: center;
  position: relative;
  margin: 0px 0px;
  height: 632px;
  img {
    box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.08);
    display: block;
    margin: 0 auto;
    width: 100%;
  }
}
.dividercomic {
  margin-bottom: 10%;
}
.addmsg {
  background-color: #ffffff;
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.08);
  padding: 20px;
  margin-bottom: 5%;
  .chapter {
    font-size: 20px;
    color: #333;
    font-weight: 700;
    display: inline-block;
    width: 100%;
  }
}
.homecomic {
  padding: 10px;
  background: #ff4500;
  color: white;
  border: unset;
  border-radius: 2px;
  margin-right: 83px;
  margin-top: 58px;
  &:hover {
    cursor: pointer;
  }
}
.btncomic {
  width: 100%;
  text-align: center;
  button {
    padding: 12px 5px;
    // background: #ff4500;
    color: white;
    border: unset;
    border-radius: unset;
    outline: none;
    margin-right: 70px;
    background: #ff4500 url("../../assets/logo/btncomic.png") 50% no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    transition: 0.3s all ease;
  }
  .turnlight {
    color: #000;
    background: #fff url("../../assets/logo/btncomic.png") 50% no-repeat;
    transition: 0.3s all ease;
    padding: 11px 21px;
    &:hover {
      color: #fff;
      background: #000 url("../../assets/logo/btncomic.png") 50% no-repeat;
    }
  }
}
.addbackground {
  background-color: #343a40 !important;
}
.addtextcolor {
  color: #fff !important;
}
</style>
