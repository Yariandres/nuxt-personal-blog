<template>
  <div
    :class="{
      [$style['input-base']]: true,
      [$style['input-border-active']]: isActive,
    }"
  >
    <LayoutFlexColumn>
      <label :for="id" :class="$style['label']">{{ label }}:</label>
      <select
        :value="modelValue"
        :id="id"
        :class="$style['field']"
        v-bind="{
          ...$attrs,
          onChange: ($event: Event) => 
            {
              $emit('update:modelValue', $event.target.value),
              isActive = true
            }
        }"
      >
        <option
          v-for="option in options"
          :key="option"
          :value="option"
          :selected="option === modelValue"
        >
          {{ option }}
        </option>
      </select>
    </LayoutFlexColumn>
  </div>
</template>

<script setup lang="ts">
interface Event {
  target: HTMLInputElement;
}

defineProps<{
  label: string;
  id: string;
  modelValue: string | number;
  options: string[];
}>();

const isActive = ref(false);
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
    cursor: pointer;
  }
  .field {
    border: none;
    background-color: unset;
    color: inherit;
    padding-inline-start: 1.9rem;
    width: 100%;
    cursor: pointer;

    // remove default arrow
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus-visible {
      outline: none;
    }

    option {
      color: var(--text-color);
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
