<template>
 <MainWrapper :bgColor="'#D0CBC5'">
    <section :class="$style['section']">
        <p 
          :class="$style['text']" 
          @mouseenter="icons.react = true" 
          @mouseleave="icons.react = false"
        >
          
          POWERFULL
        </p>
        <p 
          :class="$style['text']"
          @mouseenter="icons.next = true" 
          @mouseleave="icons.next = false"
        >
        TECHNOLOGIES
        </p>
        <p 
          :class="$style['text']"
          @mouseenter="icons.vue = true" 
          @mouseleave="icons.vue = false"
        >
          TO
        </p>
        <p 
          :class="$style['text']"
          @mouseenter="icons.nuxt = true" 
          @mouseleave="icons.nuxt = false"
        >
          LAUNCH
        </p>
        <p 
          :class="$style['text']" 
          @mouseenter="icons.vite = true" 
          @mouseleave="icons.vite = false">
          YOUR
        </p>
        <p 
          :class="$style['text']" 
          @mouseenter="icons.ts = true" 
          @mouseleave="icons.ts = false">
          IDEAS
        </p>

      <div :class="$style['list']">
        <div :class="$style['list__icons']">
          <ReactLogo :width="80" :height="80"  :opacity="icons.react ? 1 : 0.1"/>
          <NextLogo :width="80" :height="80" :opacity="icons.next ? 1 : 0.1"/>
          <VueLogo :width="80" :height="80" :opacity="icons.vue ? 1 : 0.1"/>
          <NuxtLogo :width="80" :height="80" :opacity="icons.nuxt ? 1 : 0.1"/>
          <ViteLogo :width="80" :height="80" :opacity="icons.vite ? 1 : 0.1"/>
          <TsLogo :width="80" :height="80" :opacity="icons.ts ? 1 : 0.1"/>
        </div>
      </div>
    </section>
  </MainWrapper>
</template>

<script setup lang="ts">
import ReactLogo from '@/assets/logos/ReactLogo.vue';
import VueLogo from '~~/assets/logos/VueLogo.vue';
import NuxtLogo from '@/assets/logos/NuxtLogo.vue';
import NextLogo from '@/assets/logos/NextLogo.vue';
import ViteLogo from '@/assets/logos/ViteLogo.vue';
import TsLogo from '@/assets/logos/TsLogo.vue';

interface Icons {
  react: boolean;
  next: boolean;
  vue: boolean;
  nuxt: boolean;
  vite: boolean;
  ts: boolean;
}

const icons = ref<Icons>({
  react: false,
  next: false,
  vue: false,
  nuxt: false,
  vite: false,
  ts: false
});

</script>

<style lang="scss" module>
.section {
  margin-inline: 13.6rem;
  padding-block: 3.8rem;
  position: relative;

  .text {
    font-size: 6rem;
    font-weight: 900;
    color: black;
    max-width: fit-content;
    
    &:hover {
      cursor: pointer;
      opacity: 0.3;
      -webkit-text-stroke: 1px black;
      transition: color, opacity 0.3s ease;
    }
  }

  .list {
    position: absolute;
    top: 4.1rem;
    right: 0;
    padding: 2.3rem;

    &__icons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>