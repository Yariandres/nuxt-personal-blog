<template>
  <div
    :class="{
      [$style['input-base']]: true,
    }"
  >
    <label
      :class="{
        [$style['label']]: true,
        [$style['label-color-active']]: isActive,
      }"
      for="name"
      >{{ label }}</label
    >
    <div :class="$style['container']">
      <input
        v-bind="$attrs"
        id="name"
        :class="$style['input']"
        type="text"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineEmits(["update:modelValue"]);

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
  border-radius: 50px;
  width: 100%;
  .container {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 50px;
  }

  .label {
    font-size: 16px;
    font-weight: 600;
    color: #130f49;
    margin-inline-start: 22px;
  }

  .input {
    height: 25px;
    border: none;
    background-color: transparent;
    color: #130f49;
    padding-inline-start: 29px;
    width: 100%;
    height: 100%;

    &:focus-visible {
      background-color: white;
      border-radius: 50px;
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
