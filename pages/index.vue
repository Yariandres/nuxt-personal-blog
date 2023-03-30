<template>
  <div :class="$style['base-container']">
    <HomeHero />
    <hr>
    <ClientsSection />
    <hr>
    <div :class="$style['news-posts-section']">
      <h2 :class="$style['section-title']">News and Posts </h2>
      <LayoutRow>
        <template #left>
          <div :class="$style['col']">
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
          <aside :class="$style['aside']">
          <h2 :class="$style['title']">Categories</h2>
          <div v-for="category in categories" :key="category.id" :class="$style['categories']">
            <NuxtLink to="#!" :class="$style['link']">{{ category.name }}</NuxtLink>
            <p :class="$style['count']">{{ category.count }}</p>
          </div>
        </aside>
        </template>
  
      </LayoutRow>
    </div>
  </div>
</template>

<script setup lang="ts">

interface PostType {
  // key vaue pairs
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

console.log(posts);
</script>

<style lang="scss" module>
.base-container {
  padding-inline: 4rem;
}

.news-posts-section {
  padding-block: 4.8rem;
}

.section-title {
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 0;
}

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

  .link {
    font-size: 1.9rem;
    font-weight: 700;
    color: var(--text-color-red-0);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    // margin-block-end: 2.8rem;

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

  .categories {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.dark, .aside {
  border: 4px solid var(--text-color-light);
}
</style>

