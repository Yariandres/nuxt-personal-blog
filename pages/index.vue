<template>
 <MainWrapper :bgColor="'#D0CBC5'">
    <section :class="$style['row']">
      <div :class="$style['left']">some text</div>

      <div>
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
      </div>

      <div :class="$style['right']">
        <ReactLogo :width="80" :height="80"  :opacity="icons.react ? 1 : 0"/>
        <NextLogo :width="80" :height="80" :opacity="icons.next ? 1 : 0"/>
        <VueLogo :width="80" :height="80" :opacity="icons.vue ? 1 : 0"/>
        <NuxtLogo :width="80" :height="80" :opacity="icons.nuxt ? 1 : 0"/>
        <ViteLogo :width="80" :height="80" :opacity="icons.vite ? 1 : 0"/>
        <TsLogo :width="80" :height="80" :opacity="icons.ts ? 1 : 0"/>
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
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-block: 3.8rem;

  .text {
    font-size: 6rem;
    font-weight: 900;
    color: #000;
    max-width: fit-content;
    position: relative;
    z-index: 1;
    
    &:hover {
      cursor: pointer;
      color: aliceblue;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
     
      
      z-index: -1;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 200ms; 
    }

    &:hover::after {
      transform: scaleX(1);
      cursor: pointer;
      // transform-origin: left;

    }
  }

  .left {
    @extend .text;
    writing-mode: vertical-rl;
    align-self: center;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 2.2rem;
  }
}

</style>