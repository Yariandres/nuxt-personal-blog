<template>
  <div>
    <div class="container">
      <BlogNav />
      <NuxtPage />
    </div>
    <Preloader />
  </div>
</template>

<style lang="scss">
@import "~/css/index.scss";
@import "~/css/variables.scss";
@import "~/css/plugins.css";

.container {
  display: flex;
  justify-content: space-between;
}
</style>
