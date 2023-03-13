<template>
  <div :class="$style['footer']">
    <h2>Yari's blog &copy; ALl Rights Reserved {{ year }}</h2> 
  </div>
</template>

<script setup lang="ts">
// get today's date
const today = new Date();
const year = today.getFullYear();
</script>

<style lang="scss" module>
.footer {
  color: #fff;
  padding: 1rem;
  text-align: center;
}
</style>