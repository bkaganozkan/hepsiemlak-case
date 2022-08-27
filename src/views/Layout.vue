<template>
  <div>
    <ShoppingCart />
    <Loader />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import Loader from "@/components/Loader.vue";
import { mapGetters } from "vuex";
export default {
  name: "Layout",
  components: {
    Footer,
    ShoppingCart,
    Loader,
  },
  computed: {
    ...mapGetters({
      clientSide: "getClientSide",
      loader: "getLoader",
    }),
  },
};
</script>

<style></style>
