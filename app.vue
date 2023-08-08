<template>
  <navigation-bar />
  <NuxtPage />
</template>

<style lang="scss">
@use '~/assets/scss/main.scss';

.dark {
  background-color: #111827;
  color: #fff;
}

body {
  scroll-snap-type: mandatory;
}
</style>
