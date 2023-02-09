<template>
 <MainWrapper :bgColor="'#D0CBC5'">
    <section :class="$style['row']">
      <div :class="[$style['left'], $style['bg']]">{{ dynamicText }}</div>
      <div>
        <p 
          :class="$style['text']" 
          @mouseenter="[icons.react = true, dynamicText = 'REACT']"
        >
          POWERFULL
        </p>
        <p 
          :class="$style['text']"
          @mouseenter="[icons.next = true, dynamicText = 'NEXT'] " 
        >
        TECHNOLOGIES
        </p>
        <p 
          :class="$style['text']"
          @mouseenter="[icons.vue = true, dynamicText = 'VUE']" 
        >
          TO
        </p>
        <p 
          :class="$style['text']"
          @mouseenter="[icons.nuxt = true, dynamicText = 'NUXT']" 
        >
          LAUNCH
        </p>
        <p 
          :class="$style['text']" 
          @mouseenter="[icons.vite = true, dynamicText = 'VITE']" 
        >
          YOUR
        </p>
        <p 
          :class="$style['text']" 
          @mouseenter="[icons.ts = true, dynamicText = 'TYPESCRIPT']" 
        >
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

const dynamicText = ref<string>('CODIGO');


</script>

<style lang="scss" module>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-block: 3.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-block: 1.8rem;
    gap: 1.8rem;

    .left {
      writing-mode: horizontal-tb;
    }
  }

  .text {
    font-size: 6rem;
    font-weight: 900;
    color: #000;
    max-width: fit-content;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      font-size: 5rem;
    }
    
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
      background: rgba(0, 0, 0, 0.2);
     
      
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
    font-size: 6rem;
    font-weight: 800;
    writing-mode: vertical-rl;
    align-self: center;

    @media (max-width: 768px) {
      writing-mode: horizontal-tb;
    }
  }

  .bg {
    background-image: linear-gradient(90deg, #d0cbc5 30%, #0800005e 100%);
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    @media (max-width: 768px) {
      background-image: linear-gradient(360deg, #d0cbc5 30%, #080000aa 100%);
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 2.2rem;

    @media (max-width: 768px) {
      display: none;
    }
  }
}

</style>