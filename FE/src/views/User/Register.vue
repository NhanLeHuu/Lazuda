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
                    <a href="/register">Signup</a>
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
                  <h1 class="section__heading u-c-secondary">
                    ĐĂNG KÝ
                  </h1>
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
                    <h1 class="gl-h1">Đăng Ký Tài Khoản</h1>
                    <form class="l-f-o__form">
                      <div class="gl-s-api">
                        <!-- <div class="u-s-m-b-15">
                          <button
                            class="gl-s-api__btn gl-s-api__btn--fb"
                            type="button"
                            @click="registerWithFB"
                          >
                            <i class="fab fa-facebook-f"></i>

                            <span>Đăng Ký Với Facebook</span>
                          </button>
                        </div> -->
                        <div class="u-s-m-b-30">
                          <button
                            class="gl-s-api__btn gl-s-api__btn--gplus"
                            type="button"
                            @click="registerWithGG"
                          >
                            <i class="fab fa-google"></i>

                            <span>Đăng Ký Với Google</span>
                          </button>
                        </div>
                      </div>
                      <div class="u-s-m-b-30">
                        <label class="gl-label" for="reg-fname">Tên</label>

                        <input
                          class="input-text input-text--primary-style"
                          type="text"
                          id="reg-fname"
                          v-model="user.ten"
                          required
                          placeholder="Nhập Tên"
                        />
                      </div>
                      <div class="u-s-m-b-30">
                        <label class="gl-label" for="reg-lname">Họ</label>

                        <input
                          class="input-text input-text--primary-style"
                          type="text"
                          id="reg-lname"
                          v-model="user.ho"
                          required
                          placeholder="Nhập Họ"
                        />
                      </div>
                      <div class="gl-inline">
                        <div class="u-s-m-b-30">
                          <!--====== Date of Birth Select-Box ======-->

                          <span class="gl-label">Ngày Sinh</span>
                          <div class="gl-dob">
                            <el-date-picker
                              class="birth"
                              v-model="user.ngaysinh"
                              value-format="yyyy-MM-dd"
                              format="yyyy-MM-dd"
                              type="date"
                              placeholder="Nhập Ngày Sinh"
                            >
                            </el-date-picker>
                          </div>
                          <!--====== End - Date of Birth Select-Box ======-->
                        </div>
                        <div class="u-s-m-b-30">
                          <label class="gl-label" for="gender">Giới Tính</label
                          ><select
                            class="select-box select-box--primary-style u-w-100"
                            id="gender"
                            v-model="user.gioitinh"
                            data-tooltip="tooltip"
                            data-placement="right"
                            :title="chongioitinh"
                          >
                            <option value="selected" selected>Lựa Chọn</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                          </select>
                        </div>
                      </div>
                      <div class="u-s-m-b-30">
                        <label class="gl-label" for="reg-email">E-mail</label>

                        <input
                          class="input-text input-text--primary-style"
                          type="text"
                          id="reg-email"
                          v-model="user.email"
                          required
                          placeholder="Nhập E-mail"
                        />
                      </div>
                      <div class="u-s-m-b-30">
                        <label class="gl-label" for="reg-password"
                          >Mật Khẩu</label
                        >

                        <input
                          class="input-text input-text--primary-style"
                          type="password"
                          id="reg-password"
                          v-model="user.matkhau"
                          required
                          placeholder="Nhập Mật Khẩu"
                        />
                      </div>
                      <div class="u-s-m-b-30">
                        <label class="gl-label" for="retype-password"
                          >Nhập Lại Mật Khẩu</label
                        >

                        <input
                          class="input-text input-text--primary-style"
                          type="password"
                          id="retype-password"
                          v-model="user.nhaplaimatkhau"
                          required
                          data-tooltip="tooltip"
                          data-placement="right"
                          :title="retypeMatKhau"
                          placeholder="Nhập Lại Mật Khẩu"
                        />
                      </div>
                      <div class="u-s-m-b-15">
                        <button
                          class="btn btn--e-transparent-brand-b-2"
                          type="button"
                          @click="onRegister"
                        >
                          Đăng Ký
                        </button>
                      </div>

                      <a class="gl-link" href="/">Trở về Home</a>
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
import firebase from "firebase";
import * as $ from 'jquery'
import getApi from '@/api/getApi'

export default {
  name: "Register",
  mixins: [componentmixin],
  components: {},
  data: () => ({
    userFB: "",
    userGG: "",
    loginSub: false,
    user: {
      ten: "",
      ho: "",
      ngaysinh: "",
      gioitinh: "selected",
      email: "",
      matkhau: "",
      nhaplaimatkhau: "",
    },
    retypeMatKhau: "",
    chongioitinh: ""
  }),
  mounted (){
    this.rmZoom();
    this.removeaccount();
  },
  methods: {
    removeaccount () {
      new firebase.auth().signOut();
    },
    registerWithGG () {
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
    registerWithFB() {
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
    onRegister() {
      var {
        ten,
        ho,
        ngaysinh,
        gioitinh,
        email,
        matkhau,
        nhaplaimatkhau,
      } = this.user;
      if (ten && ho && ngaysinh && gioitinh && email && matkhau && nhaplaimatkhau) {
        if (matkhau === nhaplaimatkhau) {
          this.required("", "black")
          if (gioitinh !== "selected") {
            this.requiredGioitinh("","black")
            var body = {
              ten,
              ho,
              ngaysinh,
              gioitinh,
              email,
              matkhau,
              picture: ""
            }
            getApi('/createuser',body, (result) => {
              if (result.status === 200){
                this.$router.replace("login")
              }else {
                alert("Không Thể Đăng Ký");
              }
            })
          } else {
            this.requiredGioitinh("Chưa Chọn Giới Tính","red")
          }
        } else {
          this.required("Mật Khẩu Nhập Lại Không Khớp", "red")
        }
      }
    },
    rmZoom() {
      $(".zoomContainer").remove();
    },
    required (type, color){
      this.retypeMatKhau = type
      $('#retype-password').css('border', `1px solid ${color}`)
    },
    requiredGioitinh (type, color){
      this.chongioitinh = type
      $('#gender').css('border', `1px solid ${color}`)
    }
  },
};
</script>

<style scoped lang="scss">
.input-text {
  border: 1px solid;
  background-color: #ffff;
}
.select-box {
  border: 1px solid;
  background-color: #ffff;
}
/deep/.birth {
  /deep/ input {
    outline: none !important;
    border: 1px solid #333333;
    background-color: #ffff !important;
  }
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
</style>
