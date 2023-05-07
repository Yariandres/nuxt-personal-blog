<template>
  <div :class="$style['base-container']">
    <h1 :class="$style['text-warning']" v-if="!posts?.length">
      Oopsy no post under
      <span :class="$style['text-green']">{{
        capFirstLetter(route.params.slug as string)
      }}</span>
      category, check back soon!
    </h1>

    <div v-if="posts?.length">
      <h1 :class="$style['title']">
        All
        <span :class="$style['text-green']"
          >{{ capFirstLetter(route.params.slug as string) }}
        </span>
        Related Posts
      </h1>
      <ArticleCard
        v-for="post in posts"
        :key="post.id"
        :date="post.date.split('T')[0].split('-').reverse().join('.')"
        :title="post.title.rendered"
        :content="post.excerpt.rendered"
        :slug="post.slug"
      >
      </ArticleCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface CategoryType {
  id: number;
  name: string;
  count: number;
  slug: string;
}

const route = useRoute();
// get category id
const { data: categories } = await useWordpressApi().get<any>(
  `categories?slug=${route.params.slug}`
);

// get posts by category id
const { data: posts } = await useWordpressApi().getPosts<any>(
  categories.value[0].id
);

// cap the first letter route.params.slug
const capFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
</script>

<style lang="scss" module>
.base-container {
  padding-inline: var(--space-400);
}

.title {
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
}

.text-warning {
  font-size: 4.2rem;
  font-weight: 800;
  text-align: center;
}

.text-green {
  color: var(--text-color-active);
}
</style>
