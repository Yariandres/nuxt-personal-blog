<template>
  <div :class="$style['menu']">
    <div :class="$style['menu-item']">
      <NuxtLink :class="$style['menu-items']" href="#">Home</NuxtLink>
      <NuxtLink :class="$style['menu-items']" href="#">Blog</NuxtLink>
      <NuxtLink :class="$style['menu-items']" href="#">Awards</NuxtLink>
      <NuxtLink :class="$style['menu-items']" href="#">Projects</NuxtLink>
      <NuxtLink :class="$style['menu-items']" href="#">Contact</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.menu {
  background-color: rgb(20, 20, 20);
  height: 100vh;
  display: flex;
  align-items: center;

  &-item, &-items {
    font-size: clamp(3rem, 8vw, 8rem);
    color: white;
    display: block;
    text-decoration: none;
    padding: clamp(.25rem, .5vw, 1rem) 0rem;
    margin-left: clamp(4rem, 20vw, 48rem);
  }
}

</style>