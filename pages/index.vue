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

.aside {
  flex: 2;
  background-color: aqua;
}
</style>

