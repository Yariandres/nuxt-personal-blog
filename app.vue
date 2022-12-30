<template>
  <h1>Welcome to my blog</h1>
  <NuxtPage />
</template>


<script setup>
useHead({
  title: "Home",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Home page",
    },
  ],
});
</script>