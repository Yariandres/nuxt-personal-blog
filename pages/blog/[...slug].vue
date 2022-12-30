<template>
  <h1>{{ post.title }}</h1>
  <BlogPostMeta :author="post.author" :date="post.date.published" />
  <ContentDoc />
</template>

<script setup>
const { path } = useRoute();

const { data: post } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<style lang="scss" scoped>
</style>