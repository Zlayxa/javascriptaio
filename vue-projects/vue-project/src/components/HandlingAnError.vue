<script setup>
import { onErrorCaptured, ref } from 'vue'
import ErrorButton from './components/ErrorButtonComponent.vue'

const error = ref('')

onErrorCaptured((e) => {
  error.value = e.message
})
function resetError() {
  error.value = ''
}
</script>

<template>
  <div v-if="error">There's been an error: {{ error }} <button @click="resetError">OK</button></div>
  <ErrorButton />
</template>

<script></script>
