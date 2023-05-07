<template>
  <div :class="$style['flex-column']">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  gap?: number;
}>();

const style = computed(() => {
  return props.gap ? `${props.gap}rem` : "none";
});
</script>

<style lang="scss" module>
.flex-column {
  display: flex;
  flex-direction: column;
  gap: v-bind(style);
}
</style>
