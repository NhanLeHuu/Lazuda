<template>
  <fragment>
    <!--====== Section 3 ======-->
    <div class="feature">
      <!--====== Section Intro ======-->
      <div class="section__intro">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__text-wrap">
                <h1 class="section__heading u-c-secondary u-s-m-b-12">
                  {{ $t('feature.location') }}
                </h1>
              </div>
              <el-divider></el-divider>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Intro ======-->
      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 u-s-m-b-30 info-final">
              <div class="service u-h-100">
                <div class="service__icon">
                  <!-- <i class="fas fa-shipping-fast"></i> -->
                  <img @click.prevent="onManga" src="@/assets/logo/manga.png" />
                </div>
                <div class="service__info-wrap">
                  <span class="service__info-text-1">{{ $t('feature.manga') }}</span>

                  <span class="service__info-text-2"
                    >{{ $t('feature.contentmanga') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 u-s-m-b-30 info-final">
              <div class="service u-h-100">
                <div class="service__icon">
                  <!-- <i class="fas fa-shipping-fast"></i> -->
                  <img @click.prevent="onPhim" src="@/assets/logo/film.png" />
                </div>
                <div class="service__info-wrap">
                  <span class="service__info-text-1">{{ $t('feature.phim') }}</span>

                  <span class="service__info-text-2"
                    >{{ $t('feature.contentphim') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Content ======-->
    </div>
    <!--====== End - Section 3 ======-->
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
// import getApi from "@/api/getApi";
// import Convert from "@/ultities/convert";

export default {
  name: "Feature",
  components: { Fragment },
  props: {},
  watch: {},
  data: () => ({}),
  methods: {
    onManga() {
      this.$router.push("/comichome");
    },
    onPhim() {
      this.$router.push("/phim");
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .lower-footer__payment {
  margin-left: 10px;
}
/deep/ .lower-footer__content {
  justify-content: flex-start;
}
.outer-footer {
  background-color: rgba(46, 49, 49, 1);
}
.lower-footer {
  background-color: rgba(46, 49, 49, 1);
}
.config {
  text-align: center;
  margin-top: -45px;
  margin-bottom: -39px;
  .img-logo {
    width: 60%;
  }
}
.bank-arr {
  margin-left: 183px;
}
.bank {
  width: 220px;
  .bank-payment {
    background-color: white;
    margin-bottom: 10px;
    text-align: center;
    padding: 22px 0;
    img {
      height: 44px;
      vertical-align: middle;
    }
  }
}
/deep/ .info-final {
  padding: 0;
}
/deep/ .service.u-h-100 {
  display: flex;
  flex-direction: column;
  & > div > img {
    cursor: pointer;
  }
  &:hover {
    & > div > img {
      transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateY(-15px) scale(1.2);
    }
  }
}
/deep/ .service__icon {
  margin-right: unset;
  text-align: center;
  img {
    width: 67%;
  }
}
/deep/ .service__info-text-1 {
  text-align: center;
}
.feature {
  margin-top: 40px;
}
/deep/ .section__text-wrap {
  text-align: left;
  margin-bottom: -24px;
}
/deep/ .service {
  margin: 0 6px;
}
</style>
