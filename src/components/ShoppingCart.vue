<template>
  <v-dialog
    @click:outside="mutateDialog(false)"
    v-model="shopDialog.showDialog"
    max-width="500"
  >
    <v-card @click="mutateDialog(false)" v-if="shopDialog.shopSuccess">
      <v-card-title class="d-flex justify-center text-h5">
        Successfully Completed !
      </v-card-title>
      <v-card-text>
        <v-col> <v-icon x-large color="green">mdi-check-circle</v-icon></v-col>
      </v-card-text>
    </v-card>

    <v-card v-else>
      <v-card-title
        class="d-flex justify-center align-center text-red fw-bolder"
        >Out of Stock
        <v-icon color="red">mdi-exclamation-thick</v-icon></v-card-title
      >
      <v-col cols="12">
        <p class="f-16 fw-bolder">
          Following items are out of stocks, please remove them from the cart;
        </p>
      </v-col>
      <v-card-text>
        <v-container>
          <ShopCard
            v-for="product in outStock"
            :key="product.item.id"
            :item="product.item"
          />
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ShopCard from "./ShopCartItem.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ShoppingCart",
  components: {
    ShopCard,
  },
  computed: {
    ...mapGetters({ outStock: "getOutStock", shopDialog: "getShowDialog" }),
  },
  methods: {
    ...mapMutations(["mutateDialog"]),
  },
};
</script>

<style></style>
