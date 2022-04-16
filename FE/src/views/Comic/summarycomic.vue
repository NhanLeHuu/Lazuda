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
      <div class="addmsg">
        <i class="fas fa-book tutorial"></i>
        <p class="truyenmanga">Truyện Manga</p>
        <p class="links">Trang Chủ Lazuda Comic> {{ comic.title }}</p>
      </div>
      <div class="row addmsg">
        <div class="col-lg-4 adddivider">
          <img class="imgcomic" :src="comic.img" />
        </div>
        <div class="col-lg-8">
          <div class="coban">
            <p>{{ comic.title }}</p>
            <p><i class="fas fa-user-edit"></i> {{ comic.more.tacgia }}</p>
            <p><i class="fas fa-archive"></i> {{ comic.more.tinhtrang }}</p>
            <p><i class="fas fa-globe"></i> {{ comic.more.dich }}</p>
            <div class="theloai">
              <button v-for="(item, index) in comic.theloai" :key="index">
                {{ item }}
              </button>
            </div>
          </div>
          <div class="noidung">
            <p><i class="fas fa-paragraph"></i> Nội dung truyện</p>
            {{ comic.more.mota }}
          </div>
        </div>
      </div>
      <div class="row addmsg">
        <div class="chuong">
          <i class="fas fa-tasks"></i>
          <b>Danh sách chương</b>
        </div>
        <div class="box addscroll">
          <div class="list">
            <div
              v-for="(it, index) in comic.more.chuong"
              :key="index"
              class="row additem"
            >
              <div class="col-lg-10 sochuong" @click.prevent="onReading(it)">
                <i class="fas fa-bookmark"></i> {{ it.sochuong }}
              </div>
              <div class="col-lg-2 ngaygio">{{ it.ngaygio }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row addmsg">
        <!--====== Section Intro ======-->
        <div class="section__intro u-s-m-b-46">
          <div class="row">
            <div class="col-lg-12">
              <div class="block">
                <span class="block__title"
                  ><i class="fas fa-book-reader"></i> Truyện liên quan</span
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
                v-for="(item, index) in truyenlienquan"
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
    comic: {
      more: {
        tacgia: "",
        tinhtrang: "",
        mota: "",
        dich: "",
      },
    },
    truyenlienquan: [],
  }),
  mounted() {
    this.getApi();
  },
  methods: {
    getApi() {
      this.loading = true;
      this.comic = JSON.parse(localStorage.getItem("comic"));
      this.comic.more = {
        tacgia: "",
        tinhtrang: "",
        mota: "",
        dich: "",
      };

      var body = {
        summary: this.comic.hrefsummaryManga,
      };
      getApi("/getsummarycomic", body, (result) => {
        if (result.status == 200) {
          this.comic.more = result.data;
          this.truyenlienquan = result.data.truyenlienquan;
          this.$forceUpdate();
          this.loading = false;
        }
      });
    },
    onReading(item) {
      localStorage.setItem("readingcomic", JSON.stringify(item));
      this.$router.push("/readingcomic");
    },
    onsummary(detail) {
      localStorage.setItem("comic", JSON.stringify(detail));
      this.getApi();
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .addmsg {
  background-color: #ffffff;
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.08);
  padding: 20px;
  margin-bottom: 5%;
}
.coban {
  p {
    margin: 10px 0;
    color: #333333;
  }
  p:nth-child(1) {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 37px;
    color: #000;
    font-family: quicksand, sans-serif;
  }
}
.theloai button {
  padding: 13px 27px;
  color: black;
  margin-right: 17px;
  background: #f4f4f6;
  border: unset;
}
.noidung {
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  color: #000;
  margin-top: 3%;
  p {
    color: #333333;
    font-weight: bold;
    margin-bottom: 7px;
  }
}
.box {
  max-height: 500px;
  // overflow-y: auto;
  width: 100%;
}
.imgcomic {
  width: 100%;
}
.ngaygio {
  text-align: end;
  transform: translateX(-20px);
}
.addscroll {
  overflow-y: scroll;
  overflow-x: hidden;
}
.chuong {
  font-size: 26px;
  width: 100%;
  color: #ff4500;
  border-bottom: 1px solid #ff4500;
  padding-bottom: 17px;
  i {
    margin-right: 10px;
  }
  p {
  }
}
.additem {
  border-bottom: 1px solid #eee;
  padding: 11px 0;
  transition: 0.3s all ease;
  cursor: pointer;
  div {
    font-family: Quicksand, sans-serif;
    font-size: 15px;
    color: #000;
  }
  &:hover {
    background-color: #f4f4f6;
    div:nth-child(1) {
      transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateX(10px) scale(1.01);
    }
    div {
      color: #ff4500;
    }
  }
}
.adddivider {
  border-right: 2px solid #eee;
}
.tutorial {
  font-size: 31px;
  display: inline;
  margin-right: 10px;
  color: #007bf7;
}
.truyenmanga {
  display: inline;
  margin-right: 15px;
  font-family: Montserrat, sans-serif !important;
  color: #007bf7;
}
.links {
  display: inline-block;
}
/deep/ .block__title {
  font-size: 26px;
  width: 100%;
  color: #ff4500;
  padding-bottom: 17px;
}
/deep/ .block {
  border-bottom: 1px solid #ff4500;
  width: 100%;
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
    background-image: url("../../assets/logo/spinebook.png");
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
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.5);
  overflow: hidden;
  margin: 3% 0;
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
/deep/ .section__intro {
  width: 100%;
}
</style>
