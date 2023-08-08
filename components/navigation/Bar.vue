<script setup lang="ts">
import { useColorMode } from '@vueuse/core';

const mode = useColorMode();

const toggleLightTheme = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <div :class="$style['switcher']">
    <button
      :class="{
        [$style['button']]: true,
      }"
      @click="toggleLightTheme"
    >
      <img
        v-if="mode === 'dark'"
        src="~/assets/images/hero-light-mode.png"
        alt="ligth icon"
        width="70"
        height="70"
      />
      <img
        v-if="mode === 'light'"
        src="~/assets/images/hero-dark-mode.png"
        alt="ligth icon"
        width="70"
        height="70"
      />
    </button>
  </div>
</template>

<style lang="scss" module>
// ANIMATION
@keyframes moveInLeft {
  // start
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  // Middle
  80% {
    transform: translateX(1rem);
  }

  // finish
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes moveInRight {
  // start
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  // Middle
  80% {
    transform: translateX(-1rem);
  }

  // finish
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.switcher {
  display: flex;
  justify-content: flex-end;
  padding-inline: 40px;

  animation-name: moveInRight;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;

  .button {
    background-color: unset;
    display: flex;
    align-items: center;
    padding-inline: 10px;
    padding-block: 10px;
    border-radius: 4px;
    outline: none;

    border: none;
    position: absolute;
    top: 20px;
    right: 20px;

    z-index: 1;
    cursor: pointer;

    img {
      border-radius: 50%;
      -webkit-box-shadow: -0.5px 4.5px 12px 1px #c3c3c3;
      -moz-box-shadow: -0.5px 4.5px 12px 1px #c3c3c3;
      box-shadow: -0.5px 4.5px 12px 1px #c3c3c3;
      transition: transform 0.2s;
      position: relative;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 1 1rem 2rem rgba(#000, 0.2);

        &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
        }
      }
    }
  }
}
</style>
