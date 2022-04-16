<template>
  <fragment>
    <Header />
    <!--====== App Content ======-->
    <div class="app-content">
      <!--====== Section 1 ======-->
      <div class="u-s-p-y-60">
        <!--====== Section Content ======-->
        <div class="section__content">
          <div class="container">
            <div class="breadcrumb">
              <div class="breadcrumb__wrap">
                <ul class="breadcrumb__list">
                  <li class="has-separator">
                    <a href="/">Home</a>
                  </li>
                  <li class="is-marked">
                    <a href="/login">Signin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section 1 ======-->

      <!--====== Section 2 ======-->
      <div class="u-s-p-b-60">
        <!--====== Section Intro ======-->
        <div class="section__intro u-s-m-b-60">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section__text-wrap">
                  <h1 class="section__heading u-c-secondary">Đăng Nhập</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--====== End - Section Intro ======-->

        <!--====== Section Content ======-->
        <div class="section__content">
          <div class="container">
            <div class="row row--center">
              <div class="col-lg-6 col-md-8 u-s-m-b-30">
                <div class="l-f-o">
                  <div class="l-f-o__pad-box">
                    <h1 class="gl-h1">Là Khách Hàng Mới ?</h1>

                    <span class="gl-text u-s-m-b-30"
                      >Bằng việc tạo tài khoản với <u><b>LAZUDA</b></u> của
                      chúng tôi, bạn sẽ có thể thực hiện quy trình thanh toán
                      nhanh hơn, lưu trữ địa chỉ giao hàng, xem và theo dõi đơn
                      đặt hàng trong tài khoản của bạn và hơn thế nữa.
                    </span>
                    <div class="u-s-m-b-15">
                      <router-link
                        class="l-f-o__create-link btn--e-transparent-brand-b-2"
                        to="/register"
                        >Tạo Tài Khoản</router-link
                      >
                    </div>
                    <h1 class="gl-h1">Đăng Nhập</h1>

                    <span class="gl-text u-s-m-b-30"
                      >Nếu bạn đã có tài khoản với <u><b>LAZUDA</b></u
                      >, vui lòng đăng nhập.
                    </span>
                    <form class="l-f-o__form">
                      <div class="gl-s-api">
                        <!-- <div class="u-s-m-b-15">
                          <button
                            class="gl-s-api__btn gl-s-api__btn--fb"
                            type="button"
                            @click="loginWithFB"
                          >
                            <i class="fab fa-facebook-f"></i>

                            <span>Đăng Nhập Với Facebook</span>
                          </button>
                        </div> -->
                        <div class="u-s-m-b-15">
                          <button
                            class="gl-s-api__btn gl-s-api__btn--gplus"
                            type="button"
                            @click="loginWithGG"
                          >
                            <i class="fab fa-google"></i>

                            <span>Đăng Nhập Google</span>
                          </button>
                        </div>
                      </div>
                      <div class="u-s-m-b-30">
                        <label class="gl-label" for="login-email">E-mail</label>

                        <input
                          class="input-text input-text--primary-style"
                          type="text"
                          autocomplete="off"
                          id="login-email"
                          v-model="login.email"
                          placeholder="Nhập E-mail"
                        />
                      </div>
                      <div class="u-s-m-b-30">
                        <label class="gl-label" for="login-password"
                          >Mật Khẩu</label
                        >
                        <el-input
                          placeholder="Nhập Mật Khẩu"
                          autocomplete="off"
                          id="login-password"
                          class="matkhau"
                          :show-password="true"
                          v-model="login.matkhau"
                        >
                        </el-input>
                      </div>
                      <div class="u-s-m-b-30">
                        <label class="gl-label" for="login-password"
                          >Xác Nhận</label
                        >
                        <slide-verify
                          :l="42"
                          :r="10"
                          :w="310"
                          :h="155"
                          slider-text="向右滑动"
                          @success="onSuccess"
                          @fail="onFail"
                        ></slide-verify>
                      </div>
                      <div class="gl-inline">
                        <div class="u-s-m-b-30">
                          <button
                            class="btn btn--e-transparent-brand-b-2"
                            @click.prevent="onLogin"
                          >
                            Đăng Nhập
                          </button>
                        </div>
                        <div class="u-s-m-b-30">
                          <router-link class="gl-link" to="/forgotpassword"
                            >Quên Mật Khẩu ?</router-link
                          >
                        </div>
                      </div>

                      <div class="u-s-m-b-30">
                        <!--====== Check Box ======-->
                        <div class="check-box">
                          <input
                            v-model="login.remember"
                            type="checkbox"
                            id="remember-me"
                          />
                          <div
                            class="check-box__state check-box__state--primary"
                          >
                            <label class="check-box__label" for="remember-me"
                              >Remember Me</label
                            >
                          </div>
                        </div>
                        <!--====== End - Check Box ======-->
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--====== End - Section Content ======-->
      </div>
      <!--====== End - Section 2 ======-->
    </div>
    <!--====== End - App Content ======-->
    <Footer />
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import getApi from "@/api/getApi";
import firebase from "firebase";
import * as $ from "jquery";

