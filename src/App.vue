<template>
  <v-app>
    <Header />
    <v-main class="mt-14">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    Header,
  },
  mounted() {
    this.calculateClientWindow(window.innerWidth);
    window.addEventListener("resize", this.calculateMethod);
  },
  destroyed() {
    window.addEventListener("resize", this.calculateMethod);
  },
  methods: {
    ...mapMutations(["calculateClientWindow"]),

    calculateMethod() {
      this.calculateClientWindow(window.innerWidth);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
