<script setup lang="ts">
import { useColorMode } from '@vueuse/core';

const mode = useColorMode();

const toggleLightTheme = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <div :class="$style['switcher']">
    <div
      role="button"
      :class="{
        [$style['button']]: true,
      }"
      @click="toggleLightTheme"
    >
      <nuxt-img
        v-if="mode === 'dark'"
        src="/light.png"
        alt="dark icon"
        width="70"
        height="70"
        quality="100"
        loading="lazy"
        format="webp"
      />

      <nuxt-img
        v-if="mode === 'light'"
        src="/dark.png"
        alt="ligth icon"
        width="70"
        height="70"
        quality="100"
        loading="lazy"
        format="webp"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '~/assets/scss/mixins';

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
      -webkit-box-shadow: 3px 3px 10px 3px #c3c3c3;
      -moz-box-shadow: 3px 3px 10px 3px #c3c3c3;
      box-shadow: 3px 3px 10px 3px #c3c3c3;
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
