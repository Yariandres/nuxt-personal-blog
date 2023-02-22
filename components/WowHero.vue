<template>
  <div :class="$style['menu']" ref="menu">
    <div :class="$style['menu-items']">
      <a v-for="element in ['Creating', 'The', 'Interface', 'Of the', 'Future']" ref="item" :class="$style['menu-item']">{{ element }}</a>
    </div>

    <div :class="$style['menu-background-pattern']"></div>
    <div :class="$style['menu-background-image']"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const menu = ref(null as HTMLElement | null);
const item = ref([] as HTMLElement[]);

onMounted(() => {
  item.value.forEach((element, index) => {
    element.onmouseover = () => {
      menu.value?.setAttribute('data-active-index', index.toString());

    };
  });
});

</script>

<style lang="scss" module>
.menu {
  height: 91.1vh;
  display: flex;
  align-items: center;

  &-item {
    font-size: clamp(3rem, 8vw, 8rem);
    color: var(--green-50);
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    padding: clamp(.25rem, .10vw, 1rem) 0rem;
    transition: opacity 400ms ease;
  }

  &-items {
    margin-left: clamp(4rem, 20vw, 48rem);
    position: relative;
    z-index: 2;
  }

  &-items:hover &-item {
    opacity: .3;
  }

  &-items:hover &-item:hover {
    opacity: 1;
  }

  &-background-pattern {
    height: 100vh;
    width: 98vw;

    background-image: radial-gradient(
      rgba(2255, 255, 255, 0.1) 9%, transparent 9%
    );

    background-position: 0% 0%;
    background-size: 12vmin 12vmin;

    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;

    transition: opacity 800ms ease, 
    background-size 800ms ease,
    background-position 800ms ease;
  }

  &-background-image {
    background-image: url('https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
    background-position: center 40%;
    background-size: 100vmax;
    left: 0px;  
    top: 0px;
    opacity: 0.10;
    position: absolute;
    
    transition: opacity 800ms ease,
    background-size 800ms ease,
    background-position 800ms ease;
    height: 100%;
    width: 98%;
    z-index: 0;
  }

  &-items:hover ~ &-background-pattern {
    background-size: 11vmin 11vmin;
    opacity: .5;
  }

  &[data-active-index="0"] > &-background-pattern {
    background-position: 0% -25%;
  }

  &[data-active-index="1"] > &-background-pattern {
    background-position: 0% -50%;
  }

  &[data-active-index="2"] > &-background-pattern {
    background-position: 0% -75%;
  }

  &[data-active-index="3"] > &-background-pattern {
    background-position: 0% -100%;
  }

  &[data-active-index="0"] > &-background-image {
    background-position: center 45%;
  }

  &[data-active-index="1"] > &-background-image {
    background-position: center 50%;
  }

  &[data-active-index="2"] > &-background-image {
    background-position: center 55%;
  }

  &[data-active-index="3"] > &-background-image {
    background-position: center 60%;
  }
}

</style>