<template>
  <div id="app">
    <router-view :card-data="cardData" />
  </div>
</template>
<script>
import Data from "@/Storage/DATA.json";

export  default {
  data() {
    return {
      cardData: [],
    };
  },
  mounted() {
    this.getDataFromLocal();
  },
  methods: {
    // async getDataFromServer() {
    //   await axios.get("Storage/DATA.json")
    //       .then(response => {this.cardData = response.data})
    // }
    getDataFromLocal() {
      this.cardData = Data;
    },
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
