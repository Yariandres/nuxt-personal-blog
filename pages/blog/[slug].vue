<template>
  <div :class="$style['container']">
    <div :class="$style['title']">
      <h1>{{ post?.title.rendered }}</h1>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <div :class="$style['post-content']" v-html="post?.content.rendered" />

    <div :class="$style['post-meta']">
      <span>Written by {{ post?._embedded["author"][0].name }} </span>
      <span>
        Published on
        {{ post?.date.split("T")[0].split("-").reverse().join(".") }}
      </span>
    </div>

    <div :class="$style['action']">
      <div :class="$style['svg-arrow']" />
      <NuxtLink to="/blog">Go back posts</NuxtLink>
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

const post = posts && posts.value && posts.value[0];
</script>

<style lang="scss" module>
.container {
  padding-inline: var(--space-400);
  padding-block: 100px;
}
.title {
  font-weight: 800;
  font-size: 40px;
  color: #130f49;
  text-align: center;
}

.post-meta {
  font-size: 1.6rem;
  color: #130f49;
}

.post-content {
  font-size: 19px;
  line-height: 28px;
  margin-block: 40px;
  color: #130f49;
}

.action {
  margin-block: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;

  a {
    font-weight: 500;
    font-size: 16px;
    color: inherit;
    position: relative;
    align-items: center;
    display: block;

    &:hover::before {
      content: "";
      width: 100%;
      height: 2px;
      background-color: black;
      position: absolute;
      bottom: 0;
      left: 0;
      animation: slide-in 0.3s ease-in-out forwards;
    }
  }
  .svg-arrow {
    width: 18px;
    height: 18px;
    background-image: url("~/assets/img/svg/rightArrow.svg");
    background-repeat: no-repeat;
    background-size: contain;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
</style>
