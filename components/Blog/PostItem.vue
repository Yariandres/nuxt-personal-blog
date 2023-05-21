<template>
  <div>
    <div :class="$style['top']">
      <div :class="$style['svg-calendar']" />
      <p :class="$style['date']">{{ handleDate }}</p>
    </div>

    <div :class="$style['middle']">
      <!-- eslint-disable vue/no-v-html -->
      <h3 :class="$style['title']" v-html="post.title.rendered"></h3>

      <div :class="$style['action']">
        <NuxtLink :to="`/blog/${post.slug}`">Read more </NuxtLink>
        <div :class="$style['svg-arrow']"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Post } from "~~/types/post";

const props = defineProps<{
  post: Post;
}>();

const handleDate = computed(() =>
  props.post.date.split("T")[0].split("-").reverse().join("/")
);
</script>

<style lang="scss" module>
@import "~/css/animations.scss";
.top {
  display: flex;
  gap: 10px;
  align-items: center;
  .svg-calendar {
    width: 18px;
    height: 18px;
    background-image: url("~/assets/img/svg/calendar.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }
  .date {
    font-size: 16px;
    font-weight: 500;
  }
}

.middle {
  display: flex;
  justify-content: space-between;

  /* Tablet styles */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  .title {
    flex: 6;
    font-size: 25px;
  }

  .action {
    flex: 6;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: flex-end;

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
    }
  }
}
</style>
