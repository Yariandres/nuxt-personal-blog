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
      <p :class="[$style['trigger'], $style[`border-${mode}`]]">
        Switch to {{ mode === 'light' ? 'dark' : 'light' }}
      </p>
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

    .trigger {
      padding-inline: 16px;
      padding-block: 10px;
      border-radius: 25px;
    }

    .border-light {
      border: 2px solid #0c0d0d;
    }

    .border-dark {
      border: 2px solid #00fdfc;
    }
  }
}
</style>
