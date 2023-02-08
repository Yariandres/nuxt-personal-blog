<template>
  <MainWrapper :bgColor="'#D0CBC5'">
    <div :class="$style['left']">
      <HeroHeaderItem 
        :text-one="'BL'" 
        :text-two="'OG'" 
        :text-three="'NEW'" 
        :text-four="'S'"
        :text-five="'Latest news'"
        :text-six="'and updates'"
      />
    </div>

    <div :class="$style['right']">
      <BlogCardItem v-for="post in equalQuery" :key="post._path"
        :to="post._path"
        :title="post.title"
        :date="post.date.published || post.date.created"
        :image="post.image"
        :description="post.description"
      />
    </div>
  </MainWrapper>
</template>

<script setup>
  const { data: equalQuery } = await useAsyncData("equal", () => {
    return queryContent("/").find();
  });
</script>

<style lang="scss" module>
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 7.6rem;
  padding: 5.6rem 0;
}
</style>