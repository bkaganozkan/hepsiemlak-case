<template>
  <v-row align="center" justify="center">
    <v-col cols="5" sm="5" md="7">
      <v-img :src="item.image" max-width="250" max-height="250" />
    </v-col>
    <v-col
      cols="7"
      md="5"
      sm="7"
      class="fw-bolder f-18 d-flex align-center justify-center"
      ><span>{{ item.name }}</span>
      <v-btn icon @click="cleanCartData(item.id)">
        <v-icon color="red">mdi-trash-can-outline</v-icon></v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ShopCard",
  props: { item: Object },
  methods: {
    ...mapMutations(["cleanCartData"]),
  },
};
</script>

<style></style>
