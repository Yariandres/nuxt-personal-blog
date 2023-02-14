<template>
  <MainWrapper :bgColor="'#E3F1ED'">
    <!-- <div :class="$style['left']">
      <HeroHeaderItem 
        :text-one="'BL'" 
        :text-two="'OG'" 
        :text-three="'NEW'" 
        :text-four="'S'"
        :text-five="'Latest news'"
        :text-six="'and updates'"
      />
    </div> -->

    <!-- <div :class="$style['right']">
      <BlogCardItem v-for="post in equalQuery" :key="post._path"
        :to="post._path"
        :title="post.title"
        :date="post.date.published || post.date.created"
        :image="post.image"
        :description="post.description"
      />
    </div> -->
    <div :class="$style['container']">
      <nav>
        <h1 :class="$style['header']">Categories</h1>
        <ul :class="$style['list']">
          <li v-for="(category, index) in ['tech', 'css', 'vue', 'react', 'next', 'sass', 'news']" :key="index">
            {{category}}
          </li>
        </ul>
      </nav>

      <div :class="$style['row']">
        <section :class="$style['section']">
          <h1 :class="$style['section__header']">Posts</h1>
          <BlogCardItem v-for="post in equalQuery" :key="post._path"
          :to="post._path"
          :title="post.title"
          :date="post.date.published || post.date.created"
          :image="post.image"
          :description="post.description"
        />
        </section>
        <aside :class="$style['aside']">jklfjldksfjkdsfjklkj</aside>
      </div>
    </div>

    <aticle></aticle>
  </MainWrapper>
</template>

<script setup>
  const { data: equalQuery } = await useAsyncData("equal", () => {
    return queryContent("/").find();
  });
</script>

<style lang="scss" module>

.container {
  display: flex; 
  flex-direction: column;
  gap: 2rem;
  .header {
    font-size: 2.4rem;
    font-weight: 200;
    text-align: center;
    letter-spacing: 2px;
    padding-block: 1.6rem;
    // text outline
    -webkit-text-stroke: 1px #0000002b;
  }
  
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding-inline: 3.2rem;
    background-color: #FFF;  
  
    li {
      margin: 1rem 0;
      font-size: 2.2rem;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        color: #000000;
        text-decoration: underline;
      }
    }
  } 
  
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  
    .section {
      background: #fff;
      flex: 4;
  
      &__header {
        font-size: 2.4rem;
        font-weight: 100;
        text-align: center;
      }
    }
  
    .aside {
      flex: 2;
      background: #fff;
    }
  }
}



</style>