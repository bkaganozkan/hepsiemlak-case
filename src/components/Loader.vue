<template>
  <v-dialog v-model="loader" persistent hide-overlay>
    <v-progress-circular
      :size="150"
      rotate="360"
      :width="8"
      color="orange"
      indeterminate
      style="overflow: hidden"
    >
      <v-progress-circular
        rotate="180"
        :size="75"
        :width="5"
        color="red"
        indeterminate
        style="overflow: hidden"
      >
        <v-progress-circular
          :size="25"
          :width="3"
          color="purple"
          indeterminate
          style="overflow: hidden"
        >
        </v-progress-circular> </v-progress-circular
    ></v-progress-circular>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Loader",
  computed: {
    ...mapGetters({
      loader: "getLoader",
    }),
  },
};
</script>

<style>
.v-dialog {
  box-shadow: none !important;
}
</style>
