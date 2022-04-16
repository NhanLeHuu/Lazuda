<template>
  <fragment>
    <div class="col-lg-9 col-md-12">
      <div
        class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30"
      >
        <div class="dash__pad-2">
          <h1 class="dash__h1 u-s-m-b-14">Thông Tin Cơ Bản</h1>

          <span class="dash__text u-s-m-b-30"
            >Review lại thông tin của bạn, bạn có thể sửa lại chúng</span
          >
          <div class="row">
            <div class="col-lg-4 u-s-m-b-30">
              <h2 class="dash__h2 u-s-m-b-8">Tên Đầy Đủ</h2>
              <span class="dash__text">{{ user.ho + " " + user.ten }}</span>
            </div>
            <div class="col-lg-4 u-s-m-b-30">
              <h2 class="dash__h2 u-s-m-b-8">E-mail</h2>

              <span class="dash__text">{{ user.email }}</span>
            </div>
            <div class="col-lg-4 u-s-m-b-30">
              <h2 class="dash__h2 u-s-m-b-8">Số Điện Thoại</h2>
              <span v-if="user.sdt" class="dash__text">{{ user.sdt }}</span>
              <span v-else class="dash__text">Chưa cập nhật</span>
            </div>
            <div class="col-lg-4 u-s-m-b-30">
              <h2 class="dash__h2 u-s-m-b-8">Ngày Sinh</h2>
              <span v-if="user.ngaysinh" class="dash__text">{{ user.ngaysinh }}</span>
              <span v-else class="dash__text">Chưa cập nhật</span>
            </div>
            <div class="col-lg-4 u-s-m-b-30">
              <h2 class="dash__h2 u-s-m-b-8">Giới Tính</h2>
              <span v-if="user.gioitinh" class="dash__text">{{ user.gioitinh }}</span>
              <span v-else class="dash__text">Chưa cập nhật</span>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <button
                class="btn btn--e-brand-b-2"
                @click.prevent="$router.push('/dashboard-account/editprofile')"
              >
                Sửa Thông Tin
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
export default {
  name: "MyProfile",
  mixins: [componentmixin],
  data: () => ({
    user: {},
  }),
  mounted() {
    var user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      this.user = user;
    }
  },
};
</script>

<style lang="scss" scoped>
/deep/.btn--e-brand-b-2 {
  border: 1px solid #ff4500;
  font-weight: bold;
  border-radius: 2px;
  padding: 11px 14px;
  &:hover {
    background-color: #ffffff;
    color: #ff4500;
    transition: 0.2s;
  }
}
</style>