<template>
  <header>
    <img src="~/assets/img/yari.jpeg"  alt="thum nail" height="100" width="100">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
    <div>
      <SunIcon role="button" @click="switchColorMode" v-if="mode === 'light'" :width="32" :height="32" />
      <MoonIcon role="button" @click="switchColorMode" v-if="mode === 'dark'"  :width="32" :height="32" />
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
