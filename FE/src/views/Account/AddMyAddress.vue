<template>
  <fragment>
    <div class="col-lg-9 col-md-12">
      <div
        class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white"
      >
        <div class="dash__pad-2">
          <h1 class="dash__h1 u-s-m-b-14">Thêm Địa Chỉ</h1>

          <span class="dash__text u-s-m-b-30"
            >Chúng tôi cần một địa chỉ để chúng tôi có thể cung cấp sản phẩm
            .</span
          >
          <form class="dash-address-manipulation">
            <div class="gl-inline">
              <div class="u-s-m-b-30">
                <label class="gl-label" for="address-phone"
                  >Họ và Tên</label
                >
                <span class="dash__text">{{ user.ho + " " + user.ten }}</span>
              </div>
              <div class="u-s-m-b-30">
                <label class="gl-label" for="address-street"
                  >Số Điện Thoại</label
                >
                <span class="dash__text">{{ user.sdt }}</span>
              </div>
            </div>
            <div class="gl-inline">
              <div class="u-s-m-b-30">
                <label class="gl-label" for="address-phone">Số Nhà</label>

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  v-model="address.sonha"
                  autocomplete="false"
                />
              </div>
              <div class="u-s-m-b-30">
                <label class="gl-label" for="address-street">Tên Đường</label>

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  v-model="address.tenduong"
                  autocomplete="false"
                />
              </div>
            </div>
            <div class="gl-inline">
              <div class="u-s-m-b-30">
                <label class="gl-label" for="address-street">Quận/ Huyện</label>

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  v-model="address.quanhuyen"
                  autocomplete="false"
                />
              </div>
              <div class="u-s-m-b-30">
                <label class="gl-label" for="address-street">Phường/ Xã</label>

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  v-model="address.phuongxa"
                  autocomplete="false"
                />
              </div>
            </div>
            <div class="gl-inline">
              <div class="u-s-m-b-30">
                <label class="gl-label" for="address-city"
                  >Tỉnh/ Thành phố</label
                >

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  v-model="address.tinhthanhpho"
                  autocomplete="false"
                />
              </div>
              <div class="u-s-m-b-30">
                <label class="gl-label" for="address-street"
                  >Lựa chọn tên cho địa chỉ thường dùng :</label
                >
                <el-button
                  type="primary"
                  @click.prevent="onAddress('NHÀ RIÊNG')"
                  ><i class="fas fa-house-user"></i> NHÀ RIÊNG</el-button
                >
                <el-button
                  type="primary"
                  @click.prevent="onAddress('VĂN PHÒNG')"
                  ><i class="far fa-building"></i> VĂN PHÒNG</el-button
                >
              </div>
            </div>

            <button class="btn btn--e-brand-b-2" @click.prevent="onAddAddress">
              Thêm Địa Chỉ
            </button>
            <button class="btn btn--e-brand-b-2 goback" @click.prevent="$router.go(-1)">
              Trở Lại
            </button>
          </form>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import getApi from "@/api/getApi";

export default {
  name: "AddMyAddress",
  mixins: [componentmixin],
  data: () => ({
    user: {},
    address : {
      sonha: '',
      tenduong: '',
      quanhuyen: '',
      phuongxa: '',
      tinhthanhpho: '',
      diachithuongdung: ''
    }
  }),
  mounted() {
    var user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      this.user = user;
    }
  },
  methods: {
    onAddress(diachi) {
      this.address.diachithuongdung = diachi;
    },
    onAddAddress() {
      var { id } = this.user;
      var { sonha, tenduong, quanhuyen, phuongxa, tinhthanhpho , diachithuongdung } = this.address

      var body = {
        id,
        sonha,
        tenduong,
        quanhuyen,
        phuongxa,
        tinhthanhpho,
        diachithuongdung
      };

      getApi("/addaddress", body, (result) => {
        if (result.status == 200) {
          this.$notify({
            title: "Thông Tin Đến Bạn",
            dangerouslyUseHTMLString: true,
            message: `<strong>Update địa chỉ của bạn thành công</strong>
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
          localStorage.setItem("user", JSON.stringify(this.user));
          this.$router.push('/dashboard-account/myaddress')
        } else {
          this.$notify({
            title: "Thông Tin Đến Bạn",
            dangerouslyUseHTMLString: true,
            message: `<strong>Lỗi update địa chỉ</strong>
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
/deep/ .el-button {
  padding: 20px 20px;
  color: black;
  background-color: #f4f4f6;
  border: 1px solid transparent;
  &:hover {
    color: rgba(77, 19, 209, 1);
  }
  &:focus {
    color: white;
    background-color: rgba(77, 19, 209, 1);
  }
}
.goback {
  margin-left: 10px;
}
</style>