<template>
  <h1>Countries</h1>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const countries = ref([])

async function getCountries() {
  const { data, error } = await supabase.from('countries').select()
  if (error) {
    console.error('Error fetching countries:', error)
    return
  }
  countries.value = data
}

onMounted(getCountries)
</script>

<style>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow;
}
</style>
