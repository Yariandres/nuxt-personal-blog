<script setup lang="ts">
import { ref } from 'vue';
import { useIntervalFn, TransitionPresets, useTransition } from '@vueuse/core';
import { rand } from '@vueuse/shared';

const greetings = [
  'Hello',
  'Hi',
  'Yo!',
  'Hey',
  'Hola',
  'こんにちは',
  'Bonjour',
  'Salut!',
  '你好',
  'Привет',
];

const word = ref('Hello');
const interval = ref(900);

useIntervalFn(() => {
  word.value = greetings[rand(0, greetings.length - 1)];
}, interval);
</script>

<template>
  <section class="hero">
    <div class="box">
      <h1 class="heading">{{ word }}</h1>
      <h3 class="name">This is Yari Herrera</h3>
      <p class="name">
        I am a <span class="title">software developer</span> living in Poland
      </p>
    </div>
    <div class="img" />
  </section>
</template>

<style lang="scss">
@mixin setBackgound($url: true) {
  background-image: url($url);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.dark {
  .hero {
    .img {
      @include setBackgound('~/assets/images/hero-dark-mode.png');
      height: 800px;
      opacity: 0.3;
    }
    .title {
      color: aqua;
      font-weight: 500;
    }
  }
}

.light {
  .hero {
    .img {
      @include setBackgound('~/assets/images/hero-light-mode.png');
      height: 800px;
      opacity: 0.2;
    }

    .title {
      color: rgb(255, 0, 0);
      font-weight: 500;
    }
  }
}

.hero {
  position: relative;
  .box {
    position: absolute;
    top: 180px;
    left: 80px;

    .name {
      font-size: 26px;
    }

    .heading {
      height: 120px;
      z-index: 1;
      font-size: 82px;
    }
  }
}
</style>
