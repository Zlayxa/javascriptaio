<template>
  <div
    style="
      width: 300px;
      border-radius: 19% 81% 30% 70% / 29% 17% 83% 71%;
      background-image: linear-gradient(to bottom right, red, yellow);
      color: white;
    "
  >
    <slot></slot>
  </div>
</template>

<template>
  <h1>
    <slot>No content was provided.</slot>
  </h1>
</template>

<template>
  <h1>
    <slot name="title">No title provided.</slot>
  </h1>
  <div>
    <slot name="body">No body provided.</slot>
  </div>
</template>

<script setup>
import BlodPostTemplate from './BlogPostTemplate.vue'
</script>
<template>
  <BlogPostTemplate>
    <template v-slot:title>10 tips for keeping your pencils sharp.</template>
    <template v-slot:body>
      <p>
        Do you have pencils that get dull after you use them? This is a more common problem than you
        might think.
      </p>
    </template>
  </BlogPostTemplate>
</template>