export default {
  name: "Login",
  mixins: [componentmixin],
  components: {},
  data: () => ({
    userFB: "",
    confirm: false,
    login: {
      email: "",
      matkhau: "",
      remember: false,
    },
  }),
  mounted() {
    var textconfirm = document.getElementsByClassName(
      "slide-verify-slider-text"
    )[0];
    textconfirm.innerHTML =
      "<p style='font-size: 11px;margin-top: 8px'>Xác Nhận Vào Lazuda</p>";
    this.rmZoom();
    this.removeaccount();
  },
  methods: {
    removeaccount () {
      new firebase.auth().signOut();
    },
    loginWithGG () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          var kq = result.additionalUserInfo.profile;
          var body = {
            email: kq.email,
            ten: kq.given_name,
            ho: kq.family_name,
            matkhau: "",
            ngaysinh: "",
            gioitinh:"",
            picture: kq.picture
          }
          getApi("/existuser", body, (result) => {
            if (result.message === "updatepassword") {
                sessionStorage.setItem("enterpw", JSON.stringify(body));
                this.$router.replace("/enterpw");
              } else {
                sessionStorage.setItem('user', JSON.stringify(result.data[0]))
                location.href = "/";
            }
          });
        }).catch((err) => {
          console.warn(err.message);
        });
    },
    loginWithFB() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          var kq = result.additionalUserInfo.profile
          var body = {
            email: kq.email,
            ten: kq.first_name,
            ho: kq.last_name,
            matkhau: "",
            ngaysinh: "",
            gioitinh:"",
            picture: ""
          }
          getApi("/existuser", body, (result) => {
            if (result.message === "updatepassword") {
                sessionStorage.setItem("enterpw", JSON.stringify(body));
                this.$router.replace("/enterpw");
              } else {
                sessionStorage.setItem('user', JSON.stringify(result.data[0]))
                location.href = "/";
            }
          });
        })
        .catch((err) => {
          console.warn(err.message);
        });
    },
    onSuccess() {
      this.confirm = true;
    },
    onFail() {
      this.confirm = false;
    },
    rmZoom() {
      $(".zoomContainer").remove();
    },
    onLogin() {
      var { email, matkhau, remember } = this.login;
      if (email && matkhau && this.confirm) {
        var body = {
          email,
          matkhau,
        };
        getApi("/loginuser", body, (result) => {
          if (result.data && result.data.length > 0) {
            if (result.status == 200) {
              this.$store.dispatch("user/setUserAction", result.data[0]);
              delete result.data[0].cart
              let user =  result.data[0]
              if (remember) {
                localStorage.setItem("user", JSON.stringify(user));
              } else {
                sessionStorage.setItem("user", JSON.stringify(user));
              }
              location.href = "/";
            } else {
              alert("Đăng Nhập Thất Bại");
            }
          }
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.input-text {
  border: 1px solid;
  background-color: #ffff;
}
.remember-me {
  background-color: #ffff;
}
/deep/ .gl-s-api__btn--fb {
  background-color: #3f5aa6;
  border: 1px solid;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: transparent;
    border: 1px solid #3f5aa6;
    span {
      color: #3f5aa6;
    }
    i::before {
      color: #3f5aa6;
    }
  }
}
/deep/ .gl-s-api__btn--gplus {
  background-color: #dd4b39;
  border: 1px solid;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: transparent;
    border: 1px solid #dd4b39;
    span {
      color: #dd4b39;
    }
    i::before {
      color: #dd4b39;
    }
  }
}
.matkhau {
  /deep/ input {
    border: 1px solid;
    font-size: 12px;
  }
}
#slideVerify {
  margin: 0 auto;
}
</style>
