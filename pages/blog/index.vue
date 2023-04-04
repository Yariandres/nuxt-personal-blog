<template>
  <div :class="$style['base-container']">
    <LayoutFlexColumn :gap="2.8">
      <h1 :class="$style['title']">All posts</h1>
      <LayoutFlexRow>
        <LayoutFlexColumn :gap="1">
          <label for="search">Search post</label>
          <input type="text" v-model="search" placeholder="Search posts" id="search"/>
        </LayoutFlexColumn>

        <LayoutFlexColumn :gap="1">
          <label for="select">sort by:</label> 
          <select v-model="sortBy" id="select">
            <option value="latest">newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </LayoutFlexColumn>
      </LayoutFlexRow>
      <LayoutFlexColumn :gap="3.2">
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
      </LayoutFlexColumn>
    </LayoutFlexColumn>
  </div>
</template>

<script setup lang="ts">

const search = ref('');
const sortBy = ref('latest');

// get all posts
const { data: posts } = await useWordpressApi().getPosts<any>();

</script>

<style lang="scss" module>
.base-container {
  padding-inline: 4rem;
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
}

.title {
    font-size: 2.4rem;
    font-weight: 800;
    text-align: center;
  }

</style>