<template>
  <MainWrapper :bgColor="'var(--blue-1000)'">

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
          <h1 :class="$style['section__header']">Latest posts</h1>
          <BlogCardItem v-for="post in equalQuery" :key="post._path"
          :to="post._path"
          :title="post.title"
          :date="post.date.published || post.date.created"
          :image="post.image"
          :description="post.description"
        />
        </section>
        <aside :class="$style['aside']">
          <h2 :class="$style['aside__header']">Featured post</h2>
        </aside>
      </div>
    </div>

    <article></article>
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
    color: var(--blue-50);
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
    color: var(--blue-50);
    border-bottom: .1rem solid var(--red-800);
    border-top: .1rem solid var(--red-800);

    li {
      margin: 2.3rem 0;
      font-size: 2.2rem;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        color: #000000;
        text-decoration: underline;
        color: var(--yell-500);
      }
    }
  } 
  
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.6rem;
  
    .section {
      flex: 4;
      display: flex;
      flex-direction: column;
      gap: 3.6rem;
  
      &__header {
        margin-top: 4.8rem;
        font-size: 2.4rem;
        font-weight: 100;
        text-align: center;
        color: #FFF;
      }
    }
  
    .aside {
      flex: 2;
      background: #fff;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      &__header {
        margin-top: 4.8rem;
        font-size: 2.4rem;
        font-weight: 100;
        text-align: center;
      }
    }
  }
}



</style>