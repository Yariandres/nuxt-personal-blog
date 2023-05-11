<template>
  <div :class="$style['container']">
    <label
      :class="{
        [$style['label']]: true,
        [$style['label-color-active']]: isActive,
      }"
      :for="id"
      >{{ label }}</label
    >
    <div
      :class="{
        [$style['input-base']]: true,
      }"
    >
      <textarea
        v-bind="$attrs"
        id="details"
        :value="modelValue"
        @input="
          isInputEmpty($event);
          $emit('update:modelValue', ($event.target as HTMLInputElement).value);
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  id: string;
  modelValue: string | number;
}>();

defineEmits(["update:modelValue"]);

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
.label {
  font-size: 16px;
  font-weight: bold;
  color: var(--main-color);
  margin-inline-start: 22px;
  padding-block-start: 5px;
}
.input-base {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  textarea {
    border: 1.5px solid var(--main-color);
    border-radius: 15px;
    padding-inline-start: 20px;
    font-size: 16px;
    color: var(--main-color);
    background-color: #fff;
    resize: none;

    &:hover {
      box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
      transform: translateY(-3px);
      -webkit-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
    }

    &:focus-visible {
      outline: unset;
      border: 1.5px solid var(--main-color);

      background-color: #fff;
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
