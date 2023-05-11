<template>
  <section :class="$style['container']">
    <div :class="$style['row']">
      <div :class="$style['left']">
        <div>
          <p :class="$style['title']">- blog</p>
          <h3 :class="$style['heading']">Blog & News</h3>
        </div>

        <div :class="$style['button']">
          <NuxtLink to="/portfolio">Get in touch</NuxtLink>
        </div>
      </div>

      <div :class="$style['right']">
        <div :class="$style['posts']">
          <BlogPostItem
            v-for="post in filteredPosts"
            :key="post.id"
            :post="post"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Post } from "~~/types/post";

const search = ref("");

const { data: posts } = await useWordpressApi().getPosts();

const searchByTitle = (post: Post): boolean => {
  return post.title.rendered.toLowerCase().includes(search.value.toLowerCase());
};

const filteredPosts = computed((): Post[] | null | undefined => {
  if (!search.value) {
    return posts.value;
  }
  return posts.value?.filter(searchByTitle);
});
</script>

<style lang="scss" module>
.container {
  height: 100dvh;
  width: 100dvw;
  overflow-y: scroll;
  scroll-behavior: smooth;

  .row {
    padding-inline: 100px;
    padding-block: 100px;
    display: flex;
    gap: 50px;

    /* Tablet styles */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      flex-direction: column;
    }

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }

    .left {
      flex: 4;
      display: flex;
      flex-direction: column;
      gap: 34px;
      .title {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        color: #130f49;
      }

      .heading {
        font-weight: 800;
        font-size: 40px;
        color: #130f49;
      }

      .button {
        a {
          color: inherit;
          // background-color: #130F49;
          display: inline-block;
          border: 1.5px solid #130f49;
          border-radius: 50px;
          padding: 9px 40px;
          white-space: nowrap;

          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;

          &:hover {
            background-color: #130f49;
            color: #fff;
          }
        }
      }
    }

    .right {
      flex: 8;
      .posts {
        display: flex;
        flex-direction: column;
        gap: 36px;
      }
    }
  }

  @keyframes slide-in {
    from {
      transform: scaleX(0);
      transform-origin: left;
    }
    to {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}
</style>
