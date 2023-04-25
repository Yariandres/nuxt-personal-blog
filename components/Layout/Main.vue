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
  justify-content: space-between;
  min-height: 100dvh;
}
</style>
