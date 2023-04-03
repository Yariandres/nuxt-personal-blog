<template>
  <div :class="$style['base-container']">
    <div :class="$style['post-title']">
      <h1>{{ post.title.rendered }}</h1>
    </div>

    <div :class="$style['post-content']" v-html="post.content.rendered"/>

    <div :class="$style['post-meta']">
      <span>Written by {{ post._embedded['author'][0].name }} </span>
      <span>
        Published on
        {{ post.date.split('T')[0].split('-').reverse().join('.') }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface WordpressPost {
    id: number;
    date: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
  }

  const { params } = useRoute();
  const { data: posts } = await useWordpressApi().getPost<WordpressPost>(
    params.slug as string
  );
  const post = posts.value[0];

</script>

<style lang="scss" module>
.base-container {
  padding-inline: var(--space-400);
}
  .post-title {
    font-size: 2.2rem;
    text-align: center;
  }

  .post-meta {
    font-size: 1.6rem;
    color: var(--text-color-active);
  }

  .post-content {
    font-size: 1.9rem;
    line-height: 2.8rem;
    margin-block: 4rem;
  }
</style>
