<template>
  <article :class="$style['article']">
    <p :class="$style['article__date']">{{ date }}</p>
    <h2 :class="$style['article__title']">{{ title }}</h2>
    <span v-if="content" :class="$style['article__content']" v-html="content"/>
    <div :class="$style['article__btn']">
      <NuxtLink :to="`/blog/${slug}`" :class="$style['article__btn--link']">
        Read article
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  date?: string;
  title?: string;
  content?: string;
  slug?: string;
}>();
</script>

<style lang="scss" module>

.article {
  padding: 2rem;
  border: 4px solid transparent;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &__date {
    color: var(--text-color-active);
    font-size: 1.4rem;
    margin: 0;
  }

  &__title {
    font-size: 1.6rem;
    margin: 0;
  }

  &__content {
    font-size: 1.6rem;
    color: var(--color-gray-1);
    margin: 0;
  }

  &__btn {
    display: flex;
    justify-content: flex-start;

    &--link {
      display: inline-block;
      padding: 1rem 2rem;
      border-radius: 2rem;
      background-color: var(--color-gray-0);
      color: var(--text-color-light) !important;
      font-size: 1.4rem;
      font-weight: 600;
      text-decoration: none;
      transition: background-color 0.5s ease;

      &:hover {
        background-color: var(--color-gray-1);
        color: var(--color-gray-0);
      }
    }
  }

  &:hover {
    border: 4px solid var(--text-color-red-0);
    transition: background-color 0.5s ease;
  }
}
</style>