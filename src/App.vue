<template>
  <div id="app">
    <tabBar></tabBar>
    <router-view />
  </div>
</template>
<script>
import tabBar from "@/components/tabBar";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    tabBar
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: calc(100% - 50px);
}
</style>
