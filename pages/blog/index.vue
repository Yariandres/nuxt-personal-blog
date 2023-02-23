<template>
  <MainWrapper :bgColor="'var(--blue-1000)'">
      <div :class="$style['row']">
        <section :class="$style['section']">
          <BlogCardItem v-for="post in equalQuery" :key="post._path"
          :to="post._path"
          :title="post.title"
          :date="post.date.published || post.date.created"
          :image="post.image"
          :description="post.description"
        />
        </section>

        <aside :class="$style['aside']">
          <div :class="$style['category']">
            <h2 :class="$style['category__header']">Categories</h2>
            <ul :class="$style['category__list']">
              <li v-for="(category, index) in ['tech', 'css', 'vue', 'react', 'next', 'sass', 'news']" :key="index">
                {{category}}
              </li>
            </ul>
          </div>
        </aside>
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

  .header {
    font-size: 2.4rem;
    font-weight: 200;
    text-align: center;
    letter-spacing: 2px;
    padding-block: 1.6rem;
    color: var(--blue-50);
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
  
    }
  
    .aside {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;


      .category {
        border: 2px solid var(--red-200);
        border-radius: var(--radius-2);
        text-align: center;
        padding-block: 2.9rem;

        &__header {
          font-size: 2.4rem;
          font-weight: 100;
          color: var(--blue-50);
          margin-block-end: 1.6rem;
        }
  
        &__list {
          list-style: none;
          padding: 0;
          margin: 0;
          color: var(--blue-50);

          li {
            font-size: 2.2rem;
            font-weight: 500;
            cursor: pointer;
            text-transform: uppercase;
            

            &:hover {
              text-decoration: underline;
              color: var(--yell-500);
            }
          }
        }
      }
    }
  }
</style>