<template>
  <HomeHero />
  <div :class="$style['base-container']">
    <ServicesSection />
    <ClientsSection />
    <div :class="$style['news-posts-section']">
      <h2 :class="$style['section-title']">News and Posts </h2>
      <LayoutRow>
        <template #left>
          <div :class="$style['left']">
            <ArticleCard 
              v-for="post in posts" 
              :key="post.id" 
              :date="post.date
                .split('T')[0]
                .split('-')
                .reverse()
                .join('.')" 
              :title="post.title.rendered" 
              :content="post.excerpt.rendered"
              :slug="post.slug"
              >
            </ArticleCard>
          </div>
        </template>
  
        <template #right>
          <Aside :categories="categories" />
        </template>
      </LayoutRow>
    </div>
  </div>
</template>

<script setup lang="ts">

interface PostType {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
}

interface CategoryType {
  id: number;
  name: string;
  count: number;
  slug: string;
}

const { data: posts } = await useWordpressApi().getPosts<any>();
const { data: categories } = await useWordpressApi().getCategories<CategoryType[]>();
</script>

<style lang="scss" module>
.base-container {
  padding-inline: var(--space-400);
}

.news-posts-section {
  padding-block: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
}

.section-title {
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 0;
}

.left {
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
}

.dark, .aside {
  border: 4px solid var(--text-color-light);
}
</style>

