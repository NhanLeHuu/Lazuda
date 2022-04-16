<template>
  <div
    v-scrollbar="{
      alwaysShowTracks: true,
      renderByPixels: true,
      continuousScrolling: false,
      damping: 0.1,
    }"
    id="container"
    style="max-height: 100vh"
  >
    <div id="app">
      <TransitionPage>
        <router-view></router-view>
      </TransitionPage>
    </div>
  </div>
</template>

<script>
import * as $ from "jquery";
import TransitionPage from "@/components/TransitionPage";

export default {
  name: "App",
  components: {
    TransitionPage,
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        if (val.fullPath.includes("comic")) {
          $(".scrollshendu").text("LAZUDA----COMIC");
        } else {
          $(".scrollshendu").text("LAZUDA");
        }
        if (val.fullPath.includes("phim")) {
          setTimeout(() => {
            this.setUpColor();
          }, 600);
          $(".scrollshendu").text("LAZUDA----PHIM");
        } else {
          $(".scrollshendu").text("LAZUDA");
        }
      },
    },
  },
  mounted() {
    this.setScrollBar();
    document.querySelector("#js-scrollspy-trigger").style.overflow = "hidden";
  },
  methods: {
    setUpColor() {
      $("#js-scrollspy-trigger").addClass("addbackgroundfilm");
      $(".header--style-1").addClass("addbackgroundfilm");
      $(".pictureuser").next().addClass("addtextcolorfilm");
      $(".fas.fa-language").addClass("addtextcolorfilm");
      $(".userin").addClass("addtextcolorfilm");
    },
    setScrollBar() {
      $(".scrollbar-track-x").remove();
      var backscrollbar = $(".scrollbar-track-y");
      var scrollbar = $(".scrollbar-track-y").children();
      var scrollContent = $(".scroll-content");

      backscrollbar.css({
        width: "21px",
      });
      scrollContent.css({
        width:
          parseInt($(document).width()) -
          parseInt($(backscrollbar).width()) +
          "px",
      });
      backscrollbar.addClass("animal");
      backscrollbar.addClass("mouse");
      backscrollbar.append(
        `<div class="animal mouse">
          <div class="eye1"></div>
          <div class="eye2"></div>
          <div class="face"></div>
          <div class="nose">
            <div class="mouth"></div>
          </div>
          <div class="whiskers1"></div>
          <div class="whiskers2"></div>
          <div class="hand1"></div>
          <div class="hand2"></div>
          <label class="scrollshendu">LAZUDA</label>
        </div>`
      );

      var footbal =
        "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/0f4c9546d74a552101369473af40c227/large.png";
      scrollbar.css({
        "z-index": 1,
        background: `url("${footbal}") 0% 0% / 100% 100%`,
        width: "50px",
        "max-height": "42px",
        opacity: "0.85",
        "border-radius": "50%",
      });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
@import "./assets/scss/shendu.scss";
@import "./assets/css/vendor.css";
@import "./assets/css/utility.css";
@import "./assets/css/app.css";
@import "./assets/css/animalscrollbar.css";
</style>
