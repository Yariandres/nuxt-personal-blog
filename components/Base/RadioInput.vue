<template>
  <div :class="$style['group']">
    <label :for="id" :class="$style['label']">{{ label }}</label>
    <input
      :checked="modelValue === value"
      :value="value"
      @change="$emit('update:modelValue', value)"
      v-bind="$attrs"
      :id="id"
    />
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

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  outline: none;
  transition: border-color 0.2s;
}

input[type="radio"]:checked {
  border-color: var(--text-color-active);
}

input[type="radio"]:checked::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  margin: 3px;
  border-radius: 50%;
  background-color: var(--text-color-active);
}

.label-color-active {
  color: var(--text-color-active) !important;
}
</style>
