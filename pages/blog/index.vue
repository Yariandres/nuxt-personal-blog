<template>
  <div :class="$style['base-container']">
    <LayoutFlexColumn :gap="2.8">
      <h1 :class="$style['title']">All posts</h1>
      <div :class="$style['flex']">
        <div :class="$style['flex-item-1']">
          <BaseTextInput
            :label="'Search by title'"
            :id="'search'"
            type="text"
            v-model="search"
          />
        </div>

        <div :class="$style['flex-item-2']">
          <BaseSelectInput
            :label="'Sort by'"
            :options="['Newest', 'Oldest']" :id="'sort'"
            v-model="sortBy"
          />
        </div>
      </div>

      <LayoutFlexColumn :gap="3.2">
        <ArticleCard
          v-for="post in filteredPosts" 
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
const sortBy = ref('');

// get all posts
const { data: posts } = await useWordpressApi().getPosts<any>();

const searchByTitle = (post: any) => {
  return post.title.rendered.toLowerCase().includes(search.value.toLowerCase());
}

// Usage
const filteredPosts = computed(() => {
  if (!search.value) {
    return posts.value;
  }
  return posts.value?.filter(searchByTitle);
});

</script>

<style lang="scss" module>
.base-container {
  padding-inline: 4rem;
}

.flex {
  display: flex;
  gap: 2.8rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.flex-item-1 {
  min-width: 50rem;
}
.flex-item-2 {
  min-width: 20rem;
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