<script>
import { reactive } from 'vue'
export default {
  setup() {
    const state = reactive({ cupsOfCoffee: 0 })
    return {
      state,
    }
  },
}
</script>

<!--Creating a Reactive Sate with the <script setup> instead.-->
<script setup>
import { reactive } from 'vue'

const state = reactive({ cupsOfCoffee: 0 })
function drinkCoffee() {
  state.cupsOfCoffee++
}
</script>
<template>
  <h1>Coffee Tracker</h1>
  <button @click="drnikCoffee">Drink Coffee</button>
  <p>You've had {{ state.cupsOfCoffee }} cups of coffee.</p>
</template>
