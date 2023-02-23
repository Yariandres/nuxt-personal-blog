<template>
  <div :class="$style['main']">
    <slot/>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  bgColor?: string;
}>();
</script>

<style lang="scss" module>
.main {
  background-color: v-bind(bgColor);
  max-width: calc(100vw - 30rem);
  margin-inline: auto;
}
</style>