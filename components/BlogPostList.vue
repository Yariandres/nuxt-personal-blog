<script setup>
const { data: equalQuery } = await useAsyncData("equal", () => {
  return queryContent("/").find();
});
</script>

<template>
  <section>
    <div v-for="post in equalQuery" :key="post._path">
      <NuxtLink :to="post._path">
        <section>
          <h3>
            {{ post.title }}
          </h3>
          <BlogPostMeta :author="post.author" :date="post.date.published" />
          <div>{{ post.description }}</div>
        </section>
      </NuxtLink>
    </div>
  </section>
</template>