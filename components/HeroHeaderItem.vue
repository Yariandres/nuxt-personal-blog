<template>
  <div :class="$style['container']">
    <p :class="$style['header']">{{ textOne }}</p>
    <p :class="[$style['header'], $style['margin-left']]">{{ textTwo }}-</p>
    <p :class="$style['header']">{{ textThree }}</p>
    <p :class="[$style['header'], $style['light']]">{{ textFour }}</p>
    <div :class="$style['absolute']">
      <p :class="$style['absolute--text']">{{ textFive }}</p>
    <p :class="[$style['absolute--text'], $style['margin-left']]">{{ textSix }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  textOne?: string;
  textTwo?: string;
  textThree?: string;
  textFour?: string;
  textFive?: string;
  textSix?: string;
}>();

</script>

<style lang="scss" module>
 .container {
  position: relative;
  .header {
    font-size: 11.8rem;
    font-weight: regular;
    line-height: 8rem;
  }
  .header.margin-left {
    margin-left: 2.4rem;
    color: #ffffff;
  }
  .header.light{
    color: #ffffff;
  }
  .absolute {
    position: absolute;
    bottom: -2rem;
    left: 10.5rem;

    &--text {
      font-size: 2.4rem;
      font-weight: 100;
    }
    &--text.margin-left {
      margin-left: 2.4rem;
    }
  }
}
</style>