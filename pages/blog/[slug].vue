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
      <NuxtLink to="/blog">Go back post</NuxtLink>
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

  @media only screen and (max-width: 767px) {
    padding-inline: 20px;
  }
}
.title {
  font-weight: 800;
  font-size: 40px;
  color: var(--main-color);
  text-align: center;
}

.post-meta {
  font-size: 1.6rem;
  color: var(--main-color);
}

.post-content {
  font-size: 19px;
  line-height: 28px;
  margin-block: 40px;
  color: var(--main-color);
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
    color: solid var(--main-color);
    position: relative;
    align-items: center;
    display: block;

    &:hover::before {
      content: "";
      width: 100%;
      height: 2px;
      background-color: var(--main-color);
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
