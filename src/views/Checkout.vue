<template>
  <v-container class="checkout-container">
    <v-card elevation="4" class="ma-6">
      <v-card-title class="border-b-2">
        <v-row justify="start">
          <v-col
            cols="12"
            sm="5"
            :class="[clientSide === 'xs' ? 'text-left' : 'text-left']"
            class="py-1"
          >
            My cart ({{ Object.keys(cartItems).length }})
          </v-col>
          <v-col
            cols="12"
            sm="7"
            :class="[clientSide === 'xs' ? 'text-left' : 'text-right']"
            class="py-1"
          >
            Total Amount : {{ " " + totalAmount + " ₺" }}
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text
        class="px-0"
        v-for="(cartItem, index) in cartItems"
        :key="index"
      >
        <CheckoutItem class="mx-2 border-b-2" :cartItem="cartItem" />
      </v-card-text>

      <!-- Button Section -->
      <v-btn-toggle class="pa-4" v-if="clientSide !== 'xs'">
        <v-btn
          replace
          @click="routeTo('/')"
          class="mr-2 fw-bolder btn-silver btn-size"
        >
          <v-icon class="mr-1" small>mdi-arrow-left </v-icon>
          Continue Shopping
        </v-btn>
        <v-btn @click="cartCheck" class="ml-2 fw-bolder btn-orange btn-size">
          Place order<v-icon class="ml-2">mdi-cart-arrow-right</v-icon></v-btn
        >
      </v-btn-toggle>

      <!-- Button Section -->
      <v-btn-toggle class="pa-4" v-else>
        <v-btn
          replace
          @click="routeTo('/')"
          class="mr-2 fw-bolder btn-silver btn-size"
        >
          <v-icon class="mr-1">mdi-arrow-left </v-icon>
        </v-btn>
        <v-btn @click="cartCheck" class="ml-2 fw-bolder btn-orange btn-size">
          <v-icon>mdi-cart-arrow-right</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CheckoutItem from "@/components/CheckoutItem.vue";

export default {
  name: "Checkout",
  components: {
    CheckoutItem,
  },

  methods: {
    ...mapActions(["submitCart"]),
    data() {
      return {
        outStock: [],
      };
    },

    routeTo(value) {
      this.$router.push(value);
    },

    async cartCheck() {
      this.outStock = await this.submitCart();
      console.log(this.outStock);
    },
  },

  computed: {
    ...mapGetters({
      cartItems: "getCart",
      totalAmount: "totalAmountofItem",
      clientSide: "getClientSide",
    }),

    showDialog() {
      return this.outStock.length;
    },
  },
};
</script>

<style></style>
