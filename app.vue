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
<!-- simple css reset -->
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Coda' , sans-serif;
}

.container {
  padding: 0 2.1rem;
}
</style>
