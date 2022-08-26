<template>
  <v-row class="my-1 pa-5" justify="space-between" align="center">
    <!-- Image Section -->
    <v-col cols="12" sm="4" md="5">
      <v-row class="" justify="center">
        <v-img
          contain
          aspect-ratio="1"
          max-width="350"
          max-height="350"
          :src="cartItem.item.image"
        ></v-img>
      </v-row>
      <v-row justify="center" align="center">
        <v-btn-toggle class="fw-bolder mt-6">
          <v-btn
            @click="removeFromCart(cartItem.item)"
            class="mr-2 btn-radius-50"
            x-small
            icon
          >
            <v-icon small>mdi-minus</v-icon>
          </v-btn>
          <span class="f-16">
            {{ cartItem.quantity }}
          </span>

          <v-btn
            @click="addToCart(cartItem.item)"
            class="ml-2 btn-radius-50"
            icon
            x-small
          >
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-row>
    </v-col>
    <!-- Info Section -->
    <v-col md="7" sm="8" class="pa-0 d-flex flex-row">
      <v-col cols="8">
        <v-col class="text-left align-center fw-bolder f-20">{{
          cartItem.item.name
        }}</v-col>
        <v-col class="text-left f-16">
          <div>{{ cartItem.item.price + "₺" }} x {{ cartItem.quantity }}</div>
          <div>
            {{ "Total Amount :" + to2Decimal(cartItem.totalAmount) + "₺" }} ({{
              cartItem.item.currency
            }})
          </div>
        </v-col>
      </v-col>
      <v-col class="text-right" cols="4">
        <v-btn
          @click="deleteFromCart(cartItem.item)"
          class="border-none btn-radius-75 px-2 py-4"
          outlined
          icon
          plain
          x-large
          color="red"
        >
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CheckoutItem",
  props: {
    cartItem: Object,
  },
  methods: {
    ...mapMutations(["addToCart", "removeFromCart", "deleteFromCart"]),

    to2Decimal: (value) => {
      return Math.round(value * 100) / 100;
    },
  },

  computed: {
    ...mapGetters(["totalAmountofItem"]),
  },
};
</script>

<style></style>
