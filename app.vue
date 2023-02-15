<template>
  <div class="container">
    <NavMenu/>
    <NuxtPage />
  </div>
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
  link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Coda:wght@400;800&display=swap'
      }
    ]
});
</script>
<style lang="scss">
@import url(./theme/index.css);
</style>
