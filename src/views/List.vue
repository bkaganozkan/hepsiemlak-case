<template>
  <container fluid>
    <b-row class="d-flex">
      <b-col cols="12">Uzun bir yazı 1</b-col>
      <b-col>Uzun bir yazı 2</b-col>
      <b-col>Uzun bir yazı 3</b-col>
    </b-row>
    <b-row>
      <b-col cols="12">Uzun bir yazı 1</b-col>
      <b-col>Uzun bir yazı 2</b-col>
      <b-col>Uzun bir yazı 3</b-col>
    </b-row>
    <b-button>I am a Button</b-button>
  </container>
</template>
<script>
// import ProductItem from "@/components/Product.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "List",
  components: {
    // ProductItem,
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

<style></style>
