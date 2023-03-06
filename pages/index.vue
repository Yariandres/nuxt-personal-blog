<template>
  <main>
    <HomeHero />
    <div :class="$style['row']">
      <article :class="$style['article']">
        <p>September 5, 2023</p>
        <h2>Crafting a design system for the multidisciplinary future</h2>
        <p>Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.</p>
        <NuxtLink to="#">Read article</NuxtLink>
      </article>

      <aside :class="$style['aside']">
        aside section
      </aside>

    </div>
  </main>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.row {
  display: flex;
  gap: 2rem;

  .article {
    flex: 3;
    padding: 2rem;
    border: 1px solid transparent;
    border-radius: 2rem;

    &:hover {
      background-color: #474545;
      transition: background-color 0.5s ease;
    }
  }

  .aside {
    flex: 2;
  }
}
</style>

