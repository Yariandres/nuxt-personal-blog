<template>
  <HomeHero />
  <div :class="$style['row']">
    <BaseLayoutVerticle :gap="6.2">
      <h2 :class="$style['heading']">Past Clients</h2>
      <div :class="$style['images-container']">
        <div :class="$style['holder']">
          <img src="~/assets/svg/maybellin.svg" alt="logo">
        </div>

        <div :class="$style['holder']">
          <img src="~/assets/svg/roche-logo-white.png" alt="logo" width="80">
        </div>

        <img src="~/assets/svg/interflora.svg" alt="logo" width="150">

        <div :class="$style['holder']">
          <img src="~/assets/img/verseo-logo-dark.svg" alt="logo" width="100">
        </div>

        <img src="~/assets/img/seargin.jpeg" alt="logo" width="100">
      </div>
    </BaseLayoutVerticle>
  </div>
  <BaseContainer>
    <h2 :class="$style['section-title']">News and Posts </h2>
    <BaseLayoutRow>
      <div :class="$style['col']">
        <ArticleCard 
          v-for="post in postArr" 
          :key="post.id" 
          :date="post.date
            .split('T')[0]
            .split('-')
            .reverse()
            .join('.')" 
          :title="post.title.rendered
            .replace(/(<([^>]+)>)/gi, '')
            .replace(/&nbsp;/gi, ' ')" 
          :description="post.excerpt.rendered
            .replace(/(<([^>]+)>)/gi, '')
            .replace(/&nbsp;/gi, ' ')
            .substring(0, 200) + '...'" 
          :slug="post.slug">
        </ArticleCard>
      </div>

      <aside :class="$style['aside']">
        <h2 :class="$style['title']">Categories</h2>
        <div v-for="category in categories" :key="category.id" :class="$style['categories']">
          <NuxtLink to="!" :class="$style['link']">{{ category.name }}</NuxtLink>
          <p :class="$style['count']">{{ category.count }}</p>
        </div>
      </aside>
    </BaseLayoutRow>
  </BaseContainer>
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

const { data: posts } = await useWordpressApi().getPosts<PostType>();
const { data: categories } = await useWordpressApi().getCategories<CategoryType[]>();

const postArr = posts.value?.splice(0, 3)
</script>

<style lang="scss" module>
.row {
  padding-block: 6.4rem;
}

.holder {
  height: 100px;
  background-color: var(--bg-dark-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 1.6rem;
  border-radius: 1rem;
}

.col {
  flex: 4;
}

.images-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-block-end: 6.4rem;
}

.heading {
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
}

.section-title {
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin-block-end: 8.4rem;
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

