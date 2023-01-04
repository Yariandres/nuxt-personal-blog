<template>
  <NavMenu/>
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