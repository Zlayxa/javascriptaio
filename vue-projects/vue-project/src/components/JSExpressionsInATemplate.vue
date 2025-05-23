<script setup>
import { reactive } from 'vue'

const state = reactive({
  sectionTitle: 'Using JS in Templates',
  authorName: 'Chris Minnick',
})
</script>
<template>
  <h1>{{ state.sectionTitle }}</h1>
  <h3>by {{ state.authorName }}</h3>
</template>
