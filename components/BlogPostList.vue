<script setup>
const { data: equalQuery } = await useAsyncData("equal", () => {
  return queryContent("/").find();
});

console.log(equalQuery);
</script>

<template>
  <section>
    <div v-for="post in equalQuery" :key="post._path">
      <NuxtLink to="/">
        <section>
          <h3 class="title article-title has-text-weight-bold">
            {{ post.title }}
          </h3>
          <BlogPostMeta :author="post.author" :date="post.date.published" />
          <div>{{ post.description }}</div>
        </section>
      </NuxtLink>
    </div>
  </section>
</template>