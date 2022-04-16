<template>
  <fragment>
    <div class="col-lg-9 col-md-12">
      <div
        class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white"
      >
        <div class="dash__pad-2">
          <h1 class="dash__h1 u-s-m-b-14">Sửa Thông Tin</h1>

          <span class="dash__text u-s-m-b-30"
            v-if="thieu" ><u>Có vẻ như bạn chưa update thông tin của bạn ?</u></span
          >
          <div class="row">
            <div class="col-lg-12">
              <form class="dash-edit-p">
                <div class="gl-inline">
                  <div class="u-s-m-b-30">
                    <label class="gl-label" for="reg-fname">Họ</label>

                    <input
                      class="input-text input-text--primary-style"
                      type="text"
                      id="reg-fname"
                      v-model="user.ho"
                    />
                  </div>
                  <div class="u-s-m-b-30">
                    <label class="gl-label" for="reg-lname">Tên</label>

                    <input
                      class="input-text input-text--primary-style"
                      type="text"
                      id="reg-lname"
                      v-model="user.ten"
                    />
                  </div>
                </div>
                <div class="gl-inline">
                  <div class="u-s-m-b-30">
                    <!--====== Date of Birth Select-Box ======-->

                    <span class="gl-label">Ngày sinh</span>
                    <el-date-picker
                      class="birth"
                      v-model="user.ngaysinh"
                      value-format="yyyy-MM-dd"
                      format="yyyy-MM-dd"
                      type="date"
                      placeholder="Nhập Ngày Sinh"
                    >
                    </el-date-picker>
                    <!--====== End - Date of Birth Select-Box ======-->
                  </div>
                  <div class="u-s-m-b-30">
                    <label class="gl-label" for="gender">Giới tính</label
                    ><select
                      class="select-box select-box--primary-style u-w-100"
                      id="gender"
                      v-model="user.gioitinh"
                    >
                      <option selected>Lựa chọn</option>
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                    </select>
                  </div>
                </div>
                <div class="gl-inline">
                  <div class="u-s-m-b-30">
                    <h2 class="dash__h2 u-s-m-b-8">E-mail</h2>
                    <span class="dash__text">{{ user.email }}</span>
                  </div>
                  <div class="u-s-m-b-30">
                    <h2 class="dash__h2 u-s-m-b-8">Số Điện Thoại</h2>
                    <input
                      class="input-text input-text--primary-style"
                      type="text"
                      id="reg-lname"
                      v-model="user.sdt"
                    />
                  </div>
                </div>

                <button class="btn btn--e-brand-b-2" @click.prevent="onSave">
                  Lưu Thông Tin
                </button>
                <button class="btn btn--e-brand-b-2 goback" @click.prevent="$router.go(-1)">
                  Trở Lại
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import getApi from "@/api/getApi";

export default {
  name: "Summary",
  mixins: [componentmixin],
  data: () => ({
    user: {},
    thieu: false
  }),
  mounted() {
    var user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      this.user = user;
    }
    if (!user.ho || !user.ten || !user.ngaysinh || !user.gioitinh || !user.sdt) {
      this.thieu = true
    }
  },
  methods: {
    onSave() {
      var { id, ho, ten, ngaysinh, gioitinh, sdt } = this.user;
      var body = {
        id,
        ho,
        ten,
        ngaysinh,
        gioitinh,
        sdt,
      };

      getApi("/editprofile", body, (result) => {
          if (result.status == 200) {
          this.$notify({
            title: "Thông Tin Đến Bạn",
            dangerouslyUseHTMLString: true,
            message: `<strong>Update thông tin của bạn thành công</strong>
              <style>
              .el-notification__icon {margin-top: 0px;}
              .el-notification__group {margin-top: -13px;}
              .el-notification__group h2 {font-size: 12px;}
              .el-notification__group .el-notification__content {margin-top: -8px;}
              </style>
            `,
            duration: 3000,
            type: "success",
          });
          localStorage.setItem('user', JSON.stringify(this.user))
        } else {
          this.$notify({
            title: "Thông Tin Đến Bạn",
            dangerouslyUseHTMLString: true,
            message: `<strong>Lỗi update thông tin</strong>
              <style>
              .el-notification__icon {margin-top: 0px;}
              .el-notification__group {margin-top: -13px;}
              .el-notification__group h2 {font-size: 12px;}
              .el-notification__group .el-notification__content {margin-top: -8px;}
              </style>
            `,
            duration: 3000,
            type: "error",
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/.birth {
  /deep/ input {
    outline: none !important;
    background-color: #f4f4f6 !important;
  }
}
/deep/ .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
/deep/.btn.btn--e-brand-b-2 {
  border: 1px solid #ff4500;
  font-weight: bold;
  border-radius: 2px;
  &:hover {
    background-color: #ffffff;
    color: #ff4500;
    transition: 0.2s;
  }
}
.goback {
  margin-left: 10px;
}
</style>