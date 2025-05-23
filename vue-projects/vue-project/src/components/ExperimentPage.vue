<template>
  <div v-if="loggedIn">You are currently logged in.</div>
  <div v-else>Please log in to continue.</div>

  {{ loggedIn ? 'You are currently logged in.' : 'Please log in to continue.' }}

  <button v-on:click="handleClick">Submit Form</button>
  <button v-on:[eventType]="handleEvent">Do the thing.</button>
  <!--<form v-on:submit.prevent="handleFormSubmit">-->
</template>

<script>
;<WeatherChart v-memo="[localWeatherData]">...</WeatherChart>
</script>
