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
}
</style>