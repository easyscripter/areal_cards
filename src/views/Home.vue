<template>
  <div class="Home">
    <easy-finder placeholder-text="Найти сотрудника" v-model="findName" :show-button="true"></easy-finder>
    <div class="cards-container">
      <Card v-for="(card, index) in findingUsers" :key="index" :cardData="card"></Card>
    </div>
    <div class="pages">
      <ul><li :class="{page_selected: page === pageNumber}" v-for="page in pages" :key="page" @click="pageClick(page)">{{page}}</li></ul>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import EasyFinder from "@/components/EasyFinder";

export default {
  name: "Home",
  components: {
    Card: Card,
    EasyFinder: EasyFinder
  },
  props: {
    cardData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      cardsPerPage: 12,
      pageNumber: 1,
      findName: ''
    };
  },
  computed: {
    pages() {
      return Math.floor(this.cardData.length / this.cardsPerPage);
    },
    paginatedCards() {
      let from = (this.pageNumber - 1) * this.cardsPerPage;
      let to = from + this.cardsPerPage;

      return this.cardData.slice(from, to);
    },
    findingUsers() {
      if (!this.findName.length) {
        return this.paginatedCards;
      }

      return this.cardData.filter(user => {
        if (user.Name.toLowerCase().includes(this.findName.toLowerCase().trim()))
          return user;
      });
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    }
  }
};
</script>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
}
.pages {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  ul {
    display: flex;
    list-style: none;
    color: #ffffff;
    li {
      margin-right: 3px;
      padding: 10px;
      background-color: #222831;
      cursor: pointer;
      transition: box-shadow 0.4s ease-in-out;
      &:hover {
        -webkit-box-shadow: 2px 2px 3px 0px rgba(235, 25, 110, 1);
        -moz-box-shadow: 2px 2px 3px 0px rgba(235, 25, 110, 1);
        box-shadow: 2px 2px 3px 0px rgba(235, 25, 110, 1);
      }

    }
  }
  .page_selected {
    cursor: pointer;
    color: #ffffff;
    -webkit-box-shadow: 2px 2px 3px 0px rgba(235, 25, 110, 1);
    -moz-box-shadow: 2px 2px 3px 0px rgba(235, 25, 110, 1);
    box-shadow: 2px 2px 3px 0px rgba(235, 25, 110, 1);
  }
}
</style>