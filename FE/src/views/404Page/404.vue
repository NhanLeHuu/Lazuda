<template>
  <fragment>
    <Header />
    <!--====== App Content ======-->
    <div class="app-content">
      <!--====== Section 1 ======-->
      <div class="u-s-p-y-60">
        <!--====== Section Content ======-->
        <div class="section__content">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 u-s-m-b-30">
                <div class="empty">
                  <div class="empty__wrap">
                    <span class="empty__big-text">404</span>

                    <span class="empty__text-1"
                      >Có vẻ như bạn đang truy cập không đúng nơi?</span
                    >

                    <a
                      class="empty__redirect-link btn--e-brand"
                      href="index.html"
                      >Home</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--====== End - Section Content ======-->
      </div>
      <!--====== End - Section 1 ======-->
    </div>
    <!--====== End - App Content ======-->
    <Footer />
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
export default {
  name: "404",
  mixins: [componentmixin],
};
</script>

<style>
</style>