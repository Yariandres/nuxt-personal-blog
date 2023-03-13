<template>
  <BaseContainer>
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
  </BaseContainer>
</template>

<style>
@import '~/styles/index.scss';
</style>
