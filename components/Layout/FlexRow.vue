<template>
  <div :class="$style['row']">
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
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: v-bind(style);

  @media (max-width: 768px) {
    flex-direction: column;
  }
}
</style>
