<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <h2 class="title">{{ title }}</h2>
</template>

<style lang="scss" scoped>
.title {
  letter-spacing: 10px;
  font-weight: 100;
  font-weight: 800;
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
  padding-block-start: 140px;
}
</style>
