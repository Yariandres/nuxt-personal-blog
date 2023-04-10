<template>
  <div :class="$style['group']">
    <label :for="id" :class="$style['label']">{{ label }}</label>
    <input
      :checked="modelValue === value" 
      :value="value"
      @change="$emit('update:modelValue', value)"
      v-bind="$attrs"
      :id="id"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  id: string;
  modelValue: string | number;
  value: string | number;
}>();
</script>

<style lang="scss" module>
.group {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.label {
  font-size: 1.4rem;
  font-weight: 600;
  color: inherit;

}
</style>