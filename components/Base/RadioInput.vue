<template>
  <div :class="$style['group']">
    <label :for="id" :class="$style['label']">{{ label }}</label>
    <input
      v-bind="$attrs"
      :id="id"
      :checked="modelValue === value"
      :value="value"
      @change="$emit('update:modelValue', value)"
    />
  </div>
</template>

<script setup lang="ts">
defineEmits(["update:modelValue"]);

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
  gap: 10px;
}
.label {
  font-size: 19px;
  font-weight: 600;
  color: #130f49;
}

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 1px solid #130f49;
  outline: none;
  transition: border-color 0.2s;
}

input[type="radio"]:checked {
  border-color: yellowgreen;
}

input[type="radio"]:checked::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  margin: 4px;
  border-radius: 50%;
  background-color: yellowgreen;
}
</style>
