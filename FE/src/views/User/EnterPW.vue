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
                    <a href="/forgotpassword">Reset</a>
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
                    CẬP NHẬT MẬT KHẨU CHO TÀI KHOẢN
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
                    <h1 class="gl-h1">NHẬP MẬT KHẨU</h1>

                    <span class="gl-text u-s-m-b-30"
                      >Nhập mật khẩu cho người dùng mới của bạn vào bên dưới và
                      chúng tôi sẽ set mật khẩu cho tài khoản liên kết với mạng
                      xã hội.</span
                    >
                    <form class="l-f-o__form">
                      <div class="u-s-m-b-30">
                        <label class="gl-label" for="reset-email"
                          >Mật Khẩu *</label
                        >
                        <el-input
                          placeholder="Nhập Mật Khẩu"
                          id="login-password"
                          class="matkhau"
                          :show-password="true"
                          v-model="pw"
                        />
                      </div>
                      <div class="u-s-m-b-30">
                        <button
                          class="btn btn--e-transparent-brand-b-2"
                          @click.prevent="onEnterPW"
                        >
                          Xác Nhận Mật Khẩu
                        </button>
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

export default {
  name: "EnterPW",
  mixins: [componentmixin],
  data: () => ({
    user: "",
    pw: "",
  }),
  mounted() {
    this.user = JSON.parse(sessionStorage.getItem("enterpw"));
  },
  methods: {
    onEnterPW() {
      if (this.pw != "") {
        var data = this.user
        var body = {
          ten: data.ten,
          ho: data.ho,
          ngaysinh: data.ngaysinh,
          gioitinh: data.gioitinh,
          email: data.email,
          matkhau: this.pw,
          picture: data.picture
        };
        getApi("/createuser", body, (result) => {
          if (result.status === 200) {
            sessionStorage.setItem("user", JSON.stringify(result.data[0]))
            location.href = "/";
          } else {
            alert("Không Thể Đăng Ký");
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
</style>