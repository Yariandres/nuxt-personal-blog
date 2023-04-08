<template>
  <div :class="$style['input-base']">
    <LayoutFlexColumn>
      <label :class="$style['label']" for="name">Name</label>
      <input ref="input" :class="$style['input']" type="text" id="name" >
    </LayoutFlexColumn>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.input-base {
  border: 1px solid var(--text-color-light);
  border-radius: 5rem;

  .label {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--text-color-light);
    margin-inline-start: 2.2rem;
  }

  .input {
    width: 30rem;
    height: 2.5rem;
    border: none;
    background-color: unset;
    color: inherit;
    padding-inline-start: 1.9rem;

    &:focus {
      border: none;
    }

    &:focus-visible {
      outline: none;
    }

    &:active {
      border: none;
    }
  }
}

.input-base-active {
  border: 1px solid var(--text-color-active);
}
</style>