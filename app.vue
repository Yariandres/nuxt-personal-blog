<template>
  <LayoutMain>
    <template #navigation>
      <BlogNav />
    </template>
    <template #main>
      <NuxtPage />
    </template>
    <template #footer>
      <BlogFooter />
    </template>
  </LayoutMain>
</template>

<style>
@import '~/styles/index.scss';
</style>
