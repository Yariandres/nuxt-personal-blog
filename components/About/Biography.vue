<template>
  <div :class="$style['text-group']">
    <p :class="$style['greetings']">- Nice to meet you</p>
    <h3 :class="$style['heading']">Yari Herrera</h3>
    <span class="cd-headline rotate-1">
      <span class="blc">Web Developer &amp; </span>
      <span class="cd-words-wrapper">
        <b
          :class="[isActive[0] ? 'is-visible' : 'is-hidden']"
          style="color: blue"
          >SAAS</b
        >
        <b
          :class="[isActive[1] ? 'is-visible' : 'is-hidden']"
          style="color: orange"
          >Ecommerce</b
        >
        <b
          :class="[isActive[2] ? 'is-visible' : 'is-hidden']"
          style="color: red"
          >Wordpress</b
        >
      </span>
    </span>
  </div>

  <div :class="$style['button']">
    <NuxtLink to="/contact">Got a project?</NuxtLink>
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
    color: var(--main-color);
  }

  .heading {
    font-weight: 800;
    font-size: 40px;
    color: var(--main-color);
  }
}

.button {
  a {
    color: var(--main-color);
    display: inline-block;
    border: 1.5px solid var(--main-color);
    border-radius: 50px;
    padding: 9px 40px;
    white-space: nowrap;
    background-color: #fff;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--main-color);
      color: #fff;
      transform: translateY(-5px);
      box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
