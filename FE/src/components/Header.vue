<template>
  <fragment>
    <!--====== Main Header ======-->
    <header class="header--style-1">
      <!--====== Nav 1 ======-->
      <nav class="primary-nav primary-nav-wrapper--border">
        <div class="container">
          <!--====== Primary Nav ======-->
          <div class="primary-nav">
            <!--====== Main Logo ======-->
            <a class="main-logo" href="/">
              <img src="@/assets/logo/logo-shop2.png" alt=""
            /></a>
            <!--====== End - Main Logo ======-->

            <!--====== Search Form ======-->
            <form class="main-form">
              <el-select
                v-if="searchcomic"
                clearable
                v-model="valuecomic"
                placeholder="Tìm truyện trên lazuda"
                filterable
                :filter-method="dataFilterComic"
                @keyup.enter.native="onSearchComic"
              >
                <el-option
                  v-for="(item, index) in optionscomic"
                  :key="index"
                  :label="item"
                  :value="item"
                />
              </el-select>

              <el-select
                v-else-if="searchphim"
                clearable
                v-model="valuephim"
                placeholder="Tìm phim trên lazuda"
                filterable
                :filter-method="dataFilterPhim"
                @keyup.enter.native="onSearchPhim"
              >
                <el-option
                  v-for="(item, index) in optionsphim"
                  :key="index"
                  :label="item"
                  :value="item"
                />
              </el-select>

              <el-select
                v-else
                clearable
                v-model="value"
                :placeholder="$t('header.search')"
                filterable
                :filter-method="dataFilter"
                @keyup.enter.native="onSearch"
              >
                <el-option
                  v-for="(item, index) in options"
                  :key="index"
                  :label="item"
                  :value="item"
                />
              </el-select>

              <button
                v-if="searchcomic"
                class="btn btn--icon fas fa-search main-search-button"
                @click.prevent="onSearchComic"
              ></button>
              <button
                v-else-if="searchphim"
                class="btn btn--icon fas fa-search main-search-button"
                @click.prevent="onSearchPhim"
              ></button>
              <button
                v-else
                class="btn btn--icon fas fa-search main-search-button"
                @click.prevent="onSearch"
              ></button>
            </form>
            <!--====== End - Search Form ======-->
            <div v-if="user" class="cart">
              <router-link class="" to="/cart">
                <!-- <i class="fas fa-cart-plus cart-i"></i> -->
                <img src="@/assets/logo/cart.png" alt="cart" />
              </router-link>
            </div>
            <!--====== Dropdown Main plugin ======-->
            <div class="menu-init" id="navigation">
              <!-- <button
                class="btn btn--icon toggle-button toggle-button--secondary fas fa-cogs"
                type="button"
              ></button> -->

              <!--====== Menu ======-->
              <div class="ah-lg-mode">
                <span class="ah-close">✕ Đóng</span>

                <!--====== List ======-->
                <ul
                  class="ah-list ah-list--design1 ah-list--link-color-secondary"
                >
                  <li class="has-dropdown">
                    <a>
                      <div class="pictureuser">
                        <img v-if="user.picture" :src="user.picture" />
                        <i v-else class="far fa-user-circle userin"></i>
                      </div>
                      <b v-if="user">{{ user.ho + " " + user.ten }}</b></a
                    >

                    <!--====== Dropdown ======-->

                    <span class="js-menu-toggle"></span>
                    <ul style="width: 215px">
                      <li class="account-hov" v-if="user">
                        <router-link to="/dashboard-account/summary"
                          ><i class="fas fa-user-circle u-s-m-r-6"></i>

                          <span>{{ $t("header.account") }}</span></router-link
                        >
                      </li>
                      <li class="account-hov" v-if="!user">
                        <router-link to="/register"
                          ><i class="fas fa-user-plus u-s-m-r-6"></i>

                          <span>{{ $t("header.register") }}</span></router-link
                        >
                      </li>
                      <li class="account-hov" v-if="!user">
                        <router-link to="/login"
                          ><i class="fas fa-lock u-s-m-r-6"></i>

                          <span>{{ $t("header.login") }}</span></router-link
                        >
                      </li>
                      <li
                        class="account-hov"
                        v-if="user"
                        @click.prevent="logOut"
                      >
                        <a
                          ><i class="fas fa-lock-open u-s-m-r-6"></i>

                          <span>{{ $t("header.logout") }}</span></a
                        >
                      </li>
                    </ul>
                    <!--====== End - Dropdown ======-->
                  </li>
                  <li
                    class="has-dropdown"
                    data-tooltip="tooltip"
                    data-placement="left"
                    title=""
                  >
                    <a><i class="fas fa-language"></i></a>

                    <!--====== Dropdown ======-->

                    <span class="js-menu-toggle"></span>
                    <ul style="width: 120px; padding: 0 0">
                      <li class="has-dropdown has-dropdown--ul-right-100">
                        <a class="lang"
                          >{{ $t("header.lang")
                          }}<i class="fas fa-angle-down u-s-m-l-6"></i
                        ></a>

                        <!--====== Dropdown ======-->

                        <span class="js-menu-toggle"></span>
                        <ul class="lang-select" style="width: 166px">
                          <li @click.prevent="onChangeLang('en')">
                            <!-- <div class="tick">
                            </div> -->
                            <div class="setlang">
                              <img src="@/assets/logo/en.png" /><a>{{
                                $t("header.en")
                              }}</a>
                              <i v-if="flag == 'en'" class="fas fa-flag"></i>
                            </div>
                          </li>
                          <li @click.prevent="onChangeLang('vi')">
                            <!-- <div class="tick">
                            </div> -->
                            <div class="setlang">
                              <img src="@/assets/logo/vi.gif" /><a>{{
                                $t("header.vi")
                              }}</a>
                              <i v-if="flag == 'vi'" class="fas fa-flag"></i>
                            </div>
                          </li>
                        </ul>
                        <!--====== End - Dropdown ======-->
                      </li>
                    </ul>
                    <!--====== End - Dropdown ======-->
                  </li>
                </ul>
                <!--====== End - List ======-->
              </div>
              <!--====== End - Menu ======-->
            </div>
            <!--====== End - Dropdown Main plugin ======-->
          </div>
          <!--====== End - Primary Nav ======-->
        </div>
      </nav>
      <!--====== End - Nav 1 ======-->

      <!--====== Nav 2 ======-->
      <nav class="secondary-nav-wrapper">
        <div class="container">
          <!--====== Secondary Nav ======-->
          <div class="secondary-nav">
            <!--====== Dropdown Main plugin ======-->
            <div class="menu-init" id="navigation1">
              <button
                class="btn btn--icon toggle-mega-text toggle-button"
                type="button"
              >
                M
              </button>

              <!--====== Menu ======-->
              <div class="ah-lg-mode">
                <span class="ah-close">✕ Close</span>

                <!--====== List ======-->
                <ul class="ah-list">
                  <li class="has-dropdown">
                    <span v-if="comicappear" class="mega-text menu-text"
                      >Menu</span
                    >

                    <!--====== Mega Menu ======-->

                    <span class="js-menu-toggle"></span>
                    <div class="mega-menu">
                      <div class="mega-menu-wrap">
                        <div class="mega-menu-list">
                          <ul>
                            <li
                              v-for="(menu, index) in datamenu"
                              :key="index"
                              :class="{ 'js-active': index == 0 }"
                            >
                              <a href="shop-side-version-2.html">
                                <!-- <i class="fas fa-tv u-s-m-r-6"></i> -->
                                <span>{{ menu.name }}</span></a
                              >

                              <span
                                :class="{
                                  'js-menu-toggle': true,
                                  'js-toggle-mark': index == 0,
                                }"
                              ></span>
                            </li>
                          </ul>
                        </div>

                        <!--====== Electronics ======-->
                        <div
                          v-for="(menu, index) in datamenu"
                          :key="index + 10"
                          :class="{
                            'mega-menu-content': true,
                            'js-active': index + 10 == 10,
                          }"
                        >
                          <div class="row">
                            <div class="col-lg-12">
                              <ul>
                                <li class="mega-list-title">
                                  <a @click.prevent>{{ menu.name }}</a>
                                </li>
                                <li
                                  v-for="(item, vitri) in menu.type"
                                  :key="vitri + 100"
                                >
                                  <a @click.prevent>{{ item }}</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <!--====== End - Electronics ======-->
                      </div>
                    </div>
                    <!--====== End - Mega Menu ======-->
                  </li>
                </ul>
                <!--====== End - List ======-->
              </div>
              <!--====== End - Menu ======-->
            </div>
            <!--====== End - Dropdown Main plugin ======-->

            <!--====== Dropdown Main plugin ======-->
            <div class="menu-init" id="navigation2">
              <!--====== Menu ======-->
              <!-- <img class="manga" src="@/assets/logo/manga.png" /> -->
              <!--====== End - Menu ======-->
            </div>
            <!--====== End - Dropdown Main plugin ======-->
          </div>
          <!--====== End - Secondary Nav ======-->
        </div>
      </nav>
      <!--====== End - Nav 2 ======-->
    </header>
    <!--====== End - Main Header ======-->
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import * as $ from "jquery";
import getApi from "@/api/getApi";

