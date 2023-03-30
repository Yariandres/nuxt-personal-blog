<template>
  <div :class="$style['main-layout']">
    <slot name="navigation"/>

    <div :class="$style['main-layout__main']">
      <slot name="main"/>
    </div>
    <slot name="footer"/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  &__main {
    flex-grow: 1;
  }
}
</style>
