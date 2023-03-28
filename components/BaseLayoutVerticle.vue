<template>
  <div :class="$style['layout-verticle']">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  gap?: number;
}>();

const style = computed(() => 
  props.gap ? `${props.gap}rem` : 'unset',
);
</script>

<style lang="scss" module>
.layout-verticle {
  display: flex;
  flex-direction: column;
  gap: v-bind(style);
}
</style>