<template>
  <div :class="$style['row']">
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.row {
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}
</style>