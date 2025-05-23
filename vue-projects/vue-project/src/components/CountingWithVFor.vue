<template>
  <h1>Let's count to 100!</h1>
  <div v-for="i in 100">{{ i }}</div>
</template>

<script setup>
const myParentObject = { fruit: 'apple', color: 'red' }
const myChildObject = Object.create(myParentObject)
myCholdObject.vegetables = 'asparagus'
</script>
<template>
  <div v-for="prop in myChildObject">{{ prop }}</div>
</template>

<script setup>
const myObject = { fruit: 'apple', color: 'red' }
</script>
<template>
  <div v-for="(value, name, index) in myObject">{{ name }}: {{ value }}: {{ index }}</div>
</template>

<script>
const items = [
  {
    name: 'apple',
    price: 1.0,
  },
  {
    name: 'aparagus',
    price: 1.99,
  },
]
</script>
<template>
  <div v-for="item in items">{{ item.name }}: {{ item.price }}</div>
  <div v-for="listItem in list" :key="listItem.id">
    <li>{{ listItem.description }}</li>
  </div>
</template>
