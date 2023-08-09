<script setup lang="ts">
import { ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
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
      <h1 class="greet">{{ word }}</h1>
      <h3 class="name">I am Yari Herrera</h3>
      <p class="name">
        A <span class="title">software developer</span> living in Poland
      </p>
    </div>
    <img
      class="scroller"
      src="~/assets/images/mouse-dark.png"
      alt="mouse scroller"
      width="84"
      height="84"
    />
  </section>
</template>

<style lang="scss">
@import '~/assets/scss/mixins.scss';

.dark {
  .hero {
    @include setBackgound('~/assets/images/hero-dark-mode.png');
    .title {
      color: aqua;
      font-weight: 500;
    }
  }
}

.light {
  .hero {
    @include setBackgound('~/assets/images/hero-light-mode.png');

    .greet {
      color: #fff;
    }

    .title {
      color: rgb(255, 0, 0);
      font-weight: 500;
    }

    .name {
      color: #fff;
    }
  }
}

.hero {
  display: flex;
  align-items: center;
  padding-inline: 16px;
  position: relative;
  min-height: 100dvh;

  .box {
    background-color: hsla(0, 0%, 0%, 0.464);
    padding-inline: 16px;
    padding-block: 16px;
    border-radius: 5%;

    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;

    .name {
      font-size: 26px;
    }

    .greet {
      height: 100px;
      font-size: 62px;
    }
  }
}

@mixin bounce-animation($duration: 1s) {
  animation: bounce $duration infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
}

.scroller {
  position: absolute;
  bottom: 50px;
  left: 44%;
  transform: translateX(-5%);
  cursor: pointer;
  @include bounce-animation(2s);
  border-radius: 50px;
  border: 2px dotted transparent;
  transition: all 1.5s ease;

  &:hover {
    border-radius: 50px;
    border: 2px solid #2cdbda;
  }
}
</style>
