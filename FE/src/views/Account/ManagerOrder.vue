<template>
  <fragment>
    <div class="col-lg-9 col-md-12">
      <h1 class="dash__h1 u-s-m-b-30">Xem Đơn Hàng</h1>

      <div
        class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30"
      >
        <div class="dash__pad-2">
          <div class="dash-l-r">
            <div>
              <div class="manage-o__text-2 u-c-secondary">
                Mã Đơn {{ product.madonhang }}
              </div>
              <div class="manage-o__text u-c-silver">
                Được đặt vào {{ product.ngaydathang }}
              </div>
              <div class="manage-o__text u-c-silver">
                Người nhận {{ user.ho + " " + user.ten }}
              </div>
            </div>
            <div>
              <div class="manage-o__icon">
                <i class="fas fa-truck u-s-m-r-5"></i>

                <span class="manage-o__text">Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30"
      >
        <div class="dash__pad-2">
          <div class="manage-o">
            <div class="manage-o__header u-s-m-b-30">
              <div class="manage-o__icon">
                <i class="fas fa-box u-s-m-r-5"></i>

                <span class="manage-o__text">Đơn Hàng</span>
              </div>
              <div class="manage-o__text u-c-secondary">
                <i class="fas fa-people-carry" style="font-size: 20px"></i>
                Giao hàng vào {{ product.ngaydelivery }}
              </div>
            </div>
            <!-- <div class="dash-l-r">
              <div class="manage-o__text u-c-secondary">
                Giao hàng vào {{ product.ngaydelivery }}
              </div>
            </div> -->
            <div v-if="product.dondathang" class="manage-o__description">
              <div class="description__container">
                <div class="description__img-wrap">
                  <img
                    class="u-img-fluid"
                    :src="product.dondathang.galley[0]"
                  />
                </div>
                <div class="description-title">
                  {{ product.dondathang.name }}
                </div>
              </div>
              <div class="description__info-wrap">
                <div>
                  <span class="manage-o__text-2 u-c-silver"
                    >Số lượng đặt:

                    <span class="manage-o__text-2 u-c-secondary">{{
                      product.soluong
                    }}</span></span
                  >
                </div>
                <div>
                  <span class="manage-o__text-2 u-c-silver"
                    >Tổng cộng:

                    <span class="manage-o__text-2 u-c-secondary"
                      >{{ product.tongcong }} đ</span
                    ></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="manageroder dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30"
        :style="{ height: heightWrapper }"
      >
        <h3>
          <i class="far fa-calendar-alt"></i> Lịch Trình/Cập Nhật Đơn Hàng
        </h3>
        <div
          class="express"
          v-if="vanchuyen.length > 0"
          :style="{ height: heightProgress }"
        >
          <el-steps direction="vertical" :active="indexV">
            <el-step
              v-for="(item, index) in vanchuyen"
              :key="index"
              :title="item.name"
            ></el-step>
          </el-steps>
        </div>
        <div class="empty" v-else>Sản phẩm chưa được cập nhật</div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div
            class="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30"
          >
            <div class="dash__pad-3">
              <h2 class="dash__h2 u-s-m-b-8">Địa chỉ nhà riêng</h2>
              <h2 class="dash__h2 u-s-m-b-8">
              {{ user.ho + " " + user.ten }}
              </h2>

              <span class="dash__text-2">{{
                mainaddress.sonha +
                ",Đường " +
                mainaddress.tenduong +
                ",Phường " +
                mainaddress.phuongxa +
                ",Quận " +
                mainaddress.quanhuyen +
                ",Thành Phố " +
                mainaddress.tinhthanhpho
              }}</span>

              <span class="dash__text-2">Sđt {{ user.sdt }}</span>
            </div>
          </div>
          <div
            class="dash__box dash__box--bg-white dash__box--shadow dash__box--w"
          >
            <div class="dash__pad-3">
              <h2 class="dash__h2 u-s-m-b-8">Địa chỉ văn phòng</h2>
              <h2 class="dash__h2 u-s-m-b-8">{{ user.ho + " " + user.ten }}</h2>

              <span class="dash__text-2">
                {{
                  subaddress.sonha +
                  ",Đường " +
                  subaddress.tenduong +
                  ",Phường " +
                  subaddress.phuongxa +
                  ",Quận " +
                  subaddress.quanhuyen +
                  ",Thành Phố " +
                  subaddress.tinhthanhpho
                }}
              </span>

              <span class="dash__text-2">Sđt {{ user.sdt }}</span>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="dash__box dash__box--bg-white dash__box--shadow u-h-100">
            <div class="dash__pad-3">
              <h2 class="dash__h2 u-s-m-b-8">Bảng Sơ lược</h2>
              <div class="dash-l-r u-s-m-b-8">
                <div class="manage-o__text-2 u-c-secondary">Mã đơn</div>
                <div class="manage-o__text-2 u-c-secondary">{{ product.madonhang }}</div>
              </div>
              <div class="dash-l-r u-s-m-b-8">
                <div class="manage-o__text-2 u-c-secondary">Ngày đặt</div>
                <div class="manage-o__text-2 u-c-secondary">{{ product.ngaydathang }}</div>
              </div>
              <div class="dash-l-r u-s-m-b-8">
                <div class="manage-o__text-2 u-c-secondary">Phí giao hàng</div>
                <div class="manage-o__text-2 u-c-secondary">{{ product.phigiaohang }}</div>
              </div>
              <div class="dash-l-r u-s-m-b-8">
                <div class="manage-o__text-2 u-c-secondary">Tổng cộng</div>
                <div class="manage-o__text-2 u-c-secondary">{{ product.tongcong }} đ</div>
              </div>

              <span class="dash__text-2">{{ product.tinhtrangpayment }}</span>
              <i class="fas fa-biking icon-set"></i>
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
import Convert from "@/ultities/convert";
import * as $ from "jquery";

