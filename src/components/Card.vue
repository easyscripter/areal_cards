<template>
<div class="card" @click="goToProfile">
  <div class="card-header-container">
    <img :src="cardData.Avatar" alt="Фото профиля">
  </div>
  <div class="card-content-container">
    <h3 class="card-title">{{cardData.Name}}</h3>
  </div>
</div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToProfile() {
      this.$router.push({name: 'profilePage', params: {}})
    }
  }
};
</script>

<style lang="scss" scoped>
 .card {
   display: flex;
   flex-direction: column;
   align-items: center;
   flex: 1 1 250px;
   max-width: calc(15% - 10px);
   margin: 20px;
   background-color: #222831;
   -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.7);
   -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.7);
   box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.7);
   border-radius: 5px;
   color: #ffffff;
   cursor: pointer;
   transition: all 0.6s ease-in-out;
   &:hover {
     position: relative;
     transform: scale(1.05);
     -webkit-box-shadow: 4px 4px 8px 0px rgba(235, 25, 110, 1);
     -moz-box-shadow: 4px 4px 8px 0px rgba(235, 25, 110, 1);
     box-shadow: 4px 4px 8px 0px rgba(235, 25, 110, 1);
   }
   .card-header-container {
     width: 100%;
     img {
       max-width: 100%;
       margin-top: 20px;
       border-radius: 50%;
       border: 5px solid #272133;
       -webkit-box-shadow: 4px 4px 8px 0px rgba(235, 25, 110, 1);
       -moz-box-shadow: 4px 4px 8px 0px rgba(235, 25, 110, 1);
       box-shadow: 4px 4px 8px 0px rgba(235, 25, 110, 1);
     }
   }
   .card-content-container {
     margin-top: 10px;
   }
 }
</style>