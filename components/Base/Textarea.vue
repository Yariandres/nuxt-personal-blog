<template>
  <LayoutFlexColumn>
    <label :for="id">{{ label }}</label>
      <textarea 
        id="details" 
        cols="30" 
        rows="10"
        placeholder="Share additional information about the project"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
  </LayoutFlexColumn>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  id: string;
  modelValue: string | number;
}>();
</script>

<style lang="scss" module>

</style>