<template>
  <section :class="$style['container']">
    <div :class="$style['section']">
      <h1>Page under construction, come back soon!</h1>
      <NuxtLink to="/portfolio">&lt;-- Back to portfolio page</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.container {
  height: 100dvh;
  width: 100dvw;
  overflow-y: scroll;
  scroll-behavior: smooth;

  .section {
    padding-inline: 90px;
    padding-block: 50px;
    display: flex;
    flex-direction: column;
    gap: 54px;

    @media only screen and (max-width: 767px) {
      padding-inline: 20px;
    }
  }

  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    color: ivar(--main-color);
  }
}
</style>
