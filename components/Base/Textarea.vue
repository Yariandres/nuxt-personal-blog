<template>
  <LayoutFlexColumn>
    <div :class="{[$style['input-base']]: true, [$style['input-border-active']]: isActive }">
      <label :class="{[$style['label']]: true, [$style['label-color-active']]: isActive}" :for="id">{{ label }}</label>
        <textarea 
          v-bind="$attrs"
          id="details" 
          :value="modelValue"
          @input="
          isInputEmpty($event);
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
    </div>
  </LayoutFlexColumn>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  id: string;
  modelValue: string | number;
}>();

const isActive = ref(false);

const isInputEmpty = (e: Event) => {
  if ((e.target as HTMLInputElement).value === '') {
    isActive.value = false
  } else {
    isActive.value = true
  }
}
</script>

<style lang="scss" module>
.input-base {
  border-radius: 2.5rem;
  border: 2px solid var(--border-color-light);
  display: flex;
  flex-direction: column;
  gap: .5rem;

  .label {
    font-size: 1.6rem;
    font-weight: 600;
    color: inherit;
    margin-inline-start: 2.2rem;
    padding-block-start: .5rem;
  }
  
  textarea {
    border: 1px solid var(--color-gray-300);
    border-radius: 2.5rem;
    padding-inline-start: 2rem;
    font-size: 1.6rem;
    line-height: var(--line-height-100);
    color: var(--color-gray-900);
    background-color: inherit;

    resize: none;

    &:focus-visible {
      outline: none;
    }
  }
}

.input-border-active {
  border: 2px solid var(--text-color-active);
}

.label-color-active {
  color: var(--text-color-active) !important;
}

</style>