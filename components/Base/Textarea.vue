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
  color: #130f49;
  margin-inline-start: 22px;
  padding-block-start: 5px;
}
.input-base {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  textarea {
    border: 1px solid #e9f8ff;
    border-radius: 15px;
    padding-inline-start: 20px;
    font-size: 16px;
    color: #130f49;
    background-color: #fff;
    resize: none;

    &:focus-visible {
      border: 1px solid #fff;
      background-color: #fff;
      border-radius: 25px;
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
