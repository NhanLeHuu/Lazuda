<template>
  <fragment>
    <div class="col-lg-9 col-md-12">
      <div
        class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white"
      >
        <div class="dash__pad-2">
          <h1 class="dash__h1 u-s-m-b-14">Kiểm Tra Đơn Hàng Order Của Bạn</h1>

          <span class="dash__text u-s-m-b-30"
            >Để theo dõi đơn hàng, vui lòng nhập ID đơn hàng của bạn vào ô bên
            dưới và nhấn nút "Theo dõi". Điều này đã được trao cho bạn trên biên
            nhận của bạn và trong email xác nhận mà bạn đáng lẽ đã nhận được.
          </span>
          <form class="dash-track-order">
            <div class="gl-inline">
              <div class="u-s-m-b-30">
                <label class="gl-label" for="order-id">Mã Đơn Hàng</label>

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  id="order-id"
                  placeholder="Nhập mã đơn hàng"
                  v-model="madonhang"
                />
              </div>
            </div>

            <button class="btn btn--e-brand-b-2" @click.prevent="onSubscribe">
              Theo Dõi
            </button>
          </form>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
import Convert from "@/ultities/convert";
import getApi from "@/api/getApi";

export default {
  name: "TrackOrder",
  mixins: [componentmixin],
  data: () => ({
    user: {},
    allorder: [],
    madonhang: "",
  }),
  mounted() {
    var user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      this.user = user;
    }
    var body = {
      iduser: user.id,
    };
    getApi("/getOrderStatus", body, (result) => {
      if (result.status === 200) {
        this.convertImg(result.data);
      }
    });
  },
  methods: {
    convertImg(result) {
      for (var i = 0; i < result.length; i++) {
        result[i].dondathang = Convert.srcImage(result[i].dondathang);
      }
      this.allorder = result;
    },
    onSubscribe() {
      new Promise((a, b) => {
        this.allorder.forEach((e, index) => {
          if (this.madonhang == e.madonhang) {
            a(e);
          }
          if (index + 1 == this.allorder.length) {
            b(false);
          }
        });
      })
        .then((data) => {
          let path = "/dashboard-account/managerorder_" + data.madonhang;
          localStorage.setItem("vanchuyen", JSON.stringify(data));
          this.$router.push(path);
        })
        .catch((error) => {
          if (!error) {
            this.$notify({
              title: "Thông Tin Đến Bạn",
              dangerouslyUseHTMLString: true,
              message: `<strong>Không tìm thấy đơn hàng</strong>
              <style>
              .el-notification__icon {margin-top: 0px;}
              .el-notification__group {margin-top: -13px;}
              .el-notification__group h2 {font-size: 12px;}
              .el-notification__group .el-notification__content {margin-top: -8px;}
              </style>
            `,
              duration: 600,
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
</style>