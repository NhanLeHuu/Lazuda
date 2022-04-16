<template>
  <fragment>
    <div class="section__intro u-s-m-b-46">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="block">
              <span class="block__title">{{ $t('industry.name') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="owl-carousel tab-slider as1" data-item="5">
            <div v-for="index in 20" :key="index" class="u-s-m-b-30">
              <el-col class="card">
                <el-card shadow="hover">
                  <div class="card_item">
                    <div class="card_item_menu">
                      <img
                        src="@/assets/product/men/product1.jpg"
                        style="width: 180px"
                        alt="img"
                      />
                      <span>Điện Thoại</span>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </div>
          </div>
          <div class="owl-carousel tab-slider as2" data-item="5">
            <div v-for="(item, index) in 20" :key="index" class="u-s-m-b-30">
              <el-col class="card">
                <el-card shadow="hover">
                  <div class="card_item">
                    <div class="card_item_menu">
                      <img
                        src="@/assets/product/men/product1.jpg"
                        style="width: 180px"
                        alt="img"
                      />
                      <span>Điện Thoại</span>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import getApi from "@/api/getApi";
import Convert from "@/ultities/convert";
import * as $ from "jquery";

export default {
  components: { Fragment },
  watch: {
    $load: {
      deep: true,
      handler(val) {
        if (val) {
          setTimeout(() => {
            this.assignToElement();
          }, 100);
        }
      },
    }
  },
  data: () => ({
    industry: {
      temp1: [],
      temp2: [],
    },
    subdata: []
  }),
  beforeCreate() {
    getApi("/getIndustry", {}, (result) => {
      if (result.status === 200) {
        var data = result.data;
        this.subdata = data;
        for (let i = 0; i < data.length; i++) {
          data[i].logo = "assets/product/" + data[i].logo;
        }
        this.industry = this.phanloai(result.data);
      }
    });
  },
  methods: {
    assignToElement() {
      var as1 = $(".as1");
      var as2 = $(".as2");
      var itemas1 = $(as1).find(".owl-item");
      var itemas2 = $(as2).find(".owl-item");

      for (let i = 0; i < itemas1.length; i++) {
        let img = $(itemas1[i]).find("img")[0];
        let text = $(itemas1[i]).find("span")[0];
        let card = $(itemas1[i]).find(".card_item_menu")[0];
        if (!this.industry.temp1[i]) {
          $(itemas1[i]).remove();
        } else {
          $(img).attr("src", this.industry.temp1[i]["logo"]);
          $(text).text(this.industry.temp1[i]["category"]);
          $(card).click((e) =>{
            var ele = $(e.currentTarget).find('span').text()
            var table = this.getTable(ele)
            localStorage.setItem("industry", JSON.stringify(table.typemenu))
            this.$router.push("search")
          })
        }
      }

      for (let i = 0; i < itemas2.length; i++) {
        let img = $(itemas2[i]).find("img")[0];
        let text = $(itemas2[i]).find("span")[0];
        let card = $(itemas2[i]).find(".card_item_menu")[0];
        if (!this.industry.temp2[i]) {
          $(itemas2[i]).remove();
        } else {
          $(img).attr("src", this.industry.temp2[i]["logo"]);
          $(text).text(this.industry.temp2[i]["category"]);
          $(card).click((e) =>{
            var ele = $(e.currentTarget).find('span').text()
            var table = this.getTable(ele)
            localStorage.setItem("industry", JSON.stringify(table.typemenu))
            this.$router.push("search")
          })
        }
      }
    },
    getTable (element) {
      var table = null;
      this.subdata.forEach((e)=>{
        if (e.category == element) {
          table = e
        }
      })
      return table;
    },
    phanloai(data) {
      let industry = {
        temp1: [],
        temp2: [],
      };
      let numarr1 = parseInt(data.length / 2);
      let numarr2 = data.length - numarr1;

      let arr1 = data.slice(0, numarr1);
      let arr2 = data.slice(numarr2, data.length);
      industry.temp1 = arr1;
      industry.temp2 = arr2;
      this.$emit("IDTLoaded", true);
      return industry;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.card_item {
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  span {
    margin-top: 10px;
  }
}

/deep/ .el-card {
  z-index: 0;
  width: 223px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    z-index: 1;
  }
  .el-card__body {
    height: 280px;
    padding: 0px;
    .card_item {
      display: block;
      padding: 20px;
      height: 100%;
      position: relative;
      .card_item_menu {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          vertical-align: middle;
        }
        span {
          margin-top: 10px;
        }
      }
    }
  }
}
.top {
  margin-top: 6px;
}
/deep/ .block__title {
  font-size: 19px;
}
</style>
