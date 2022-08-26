<template>
  <div>
    <ShoppingCart />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
export default {
  name: "Layout",
  components: {
    Footer,
    ShoppingCart,
  },
};
</script>

<style></style>
