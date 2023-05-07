<template>
  <div class="container">
    <BlogNav />
    <NuxtPage />
  </div>
  <Preloader />
</template>

<style lang="scss">
@import "~/css/index.scss";
@import "~/css/variables.scss";
@import "~/css/plugins.css";

.container {
  display: flex;
}
</style>
