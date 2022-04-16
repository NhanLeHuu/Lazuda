<template>
  <fragment>
    <div class="col-lg-9 col-md-12">
      <div
        class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30"
      >
        <div class="dash__pad-2">
          <h1 class="dash__h1 u-s-m-b-14">Đơn hàng của tôi</h1>

          <span class="dash__text u-s-m-b-30"
            >Nơi đây bạn có thể thấy được tất cả các sản phẩm bạn đã đặt và được
            giao thành công</span
          >
          <div class="m-order__list">
            <!-- V-FOR -->
            <div
              v-for="(item, index) in allorder"
              :key="index"
              class="m-order__get"
            >
              <div class="manage-o__header u-s-m-b-30">
                <div class="dash-l-r">
                  <div>
                    <div class="manage-o__text-2 u-c-secondary">
                      Mã Đơn Hàng : {{ item.madonhang }}
                    </div>
                    <div class="manage-o__text u-c-silver">
                      Đặt Vào Ngày {{ item.ngaydathang }}
                    </div>
                  </div>
                  <div>
                    <div class="dash__link dash__link--brand">
                      <a @click.prevent="tovanchuyen(item)"
                        >Xem Tình Trạng Đơn</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="manage-o__description">
                <div class="description__container">
                  <div class="description__img-wrap">
                    <img
                      class="u-img-fluid"
                      :src="item.dondathang.galley[0]"
                      alt=""
                    />
                  </div>
                  <div class="description-title">
                    <a :href="'/detail_' + item.id + item.typemenu">{{
                      item.dondathang.name
                    }}</a>
                    <p>Giá {{ item.dondathang.price }} đ</p>
                  </div>
                </div>
                <div class="description__info-wrap">
                  <div>
                    <span class="manage-o__badge badge--processing"><i class="fas fa-check-circle"></i>  {{
                      item.trangthaigiaohang
                    }}</span>
                  </div>
                  <div>
                    <span @click.prevent="onTraHang(item)" v-if="item.trangthaigiaohang === 'Đã giao hàng' && item.trahang !== 'true' " class="manage-o__badge badge--delivered"><i class="far fa-times-circle"></i> Yêu cầu trả hàng</span>
                  </div>
                  <div>
                    <span v-if="item.trahang === 'true'" class="manage-o__badge badge--shipped"><i class="fas fa-history"></i>  Đã yêu cầu trả hàng</span>
                  </div>
                  <div>
                    <span class="manage-o__text-2 u-c-silver"
                      >Số Lượng Đặt:

                      <span class="manage-o__text-2 u-c-secondary">{{
                        item.soluong
                      }}</span></span
                    >
                  </div>
                  <div>
                    <span class="manage-o__text-2 u-c-silver"
                      >Tổng Cộng:

                      <span class="manage-o__text-2 u-c-secondary"
                        >{{ item.tongcong }} đ</span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- V-FOR -->
          </div>
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
  name: "MyOrder",
  mixins: [componentmixin],
  data: () => ({
    user: {},
    allorder: [],
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
    resetProduct (item) {
      this.allorder.forEach(e=>{
        if (e.id == item.id) {
          e.trahang = 'true'
        }
      })
    },
    onTraHang (item) {
      this.$confirm("Bạn có muốn trả lại sản phẩm này ?").then(_=>{
        var body = {
          iduser: this.user.id,
          madonhang: item.madonhang,
          idsanpham: item.idsanpham,
          typemenu: item.typemenu,
          trangthai: "yêu cầu trả hàng",
          idtrangthaigiaohang: item.id,
          ngaygio: new Date().toLocaleString()
        }
        
        getApi("/yeucautrahang",body,(result)=>{
          if (result.status == 200) {
            this.$notify({
              title: "Thông Tin Đến Bạn",
              dangerouslyUseHTMLString: true,
              message: `<strong>Đã bắt đầu yêu trả hàng đơn hàng ${item.madonhang}</strong>
                <style>
                .el-notification__icon {margin-top: 0px;}
                .el-notification__group {margin-top: -13px;}
                .el-notification__group h2 {font-size: 12px;}
                .el-notification__group .el-notification__content {margin-top: -8px;}
                </style>
              `,
              duration: 2000,
              type: "success",
            });
            this.resetProduct(item);
          }
        })
      })
    },
    convertImg(result) {
      for (var i = 0; i < result.length; i++) {
        result[i].dondathang = Convert.srcImage(result[i].dondathang);
      }
      this.allorder = result;
    },
    tovanchuyen(item) {
      let path = "/dashboard-account/managerorder_" + item.madonhang;
      localStorage.setItem("vanchuyen", JSON.stringify(item));
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/.description__img-wrap {
  border-radius: unset;
  & img {
    border-radius: unset;
  }
}
/deep/ .description-title {
  margin-top: -31px;
  width: 450px;
  a {
    color: black;
    transition: 0.2s;
    &:hover {
      color: #ff4500;
    }
  }
}
/deep/ .description__info-wrap {
  text-align: right;
}
/deep/ .manage-o__badge {
  width: auto;
}
/deep/ .m-order__get {
  padding: 0;
  .manage-o__header {
    padding: 24px;
    background-color: #f4f4f6;
  }
  .manage-o__description {
    padding: 24px;
  }
}
/deep/ .manage-o__text-2 {
  color: black;
}
/deep/ .badge--delivered {
  margin-top: 2px;
  &:hover {
    cursor: pointer;
  }
}
/deep/ .badge--shipped {
  margin-top: 2px;
}
</style>