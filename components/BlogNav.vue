<template>
  <div :class="$style['sidebar']">
    <LayoutMain>
      <template #navigation>
        <div>
          <div :class="$style['image']">
            <img src="~/assets/img/about/1.jpg" alt="about image" />
            <!-- <div :class="$style['main']" data-img-url="~/assets/img/about/1.jpg"></div> -->
          </div>
          <div :class="$style['name']">
            <h3>Yari Herrera</h3>
          </div>
        </div>
      </template>

      <template #main>
        <NavMenu :items="[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/ervices' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Blog', path: '/blog' },
            { name: 'Contact', path: '/contact' }
          ]" 
        />
      </template>

      <template #footer>
        <BlogFooter />
      </template>
    </LayoutMain>
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { useRouter } from 'vue-router';

const router = useRouter();
const mode = useColorMode();
</script>

<style lang="scss" module>
.sidebar {
  width: 370px;
  border-right: 1px solid rgba(85, 82, 124, .1);

  .image {
    width: 118px;

    img {
      opacity: 0;
      min-width: 100%;
    }
  }

  .name {
    font-size: 50px;
    font-family: var(--font-kristi);
    line-height: 1;
    color: rgba(19, 15, 73, 0.07);
    text-align: center;
  }
}
</style>