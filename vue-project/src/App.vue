<template>
  <h1>Food</h1>
  <personal-profile /> <br />
  <food-item /> <br />
  <food-item2 /> <br />
  <food-item /> <br />
  <food-item2 /> <br />
  <country /> <br />
  <comment-form /> <br />  <comment />
</template>

<script>
import PersonalProfile from './components/PersonalProfile.vue'; // Adjust path
import FoodItem from './components/FoodItem.vue'; // Adjust path
import FoodItem2 from './components/FoodItem2.vue'; // Adjust path
import Country from './components/Country.vue'; // Adjust path
import CommentForm from './components/CommentForm.vue'; // Adjust path
import Comment from './components/Comment.vue'; // Adjust path

export default {
  components: {
    PersonalProfile,
    FoodItem,
    FoodItem2,
    Country,
    CommentForm,
    Comment
  },
  // ... any other options for App.vue
};
</script>

<style>
/* Your App.vue styles */
</style>