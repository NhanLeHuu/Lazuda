<template>
  <fragment>
    <div class="col-lg-9 col-md-12">
      <div
        class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30"
      >
        <div class="dash__pad-2">
          <div class="dash__address-header">
            <h1 class="dash__h1">Địa Chỉ</h1>
            <div>
              <span class="dash__link dash__link--black u-s-m-r-8">
                <a @click.prevent>Thiếp lập địa chỉ giao hàng mặc định</a></span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="dash__box dash__box--shadow dash__box--bg-white dash__box--radius u-s-m-b-30"
      >
        <div class="dash__table-2-wrap gl-scroll">
          <table class="dash__table-2">
            <thead>
              <tr>
                <th>Thao Tác</th>
                <th>Họ và Tên</th>
                <th>Số Điện Thoại</th>
                <th>Địa Chỉ</th>
                <th>Thành Phố</th>
                <th>Địa thường dùng</th>
                <th>Trạng Thái</th>
                <th>Chỉnh Mặc Định</th>
              </tr>
            </thead>
            <tbody>
              <p class="textdathang" v-if="myaddress.length == 0">
                Chưa cập nhật địa chỉ giao hàng
              </p>
              <tr v-for="(item, index) in myaddress" :key="index">
                <td>
                  <el-button
                    type="primary"
                    @click.prevent="onEditAddress(item)"
                    ><i class="fas fa-wrench"></i> Chỉnh Sửa</el-button
                  >
                </td>
                <td>{{ user.ho + " " + user.ten }}</td>
                <td>{{ user.sdt }}</td>
                <td>
                  {{
                    item.sonha +
                    "," +
                    item.tenduong +
                    "," +
                    item.phuongxa +
                    "," +
                    item.quanhuyen
                  }}
                </td>
                <td>{{ item.tinhthanhpho }}</td>
                <td>
                  <el-button
                    v-if="item.diachithuongdung == 'NHÀ RIÊNG'"
                    type="primary"
                    @click.prevent
                    ><i class="fas fa-house-user"></i> NHÀ RIÊNG</el-button
                  >
                  <el-button v-else type="primary" @click.prevent
                    ><i class="far fa-building"></i> VĂN PHÒNG</el-button
                  >
                </td>
                <td>
                  <div v-loading="loading" v-if="item.macdinh" class="gl-text">
                    Địa chỉ giao hàng mặc định
                  </div>
                </td>
                <td>
                  <el-button
                    type="primary"
                    class="default-set"
                    @click.prevent="onSetDefault(item)"
                    ><i class="fas fa-truck"></i> Sửa Mặc Định</el-button
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <button
          class="btn btn--e-brand-b-2"
          @click.prevent="$router.push('/dashboard-account/addaddress')"
        >
          Thêm địa chỉ
        </button>
      </div>
    </div>
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import getApi from "@/api/getApi";
import Convert from "@/ultities/convert";

export default {
  name: "MyAddress",
  mixins: [componentmixin],
  data: () => ({
    user: {},
    myaddress: [],
    loading: false,
  }),
  mounted() {
    var user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      this.user = user;
      var body = {
        id: user.id,
      };
      getApi("/getaddress", body, (result) => {
        if (result.status == 200) {
          this.myaddress = Convert.convertStringToBoolean(result.data);
        }
      });
    }
  },
  methods: {
    onEditAddress (item) {
      localStorage.setItem('editaddress', JSON.stringify(item))
      this.$router.push('/dashboard-account/editaddress')
    },
    onSetDefault(item) {
      this.loading = true;
      this.myaddress.forEach((e) => {
        if (e.id == item.id) {
          e.macdinh = true;
        } else {
          e.macdinh = false;
        }
      });
      var body = {
        id: item.id,
        iduser: item.iduser,
      };
      getApi("/editdefaultaddress", body, (result) => {
        if (result.status == 200) {
          this.$notify({
            title: "Thông Tin Đến Bạn",
            dangerouslyUseHTMLString: true,
            message: `<strong>Đã Sửa Địa Chỉ Giao Hàng Mặc Định</strong>
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
        }
      });
      setTimeout(() => {
        this.loading = false;
      }, 300);
      this.$forceUpdate();
    },
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
/deep/ .el-button {
  padding: 20px 20px;
  color: black;
  background-color: #f4f4f6;
  border: 1px solid transparent;
}
/deep/ .default-set {
  padding: 20px 20px;
  color: black;
  background-color: #f4f4f6;
  border: 1px solid transparent;
  &:hover {
    color: #3185fc;
  }
  &:focus {
    color: white;
    background-color: #3185fc;
  }
}
/deep/ .dash__table-2 th,
.dash__table-2 td {
  min-width: 209px;
}
.textdathang {
  display: inline-block;
  transform: translateX(161%);
}
</style>