<template>
  <!-- SIDEBAR -->
  <div class="elisc_tm_sidebar">
    <div class="sidebar_inner">
      <div class="author">
        <div class="image">
          <img src="img/thumbs/1-1.jpg" alt="" />
          <div class="main" data-img-url="img/about/1.jpg"></div>
        </div>
        <div class="name">
          <h3><span>Yari Herrera<span class="back">Yari Herrera</span></span></h3>
        </div>
      </div>

      <div class="menu scrollable">
        <ul class="transition_link">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>

      <BlogFooter />
    </div>
  </div>
  <!-- /SIDEBAR -->
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { useRouter } from 'vue-router';

const router = useRouter();
const mode = useColorMode();

const isConatctPage = computed(() => {
  return router.currentRoute.value.name;
});
</script>
