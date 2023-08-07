<script setup lang="ts">
import { useColorMode } from '@vueuse/core';

const mode = useColorMode();

const toggleLightTheme = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <div :class="$style['switcher']">
    <navigation-moon-icon v-if="mode === 'light'" @click="toggleLightTheme" />
    <navigation-sun-icon
      v-if="mode === 'dark'"
      @click="toggleLightTheme"
      :mode="mode"
    />
  </div>
</template>

<style lang="scss" module>
.switcher {
  display: flex;
  justify-content: flex-end;
  padding-inline: 40px;

  svg {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    z-index: 1;
    cursor: pointer;
  }
}
</style>
