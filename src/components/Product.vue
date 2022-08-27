<template>
  <v-card :key="product.id" class="pa-4" elevation="2" data-test="product">
    <v-row class="mb-4 d-flex justify-center">
      <v-img
        :src="product.image"
        alt=""
        contain
        aspect-ratio="1"
        max-width="250"
        max-height="250"
      />
    </v-row>
    <v-row class="d-flex justify-center align-items-center my-4">
      <v-col cols="12" class="fw-bolder mx-2">{{ product.name }}</v-col>

      <v-row
        class="row d-flex justify-content-between align-center"
        justify-lg="space-between"
        justify-md="space-around"
      >
        <v-col xl="5" lg="5" md="4" xs="12" class="pr-0 d-flex justify-center">
          <div class="d-flex fs-normal h-100">
            {{ product.currency + " " }}{{ product.price + " ₺" }}
          </div>
          <!-- Currency style we can add  -->
        </v-col>
        <v-col xl="7" lg="6" md="5" xs="12" class="pl-0">
          <v-btn
            data-test="addItem"
            @click="addtoCart(product)"
            small
            class="btn-orange text-dark fw-bolder"
          >
            Add Basket</v-btn
          >
        </v-col>
      </v-row>
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ProductItem",
  props: {
    product: Object,
  },

  methods: {
    ...mapMutations({
      addtoCart: "addToCart",
    }),
    addItemToCart: (product) => {
      this.addtoCart(product);
    },
  },
};
</script>

<style></style>
