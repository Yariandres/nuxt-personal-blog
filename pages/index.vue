<template>
  <main>
    <HomeHero />
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
  </main>
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
.col {
  flex: 4;
}

.aside {
  flex: 2;
  background-color: aqua;
}
</style>

