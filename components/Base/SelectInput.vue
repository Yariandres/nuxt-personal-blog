<template>
  <div
    :class="{
      [$style['input-base']]: true,
      [$style['input-border-active']]: isActive,
    }"
  >
    <div :class="$style['container']">
      <label for="id" :class="$style['label']">{{ label }}:</label>
      <select
        :id="id"
        :value="modelValue"
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
    </div>
  </div>
</template>

<script setup lang="ts">
interface Event {
  target: HTMLInputElement;
}

defineEmits(["update:modelValue"]);

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
  border-radius: 50px;
  border: 1px solid #130f49;
  width: 100%;

  .container {
    display: flex;
  }

  .label {
    font-size: 16px;
    font-weight: 600;
    color: #130f49;
    margin-inline-start: 22px;
    padding-block-start: 0.5px;
    cursor: pointer;
    flex: 3;
    z-index: 10;
  }
  .field {
    border: none;
    background-color: unset;
    color: #130f49;
    padding-inline-start: 19px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    flex: 9;

    // remove default arrow
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus-visible {
      outline: none;
      background-color: #fff;
      border-radius: 0 50px 50px 0;
    }

    option {
      color: #fff;
    }
  }
}

.input-border-active {
  border: 1px solid yellowgreen;
}

.label-color-active {
  color: yellowgreen !important;
}
</style>