export default {
  name: "ManagerOrder",
  mixins: [componentmixin],
  watch: {
    vanchuyen: {
      deep: true,
      handler(val) {
        setTimeout(() => {
          if (val.length > 0 && val.length == this.lengthResult) {
            this.heightProgress = "";
            this.heightWrapper = "";
            this.indexV = val.length;
            let elStep = $(".el-steps.el-steps--vertical").children();

            $(elStep[val.length - 1]).ready(() => {
              for (let i = 0; i < val.length; i++) {
                let p = $(elStep[i]).find(".el-step__main");
                p.ready(() => {
                  let pexists = $(elStep[i]).find(".content-pro");
                  let sumi =
                    this.heightProgress == ""
                      ? 0
                      : parseInt(this.heightProgress.replace("px", ""));

                  if (pexists.length == 0) {
                    $(p).append(`<p class="content-pro">${val[i].content}</p>`);
                    $(p).append(`<p class="ngaygio"><i class="fas fa-clock"></i>  ${val[i].ngaygio}</p>`);
                  }
                  this.heightProgress = sumi + 80 + "px";
                  this.heightWrapper = sumi + 180 + "px";
                  if (val[i].name === "ĐÃ GIAO HÀNG") {
                    this.dagiaohang = true;
                  }
                });
              }
            });
          }
        }, 1000);
      },
    },
    dagiaohang: {
      deep: true,
      handler(val) {
        if (val) {
          this.notifiGiaoTC();
        }
      },
    },
  },
  data: () => ({
    user: {},
    product: {},
    indexV: 0,
    heightProgress: "0px",
    heightWrapper: "120px",
    lengthResult: null,
    vanchuyen: [],
    dagiaohang: false,
    myaddress: [],
    mainaddress: {},
    subaddress: {},
  }),
  mounted() {
    this.setSubcribe();
    this.setDefault();
    this.getVanChuyen();
    this.ngaydelivery();
  },
  methods: {
    setSubcribe() {
      this.sockets.subscribe("khauvanchuyen", (data) => {
        if (data) {
          this.notification();
          this.getVanChuyen();
        }
      });
    },
    notifiGiaoTC() {
      this.$message({
        showClose: true,
        dangerouslyUseHTMLString: true,
        message: `Mã đơn hàng ${this.product.madonhang} của bạn đã giao thành công`,
        type: "success",
        duration: 5000,
      });
      this.indexV = 0;
      for (let i = 0; i < this.vanchuyen.length; i++) {
        setTimeout(() => {
          this.indexV++;
        }, 800);
      }
    },
    notification() {
      this.$notify({
        title: "Sản phẩm được cập nhật",
        dangerouslyUseHTMLString: true,
        message: `<strong>Mã đơn hàng ${this.product.madonhang} của bạn vừa được cập nhật</strong>
          <style>
          .el-notification__icon {margin-top: 0px;}
          .el-notification__group {margin-top: -13px;}
          .el-notification__group h2 {font-size: 12px;}
          .el-notification__group .el-notification__content {margin-top: -8px;}
          </style>
        `,
        duration: 5000,
        type: "success",
      });
    },
    setDefault() {
      var user = JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))
        : JSON.parse(sessionStorage.getItem("user"));
      if (user) {
        this.user = user;
      }
      var item = JSON.parse(localStorage.getItem("vanchuyen"));
      var result = JSON.parse(localStorage.getItem("diachi"));
      this.myaddress = result;
      this.myaddress.forEach((i) => {
        if (i.macdinh) {
          this.mainaddress = i;
        }
        if (!i.macdinh) {
          this.subaddress = i;
        }
      });
      this.product = item;
    },
    ngaydelivery() {
      let ngaydathang = Convert.convertToDate(this.product.ngaydathang);
      let ngaydelivery = Convert.ngayDelivery(this.product.ngaydathang);
      this.product.ngaydathang = ngaydathang;
      this.product.ngaydelivery = ngaydelivery;
    },
    getVanChuyen() {
      var body = {
        iduser: this.user.id,
        madonhang: this.product.madonhang,
      };
      getApi("/getprogress", body, (result) => {
        this.lengthResult = result.data.length;
        if (result.status === 200) {
          this.vanchuyen = [];
          this.setUp(result.data);
        }
      });
    },
    setUp(data) {
      data.forEach((e) => {
        if (e.trangthai === "Đơn hàng đã được gói") {
          this.vanchuyen.push({
            name: "HOÀN TẤT ĐÓNG GÓI",
            content:
              "Kiện hàng của bạn đã hoàn tất đóng gói và sẵn sàng bàn giao cho đơn vị vận chuyển",
            ngaygio: e.ngaygio  
          });
        } else {
          let info = {
            ketqua: e.trangthai.split(",")[0].replace("kq=", ""),
            vitri: e.trangthai.split(",")[1].replace("vt=", ""),
            donvivc: e.trangthai.split(",")[2].replace("dvvc=", ""),
          };
          let content = "";
          let ketqua = "";

          if (info.donvivc !== "Không") {
            ketqua = info.ketqua.toLowerCase();
            content =
              "Đơn vị vận chuyển " +
              info.donvivc +
              " " +
              ketqua +
              " tại " +
              info.vitri;
          } else {
            ketqua = info.ketqua.toLowerCase();
            content = "Kiện hàng của bạn " + ketqua + " tại " + info.vitri;
          }
          this.vanchuyen.push({
            name: info.ketqua.toUpperCase(),
            content: content,
            ngaygio: e.ngaygio
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .dash__pad-2 {
  border-bottom: 4px solid #f4f4f6;
}
/deep/ .description__img-wrap {
  border-radius: unset;
  img {
    border-radius: unset;
  }
}
/deep/ .manage-o__header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  .manage-o__icon {
    width: 95px;
  }
  .manage-o__text {
    margin-right: -3px;
  }
}
/deep/ .description__info-wrap {
  text-align: right;
}
/deep/ .manage-o__text-2.u-c-silver {
  white-space: nowrap;
}
/deep/ .dash__box--radius {
  border-radius: unset;
}
.manageroder {
  margin-top: -26px;
  border-radius: 17px;
  transition: height 0.15s ease-out;
  h3 {
    text-align: center;
    color: #000000;
    margin: 15px auto;
    margin-left: 32%;
    display: inline-block;
  }
}
.express {
  transition: height 0.15s ease-out;
}
.icon-set {
  font-size: 110px;
  margin: 10px 105px;
}
/deep/ .el-steps--vertical {
  padding-left: 13%;
  transition: 0.3s all ease;
  .el-step {
    transition: 0.3s all ease;
  }
}
.empty {
  text-align: center;
  height: 37px;
}
/deep/ .el-notification__icon {
  margin-top: 11px;
}
/deep/ .el-notification__group {
  h2 {
    font-size: 12px;
  }
  .el-notification__content {
    margin-top: -8px;
  }
}
</style>