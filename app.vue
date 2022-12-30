<template>
  <center>
    <h1>Welcome to my blog</h1>
  </center>
  <hr />
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