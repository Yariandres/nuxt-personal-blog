<template>
  <h1>Welcome to my blog</h1>
  <NuxtPage />
</template>


<script setup>
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home page",
    },
  ],
});
</script>