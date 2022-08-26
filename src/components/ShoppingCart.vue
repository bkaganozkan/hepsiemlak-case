<template>
  <v-dialog
    @click:outside="mutateDialog(false)"
    v-model="showDialog"
    max-width="500"
  >
    <v-card @click="mutateDialog(false)">
      <v-card-title class="d-flex justify-center text-h5">
        Successfully Completed !
      </v-card-title>

      <v-card-text>
        <v-col> <v-icon x-large color="green">mdi-check-circle</v-icon></v-col>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ShoppingCart",
  computed: {
    ...mapGetters({ outStock: "getOutStock", showDialog: "getShowDialog" }),
  },
  methods: {
    ...mapMutations(["mutateDialog"]),
  },
};
</script>

<style></style>