export default {
  components: { Fragment },
  watch: {
    $routercomic: {
      handler: function (val) {
        console.log(val);
      },
    },
  },
  data() {
    return {
      user: "",
      search: "",
      flag: "",
      optionsCopy: [
        "meat",
        "drink",
        "food",
        "Dragon Beard Noodles",
        "Peking duck",
      ],
      options: ["meat", "drink", "food", "Dragon Beard Noodles", "Peking duck"],
      optionscomic: [
        "doraemon",
        "naruto",
        "onepiece",
        "tây du",
        "super dragon ball",
      ],
      optionsCopycomic: [
        "doraemon",
        "naruto",
        "onepiece",
        "tây du",
        "super dragon ball",
      ],
      optionsphim: [
        "doraemon",
        "naruto",
        "captain sabertooth",
        "tây du",
        "transformers",
      ],
      optionsCopyphim: [
        "doraemon",
        "naruto",
        "captain sabertooth",
        "tây du",
        "transformers",
      ],
      value: "",
      valuecomic: "",
      valuephim: "",
      searchdata: [],
      datamenu: [],
      comicappear: false,
      searchcomic: false,
      searchphim: false,
    };
  },
  updated() {
    var val = this.$router.currentRoute.fullPath;
    if (val.includes("comic") || val.includes("phim")) {
      this.comicappear = false;
      if (val.includes("phim")) {
        this.searchphim = true;
      } else {
        this.searchcomic = true;
      }
    } else {
      this.comicappear = true;
      this.searchcomic = false;
      this.searchphim = false;
    }
  },
  mounted() {
    var user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : JSON.parse(sessionStorage.getItem("user"));
    var searchdata = JSON.parse(localStorage.getItem("searchdata"));
    if (searchdata) {
      this.searchdata = searchdata;
      this.options = searchdata;
      this.optionsCopy = searchdata;
    } else {
      this.searchdata = [];
      this.options = [];
      this.optionsCopy = [];
    }

    if (user) {
      this.user = user;
    }
    this.getMenu();
    this.flag = this.$i18n.locale;
  },
  methods: {
    getMenu() {
      getApi("/getMenu", {}, (result) => {
        if (result.status == 200) {
          this.setUpMenu(result.data);
        }
      });
    },
    setUpMenu(data) {
      let dataup = [];
      let vitri = [];
      let dautien = false;
      data.forEach((e) => {
        if (!dautien) {
          dautien = true;
          vitri.push(e.category);
          dataup.push({
            name: e.category,
            type: [e.type],
          });
        }
        if (dautien) {
          if (vitri.indexOf(e.category) == -1) {
            vitri.push(e.category);
            dataup.push({
              name: e.category,
              type: [e.type],
            });
          } else {
            dataup[dataup.length - 1].type.push(e.type);
          }
        }
      });
      this.datamenu = dataup;
    },
    onChangeLang(lang) {
      this.$i18n.locale = lang;
      this.flag = lang;
    },
    dataFilter(val) {
      this.value = val;
      if (val && this.options && this.optionsCopy) {
        //val exists
        this.options = this.optionsCopy.filter((item) => {
          if (
            !!~item.indexOf(val) ||
            !!~item.toUpperCase().indexOf(val.toUpperCase())
          ) {
            return true;
          }
        });
      } else {
        //When val is empty, restore the array
        this.options = this.optionsCopy;
      }
    },
    dataFilterComic(val) {
      this.valuecomic = val;
      if (val && this.optionscomic && this.optionsCopycomic) {
        //val exists
        this.optionscomic = this.optionsCopycomic.filter((item) => {
          if (
            !!~item.indexOf(val) ||
            !!~item.toUpperCase().indexOf(val.toUpperCase())
          ) {
            return true;
          }
        });
      } else {
        //When val is empty, restore the array
        this.optionscomic = this.optionsCopycomic;
      }
    },
    dataFilterPhim(val) {
      this.valuephim = val;
      if (val && this.optionsphim && this.optionsCopyphim) {
        //val exists
        this.optionsphim = this.optionsCopyphim.filter((item) => {
          if (
            !!~item.indexOf(val) ||
            !!~item.toUpperCase().indexOf(val.toUpperCase())
          ) {
            return true;
          }
        });
      } else {
        //When val is empty, restore the array
        this.optionsphim = this.optionsCopyphim;
      }
    },
    logOut() {
      sessionStorage.removeItem("user");
      localStorage.removeItem("user");
      this.user = "";
    },
    onSearch() {
      if (this.value) {
        localStorage.setItem("search", JSON.stringify(this.value));
        if (this.searchdata.indexOf(this.value) == -1) {
          this.searchdata.push(this.value);
          localStorage.setItem("searchdata", JSON.stringify(this.searchdata));
        }
        if (this.$router.currentRoute.name != "search") {
          this.$router.push("/search");
        } else {
          this.$emit("btnpress", true);
        }
      }
    },
    onSearchComic() {
      localStorage.setItem("searchcomic", JSON.stringify(this.valuecomic));
      this.$router.push("/searchcomic");
      this.$emit("btnpress", true);
    },
    onSearchPhim() {
      localStorage.setItem("searchphim", JSON.stringify(this.valuephim));
      this.$router.push("/searchphim");
      this.$emit("btnpress", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 160px;
  a img {
    width: 50%;
    &:hover {
      transform: scale(1.1);
      transition: 0.2s;
    }
  }
}
/deep/ #main-search {
  color: black;
  font-size: 14px;
}
/deep/ .primary-nav {
  flex-wrap: no wrap;
  height: auto;
  margin-top: 4px;
}
/deep/ .main-logo {
  margin: -10px 42px 0px -126px;
  width: 170px;
  img {
    width: 100%;
  }
}
.account-hov:hover {
  background-color: #ff4500;
  a {
    color: white;
  }
}
/deep/ .userin {
  font-size: 30px;
  margin-right: 7px;
}
.userin + b {
  vertical-align: super;
}
/deep/ .fa-language {
  font-size: 25px;
}
/deep/ .menu-text {
  width: 54px;
  height: 38px;
}
.cart-i {
  font-size: 31px;
  color: black;
  transition: 0.3s;
  &:hover {
    color: #63c283;
  }
}
/deep/ .main-form {
  width: 46%;
  margin-left: 11px;
}
/deep/.ah-list > li > .lang:hover {
  color: blue;
}
/deep/ .ah-list > .has-dropdown:hover > .lang {
  color: blue;
}
/deep/ .el-select {
  width: 100%;
}
/deep/ .el-select .el-input .el-select__caret {
  display: none;
}
/deep/ .el-input__inner {
  border-radius: unset;
}
/deep/ .el-popper[x-placement^="bottom"] {
  border-radius: unset;
}
/deep/ .lang-select {
  width: 162px;
  padding: 7px 0px;
  padding-bottom: 11px;
  li {
    display: flex;
  }
  li .tick {
  }
  li .setlang {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-top: 5px;
    margin-left: 15px;
  }
  li .setlang img {
    width: 30%;
  }
  li .setlang a {
    color: #333333;
    font-size: 12px;
    font-weight: 600;
    margin-top: 7px;
    margin-left: 5px;
    &:hover {
      color: #ff4500;
    }
  }
  li .setlang i {
    margin-top: 7px;
    margin-left: 10px;
    color: #ff4500;
  }
}
/deep/ .mega-menu {
  padding: 5px;
  width: 60%;
}
/deep/ .mega-menu-list {
  flex: 0 0 60%;
  max-width: 60%;
}
/deep/ .mega-menu-content {
  height: unset;
}
.pictureuser {
  display: inline-block;
  img {
    border-radius: 50%;
    width: 51%;
    margin-top: -50px;
    transform: translate(41px, 15px);
    border: 2px solid gray;
  }
}
// .manga {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 83px;
//   transform: translate(768%, -1px);
//   cursor: pointer;
// }
</style>
