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
      {{ mode === 'dark' ? 'Light' : 'Dark' }} Mode
    </button>
  </div>
</template>

<style lang="scss" module>
.switcher {
  display: flex;
  justify-content: flex-end;
  padding-inline: 40px;

  .button {
    background-color: #41414ac9;
    color: #fff;
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
  }
}
</style>
