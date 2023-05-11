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
    border: 1.5px solid var(--main-color);
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 50px;

    -webkit-transition: box-shadow, transform 0.3s ease;
    -moz-transition: box-shadow, transform 0.3s ease;
    -ms-transition: box-shadow, transform 0.3s ease;
    -o-transition: box-shadow, transform 0.3s ease;
    transition: box-shadow, transform 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
    }
  }

  .label {
    font-size: 16px;
    font-weight: 600;
    color: var(--main-color);
    margin-inline-start: 22px;
  }

  .input {
    height: 25px;
    border: none;
    background-color: transparent;
    color: var(--main-color);
    padding-inline-start: 29px;
    width: 100%;
    height: 100%;

    &:focus-visible {
      outline: unset;
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
