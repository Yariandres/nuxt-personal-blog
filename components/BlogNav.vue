<template>
  <div :class="$style['base-container']">
    <div :class="$style['header']">
      <div :class="$style['brand']">
        <NuxtLink to="/" :class="$style['link']">
          CODIGO
        </NuxtLink>
      </div>

      <nav :class="$style['nav']">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/awards">Awards</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </nav>

      <div :class="$style['flex-row']">
        <NuxtLink v-if="isConatctPage !== 'contact'" to="/contact">Start a project</NuxtLink>
        <button v-if="mode === 'light'" type="button" :class="[$style['button'], $style['mode-btn-dark']]"
          @click="mode = mode === 'dark' ? 'light' : 'dark'">
          &#x263D;
        </button>

        <button v-if="mode === 'dark'" type="button" :class="[$style['button'], $style['mode-btn-light']]"
          @click="mode = mode === 'dark' ? 'light' : 'dark'">
          &#x263C;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { useRouter } from 'vue-router';

const router = useRouter();
const mode = useColorMode();

const isConatctPage = computed(() => {
  return router.currentRoute.value.name;
});

console.log(isConatctPage.value);

</script>

<style lang="scss" module scoped>
.base-container {
  padding-inline: 4rem;
  z-index: 100;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 3.2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
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
      font-size: 1.6rem;
      font-weight: 800;

      &:visited {
        color: unset;
      }

      &:hover {
        color: var(--color-primary);
      }
    }
  }

  .brand {
    font-weight: 900;
    font-size: 1.9rem;

    .link {
      text-decoration: none;

      :visited {
        color: none;
      }
    }
  }

  .flex-row {
    display: flex;
    gap: 1.6rem;

    a {
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 800;


      &:visited {
        color: unset;
      }

      &:hover {
        color: var(--text-color-active) !important;
      }
    }
  }
}

.button {
  border: none;
  background: none;
  cursor: pointer;
}

.mode-btn-light {
  border: 2px solid white;
  color: aliceblue;
  padding-inline: 2rem;
  padding-block: .2rem;
  border-radius: 50px;
  cursor: pointer;

  // small screen
  @media screen and (max-width: 768px) {
    padding-inline: 1rem;
  }

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
  font-weight: 400;
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
