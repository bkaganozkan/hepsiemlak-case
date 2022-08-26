<template>
  <v-app-bar class="bg-silver d-flex flex-column justify-center" dense fixed>
    <div>
      <v-icon class="text-orange" x-large>mdi-basket</v-icon>
    </div>
    <v-app-bar-title>
      <router-link to="/" class="text-orange fw-bolder text-decoration-none">
        Burak E-Commerce App</router-link
      >
    </v-app-bar-title>
    <router-link class="text-decoration-none" to="checkout">
      <v-icon color="orange">mdi-cart-outline</v-icon>
      <v-icon v-if="Object.keys(cartItems).length" color="orange"
        >mdi-numeric-{{ Object.keys(cartItems).length }}-circle</v-icon
      >
    </router-link>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      cartItems: "getCart",
    }),
  },
};
</script>

<style lang="scss">
.v-toolbar__content {
  display: flex !important;
  justify-content: space-between;
}
</style>
