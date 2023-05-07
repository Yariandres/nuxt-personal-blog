<template>
  <div :class="$style['text-group']">
    <p :class="$style['greetings']">- Nice to meet you</p>
    <h3 :class="$style['heading']">Yari Herrera</h3>
    <span class="cd-headline rotate-1">
      <span class="blc">Web designer &amp; </span>
      <span class="cd-words-wrapper">
        <b
          :class="[isActive[0] ? 'is-visible' : 'is-hidden']"
          style="color: blue"
          >Designer</b
        >
        <b
          :class="[isActive[1] ? 'is-visible' : 'is-hidden']"
          style="color: orange"
          >Coder</b
        >
        <b
          :class="[isActive[2] ? 'is-visible' : 'is-hidden']"
          style="color: red"
          >Player</b
        >
      </span>
    </span>
  </div>

  <div :class="$style['button']">
    <NuxtLink to="/portfolio">Got a project?</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
const isActive = ref([true, false, false]);

watchEffect((onInvalidate) => {
  const interval = setInterval(() => {
    const [first, second, third] = isActive.value;

    isActive.value = [second, third, first];
  }, 2500);

  onInvalidate(() => {
    clearInterval(interval);
  });
});
</script>

<style lang="scss" module>
.text-group {
  width: max-content;

  .greetings {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
  }

  .heading {
    font-weight: 800;
    font-size: 40px;
  }
}

.button {
  a {
    color: inherit;
    display: inline-block;
    border: 1.5px solid #130f49;
    border-radius: 50px;
    padding: 9px 40px;
    white-space: nowrap;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:hover {
      background-color: #130f49;
      color: #fff;
    }
  }
}
</style>
