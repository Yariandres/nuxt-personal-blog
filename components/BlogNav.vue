<template>
  <header :class="$style['header']">
    <img src="~/assets/img/yari.jpeg" alt="thum nail" height="100" width="100" />
    <nav :class="$style['nav']">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/awards">Awards</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
    <div>
      <SunIcon @click="switchColorMode" v-if="mode === 'light'" :width="32" :height="32" />
      <MoonIcon @click="switchColorMode" v-if="mode === 'dark'" :width="32" :height="32" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
const mode = useColorMode();

const switchColorMode = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
};
</script>

<style lang="scss" module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    border: 1px solid red;
    display: flex;
    gap: 1.6rem;
    padding-inline: 3.5rem;

    a {
      text-decoration: none;
      font-size: 1.4rem !important;

      &:visited {
        color: unset;
      }

      &:hover {
        color: var(--color-primary);
      }
    }
  }
}
</style>
