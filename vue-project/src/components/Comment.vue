<template>
  <h1>Comments</h1>
  <div v-if="commentsLoading">Loading comments...</div>
  <div v-else-if="comments.length === 0">No comments yet.</div>
  <ul v-else>
    <li v-for="comment in comments" :key="comment.id">
      <strong>{{ comment.name }}</strong>: {{ comment.comment }}
    </li>
  </ul>
  <div v-if="error">{{ error }}</div>  </template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient'; // Make sure path is correct

const comments = ref([]);
const commentsLoading = ref(true); // Add loading state
const error = ref(null);         // Add error handling

async function getComments() {
  commentsLoading.value = true; // Set loading to true before fetching
  error.value = null;         // Clear any previous errors

  try {
    const { data, error: supabaseError } = await supabase.from('comments').select();

    if (supabaseError) {
      console.error("Error fetching comments:", supabaseError);
      error.value = "Error loading comments. Please try again later."; // Set error message
    } else {
      comments.value = data || []; // Handle potential null data
    }
  } catch (err) {
    console.error("An unexpected error occurred:", err);
    error.value = "An unexpected error occurred. Please try again later."; // Set error message
  } finally {
    commentsLoading.value = false; // Set loading to false after fetch, regardless of success/failure
  }
}

onMounted(() => {
  getComments();
});
</script>

<style>
/* Your CSS styles here */
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow;
}

ul { /* Style the list */
  list-style-type: none; /* Remove bullet points */
  padding: 0;
}

li {
  margin-bottom: 10px; /* Add spacing between comments */
}
</style>