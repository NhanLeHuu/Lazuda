<template>
  <fragment>
    <div class="col-lg-9 col-md-12">
      <div
        class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white"
      >
        <div class="dash__pad-2">
          <h1 class="dash__h1 u-s-m-b-14">My Payment Options</h1>

          <span class="dash__text">No payment options</span>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import componentmixin from "@/components/mixin/componentmixin";
export default {
  name: "PaymentOption",
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

<style>
</style>