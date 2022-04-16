<template>
  <fragment>
    <div class="col-lg-9 col-md-12">
      <div
        class="
          dash__box dash__box--shadow dash__box--radius dash__box--bg-white
          u-s-m-b-30
        "
      >
        <div class="dash__pad-2">
          <h1 class="dash__h1 u-s-m-b-14">Tổng Quan Tài Khoản</h1>

          <span class="dash__text u-s-m-b-30"
            >Từ Trang tổng quan tài khoản của tôi, bạn có thể có cai nhìn tổng
            quan về hoạt động tài khoản gần đây và cập nhật thông tin tài khoản
            của mình. Chọn một liên kết bên dưới để xem hoặc chỉnh sửa thông
            tin.</span
          >
          <div class="row">
            <div class="col-lg-4 u-s-m-b-30">
              <div
                class="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100"
              >
                <div class="dash__pad-3">
                  <h2 class="dash__h2 u-s-m-b-8">Thông Tin Của Bạn</h2>
                  <div class="dash__link dash__link--secondary u-s-m-b-8"></div>

                  <span class="dash__text"
                    >họ tên: {{ user.ho + " " + user.ten }}</span
                  >
                  <span v-if="user.ngaysinh" class="dash__text"
                    >Ngày Sinh: {{ user.ngaysinh }}</span
                  >
                  <span v-else class="dash__text"
                    >Ngày Sinh: Chưa cập nhật</span
                  >
                  <span class="dash__text">Email: {{ user.email }}</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 u-s-m-b-30">
              <div
                class="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100"
              >
                <div class="dash__pad-3">
                  <h2 class="dash__h2 u-s-m-b-8">Địa Chỉ Giao Hàng Mặc Định</h2>
                  <span v-if="user.sdt" class="dash__text"
                    >Sđt: {{ user.sdt }}</span
                  >
                  <span v-else class="dash__text">Sđt: Chưa cập nhật</span>
                  <span v-if="mainaddress.sonha" class="dash__text"
                    >Địa chỉ:
                    {{
                      mainaddress.sonha +
                      ",Đường " +
                      mainaddress.tenduong +
                      ",Phường " +
                      mainaddress.phuongxa +
                      ",Quận " +
                      mainaddress.quanhuyen +
                      ",Thành Phố " +
                      mainaddress.tinhthanhpho
                    }}</span
                  >
                  <span v-else class="dash__text">Địa chỉ: Chưa cập nhật</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 u-s-m-b-30">
              <div
                class="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100"
              >
                <div class="dash__pad-3">
                  <h2 class="dash__h2 u-s-m-b-8">Số Đơn Đang Đặt Hàng</h2>
                  <span v-if="sodondadat != undefined" class="dash__text"
                    >Số Đơn : {{ sodondadat.ganday }}</span
                  >
                  <span v-else class="dash__text">Không có đơn đặt hàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          dash__box dash__box--shadow dash__box--bg-white dash__box--radius
        "
      >
        <h2 class="dash__h2 u-s-p-xy-20">Đơn Đặt Gần Đây</h2>
        <div class="dash__table-wrap gl-scroll">
          <table class="dash__table">
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Người nhận</th>
                <th>Được đăt vào</th>
                <th>Phí giao hàng</th>
                <th>Số lượng đặt</th>
                <th>Tổng cộng</th>
              </tr>
            </thead>
            <tbody class="ordergrid">
              <template v-if="sodondadat.ordered.length > 0">
                <tr v-for="(item, index) in sodondadat.ordered" :key="index">
                  <td>{{ item.madonhang }}</td>
                  <td>{{ user.ho + " " + user.ten }}</td>
                  <td>{{ item.ngaydathang }}</td>
                  <td>{{ item.phigiaohang }}</td>
                  <td>{{ item.soluong }}</td>
                  <td>{{ item.tongcong }}</td>
                </tr>
              </template>
              <p v-else>Chưa có đơn đặt hàng</p>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </fragment>
</template>
  
<script>
import componentmixin from "@/components/mixin/componentmixin";
import getApi from "@/api/getApi";
import Convert from "@/ultities/convert";
import * as $ from "jquery";

export default {
  name: "Summary",
  mixins: [componentmixin],
  data: () => ({
    user: {},
    myaddress: [],
    mainaddress: {},
    sodonorder: undefined,
    sodondadat: {
      ganday: null,
      ordered: [],
    },
  }),
  mounted() {
    var user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      this.user = user;
    }
    var body = {
      id: user.id,
    };
    getApi("/getaddress", body, (result) => {
      if (result.status == 200) {
        this.myaddress = Convert.convertStringToBoolean(result.data);
        this.myaddress.forEach((i) => {
          if (i.macdinh) {
            this.mainaddress = i;
          }
        });
        localStorage.setItem("diachi", JSON.stringify(this.myaddress));
      }
    });
    this.rmZoom();
    getApi("/getsodondathang", { iduser: this.user.id }, (result) => {
      if (result.status == 200) {
        this.sodonorder = result.data.length;
        this.sodondadat.ordered = result.data;
        this.sodondadat.ganday = 0;
        this.$ordered = {
          dadat: this.sodondadat.ordered.length,
          dahuy: 0,
        };
        result.data.forEach((e) => {
          if (e.trangthaigiaohang !== "Đã giao hàng") {
            this.sodondadat.ganday++;
          }
        });
        localStorage.setItem(
          "ordered",
          JSON.stringify(this.sodondadat.ordered)
        );

        getApi("/getsodonhuyhang", { iduser: this.user.id }, (result) => {
          console.log(result);
          if (result.status == 200) {
            this.$ordered = {
              dadat: this.sodondadat.ordered.length,
              dahuy: result.data.length,
            };
          }
        });

      }
    });
  },
  methods: {
    rmZoom() {
      $(".zoomContainer").remove();
    },
  },
};
</script>

<style lang="scss" scoped>
.dash__table-wrap {
  height: 411px;
}
/deep/ .dash__pad-3 {
  padding: 20px;
}
/deep/ .dash__box--radius {
  border-radius: unset;
}
.ordergrid {
  p {
    display: inline-block;
    transform: translateX(246%);
  }
}
</style>