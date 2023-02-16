<template>
 <MainWrapper :bgColor="'var(--blue-1000)'">
    <section :class="$style['row']">
      <div :class="$style['left']">
        <p 
          :class="$style['text']" 
          @mouseenter="[icons.react = true, dynamicText = 'REACT']"
          @mouseleave="icons.react = false"
        >
          POWERFULL
        </p>
        <p 
          :class="$style['text']"
          @mouseenter="[icons.next = true, dynamicText = 'NEXT'] "
          @mouseleave="icons.next = false" 
        >
          MODERN
        </p>
        <p 
          :class="$style['text']"
          @mouseenter="[icons.vue = true, dynamicText = 'VUE']"
          @mouseleave="icons.vue = false"
        >
          TECHNOLOGIES
        </p>
        <p 
          :class="$style['text']"
          @mouseenter="[icons.nuxt = true, dynamicText = 'NUXT']"
          @mouseleave="icons.nuxt = false" 
        >
          FOR
        </p>
        <p 
          :class="$style['text']" 
          @mouseenter="[icons.vite = true, dynamicText = 'VITE']"
          @mouseleave="icons.vite = false" 
        >
          INNOVATIVE
        </p>
        <p 
          :class="$style['text']" 
          @mouseenter="[icons.ts = true, dynamicText = 'TYPESCRIPT']"
          @mouseleave="icons.ts = false" 
        >
          IDEAS
        </p>
      </div>

      <div :class="$style['right']">
        <ReactLogo v-if="icons.react" :width="580" :height="580"/>
        <NextLogo v-if="icons.next"   :width="580" :height="580"/>
        <VueLogo v-if="icons.vue"  :width="580" :height="580" />
        <NuxtLogo v-if="icons.nuxt"  :width="580" :height="580" />
        <ViteLogo v-if="icons.vite"  :width="580" :height="580" />
        <TsLogo v-if="icons.ts"  :width="580" :height="580"/>
  
        <div :class="[$style['right__text'], $style['bg']]">{{ dynamicText }}</div>
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

const dynamicText = ref<string>('CODIGO');


</script>

<style lang="scss" module>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-block: 1.8rem;
    gap: 1.8rem;
  }
  .text {
    font-size: 6.3rem;
    font-weight: 900;
    color: rgb(255, 255, 255);
    max-width: fit-content;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
      font-size: 5rem;
    }
    
    &:hover {
      cursor: pointer;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:  var(--red-300);
      border-radius: var(--radius-2);
      
      z-index: -1;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 200ms; 
    }
    &:hover::after {
      transform: scaleX(1);
      cursor: pointer;
    }
  }
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--blue-1000);
    flex: 2;
    padding-block: 8rem;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex: 2;
    svg {
      position: absolute;
      // absolute center
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: .2;
    }
    &__text {
    font-size: 8.3rem;
    font-weight: 800;
    align-self: center;
    letter-spacing: .2rem;
      @media (max-width: 768px) {
        writing-mode: horizontal-tb;
      }
    }
    .bg {
      background-image: linear-gradient(90deg, var(--red-300) 50%, var(--green-300) 100%);
      background-size: cover;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
}


</style>