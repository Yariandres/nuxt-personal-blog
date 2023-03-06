<template>
  <header :class="$style['header']">
    <h2 :class="$style['brand']">CODIGO</h2>
    <nav :class="$style['nav']">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/awards">Awards</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>

    <button :class="[
      mode === 'light' ? $style['mode-btn-light'] : $style['mode-btn-dark']]"
      @click="mode = mode === 'dark' ? 'light' : 'dark'">
      <p v-if="mode === 'light'">🌙</p>
      <p v-if="mode === 'dark'">☀️</p>
    </button>
  </header>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
const mode = useColorMode();
</script>

<style lang="scss" module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block-start: 3rem;

  .brand {
    font-weight: 900;
  }

  nav {
    border: 1px solid var(--border-color-light);
    padding-block: 1rem;
    border-radius: 2rem;
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

button {
  border: none;
  background: none;
  cursor: pointer;
}

.mode-btn-light {
  border: 2px solid var(--color-gray-400);
  padding-inline: 2rem;
  padding-block: .2rem;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background: var(--bg-dark-secondary);
  }

  transition: background-color .2s ease;

  p {
    color: var(--bg-dark-secondary);
    font-size: 1.6rem;
  }
}

.mode-btn-dark {
  border: 1px solid var(--bg-dark-primary);
  padding-inline: 2rem;
  padding-block: .2rem;
  border-radius: 50px;
  background: none;
  cursor: pointer;

  &:hover {
    background: var(--bg-light-secondary);
  }

  transition: background-color .2s ease;

  p {
    color: var(--text-color-light);
    font-size: 1.6rem;
  }
}
</style>
