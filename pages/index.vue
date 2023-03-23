<template>
  <HomeHero />
  <div :class="$style['row']">
    <h2 :class="$style['heading']">Clients</h2>
    <div :class="$style['images-container']">
      <img src="~/assets/svg/maybellin.svg" alt="logo">
      <img src="~/assets/svg/roche-logo-white.png" alt="logo" width="80">
      <img src="~/assets/img/verseo-logo-dark.svg" alt="logo" width="100">
      <img src="~/assets/img/seargin.jpeg" alt="logo" width="80">
    </div>
  </div>
    <BaseContainer>
      <BaseLayoutRow>
        <div :class="$style['col']">
          <ArticleCard v-for="post in posts" :key="post.id" 
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
          aside section
        </aside>
      </BaseLayoutRow>
    </BaseContainer>
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

const { data: posts } = await useWordpressApi().getPosts<WordpressPost[]>();

</script>

<style lang="scss" module>
.row {
  padding-block: 6.4rem;
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

.aside {
  flex: 2;
  background-color: aqua;
}
</style>

