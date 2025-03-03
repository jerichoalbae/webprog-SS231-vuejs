<template>
  <div>
    <h2>Leave a Comment</h2>
    <form @submit.prevent="submitComment">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required class="form-control">
      </div>
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea id="comment" v-model="comment" required class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <div v-if="submissionStatus" class="mt-2">
        {{ submissionStatus }}
      </div>
    </form>

    <div v-if="comments.length > 0" class="mt-4">
      <h3>Comments</h3>
      <div v-for="comment in comments":key="comment.id" class="comment">
        <p><strong>{{ comment.name }}</strong>: {{ comment.comment }}</p>
      </div>
    </div>
    <div v-else-if="commentsLoading">
      <p>Loading comments...</p>
    </div>
    <div v-else>
      <p>No comments yet.</p>
    </div>
  </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js'

export default {
  data() {
    return {
      name: '',
      comment: '',
      submissionStatus: null,
      supabase: null,
      supabaseUrl: 'https://supabase.com/docs/guides/getting-started/quickstarts/vue', // Your Supabase URL - DEVELOPMENT ONLY
      supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhenhoamtvdnBwb3dxdnVhYmlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTQ5ODgsImV4cCI6MjA1MzgzMDk4OH0.ETEdCfuWtOUNggWDqGQVYXRS1N1yKoU-Vwq-qEeIjHo', // Your Supabase Anon Key - DEVELOPMENT ONLY
      tableName: 'comments',
      comments:,
      commentsLoading: true
    }
  },
  mounted