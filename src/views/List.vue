<template>
  <v-container>
    <v-row
      class=""
      no-gutters
      dense
      justify-md="space-between"
      justify="center"
    >
      <v-col
        cols="12"
        sm="5"
        md="4"
        lg="3"
        xl="2"
        class="mx-2 my-4"
        v-for="item in products"
        :key="item.id"
      >
        <ProductItem :product="item" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// If there was a not id of product i would use index as a key

import ProductItem from "@/components/Product.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "List",
  components: {
    ProductItem,
  },
  async mounted() {
    await this.fetchStore();
  },

  methods: {
    ...mapActions(["fetchStore"]),
  },

  computed: {
    ...mapGetters({
      products: "getStore",
    }),
  },
};
</script>

<style lang="scss">
.bos-kutu {
  background: $color-white;
}
</style>
