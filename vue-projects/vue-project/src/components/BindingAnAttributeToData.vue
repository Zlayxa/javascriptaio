<script setup>
function superHeroDescriptionGenerator(name, superlative, type) {
  return `${name}, the ${superlative} ${type}`
}
</script>
<template>
  <mythGenerator
    v-bind:mainCharacter="superHeroDescriptionGenerator('Superman', 'Greatest', 'Hero')"
  />
</template>

<!--Below is the shorthand version of 'v-bind' which is a colon ':'-->
<script setup>
const props = defineProps(['postalCode'];)
</script>
<template>
  <storeLocator :postalCode="postalCode" />
</template>
