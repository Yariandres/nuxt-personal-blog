<template>
  <aside :class="$style['aside']">
    <h2 :class="$style['title']">Categories</h2>
    <div v-for="category in categories" :key="category.id" :class="$style['categories']">
      <NuxtLink :to="`/posts/${category.slug}`" :class="$style['link']">{{ category.name }}</NuxtLink>
      <p :class="$style['count']">{{ category.count }}</p>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  categories: CategoryType[] | null;
}>();

interface CategoryType {
  id: number;
  name: string;
  count: number;
  slug: string;
}
</script>

<style lang="scss" module>
.aside {
  flex: 2;
  border: 1px solid var(--bg-light-secondary);
  border-radius: 1rem;
  padding: 2.8rem;

  .title {
    font-size: 2.4rem;
    font-weight: 800;
    text-align: center;
  }

  .categories {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    font-size: 1.9rem;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--text-color-red-1);
      text-decoration: underline;
    }
  }

  .count {
    font-size: 1.9rem;
    font-weight: 700;
    border: 1px solid var(--text-color-active);
    color: var(--bg-light-primary);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    border-radius: 1.5rem;
    padding: 3px 1rem;
  }

  .dark, .count {
    background-color: var(--bg-dark-primary);
    color: var(--bg-light-primary);
  }
}
</style>