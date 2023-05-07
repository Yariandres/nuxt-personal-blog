<template>
  <div
    :class="{
      [$style['input-base']]: true,
      [$style['input-border-active']]: isActive,
    }"
  >
    <LayoutFlexColumn>
      <label
        :class="{
          [$style['label']]: true,
          [$style['label-color-active']]: isActive,
        }"
        for="name"
        >{{ label }}</label
      >
      <input
        v-bind="$attrs"
        :class="$style['input']"
        type="text"
        id="name"
        :value="modelValue"
        @input="
          isInputEmpty($event);
          $emit(
            'update:modelValue',
            ($event.target as HTMLInputElement)?.value
          );
        "
      />
      <slot name="default" />
    </LayoutFlexColumn>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  label: string;
  id: string;
  modelValue: string | number;
}>();

const isActive = ref(false);

const isInputEmpty = (e: Event) => {
  if ((e.target as HTMLInputElement).value === "") {
    isActive.value = false;
  } else {
    isActive.value = true;
  }
};
</script>

<style lang="scss" module>
.input-base {
  border-radius: 5rem;
  border: 2px solid var(--border-color-light);
  width: 100%;

  .label {
    font-size: 1.6rem;
    font-weight: 600;
    color: inherit;
    margin-inline-start: 2.2rem;
    padding-block-start: 0.5rem;
  }

  .input {
    width: 100%;
    height: 2.5rem;
    border: none;
    background-color: unset;
    color: inherit;
    padding-inline-start: 2.9rem;

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
