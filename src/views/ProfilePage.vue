<template>
<div class="profile-page">
  <button @click="goBackToCards">Go Back To Cards</button>
  <div class="profile-page-container">
    <div class="profile-page-avatar-block">
      <img :src="profileFromId.Avatar" alt="Фото карточки">
    </div>
    <div class="profile-page-info-block">
      <h3 class="profile-name">Имя сотрудника: {{profileFromId.Name}}</h3>
      <ul class="profile-specs">
        <li>Организация: {{profileFromId.Job}}</li>
        <li>Навыки: {{profileFromId.Skills}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ProfilePage",
  props: {
    cardData: {
      type: Array,
      required: true
    }
  },
  computed: {
    profileFromId() {
      return this.cardData.find(item => item.id === this.$route.params.profileId);
    }
  },
  methods: {
    goBackToCards() {
      this.$router.push({name: 'Home'});
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-page {
  button {
    display: block;
    margin-left: 0;
    width: 150px;
    height: 50px;
    background-color: #ffffff;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.7);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.7);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.7);
    cursor: pointer;
  }
  &-container {
    display: flex;
    margin-top: 30px;
    padding-top: 40px;
    min-height: 500px;
    justify-content: center;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.7);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.7);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.7);
  }
  &-avatar-block {
    margin-right: 40px;
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
  &-info-block {
    .profile-name {
      text-align: left;
      font-size: 2rem;
    }
    .profile-specs {
      padding: 0;
      list-style: none;
      text-align: left;
      font-size: 1.2rem;
      li {
        margin-top: 10px;
      }
    }
  }
}
</style>