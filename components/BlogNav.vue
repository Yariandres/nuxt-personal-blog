<template>
  <header>
    <NavDesktop/>
    <NavMobile/>
  </header>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { useRouter } from 'vue-router';

const router = useRouter();
const mode = useColorMode();
</script>
