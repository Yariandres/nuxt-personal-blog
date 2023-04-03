<template>
  <div :class="$style['base-container']">
    <h1>All posts</h1>
    <div>
      sort by:
      <!-- <select v-model="sortBy"> -->
      <select>
        <option value="date">Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">

// TODO - sort by date and title

// const sortby = () => {
//   if (sortBy === 'date') {
//     return posts.value.sort((a, b) => {
//       return new Date(b.date).getTime() - new Date(a.date).getTime();
//     });
//   } else if (sortBy === 'title') {
//     return posts.value.sort((a, b) => {
//       return a.title.rendered.localeCompare(b.title.rendered);
//     });
//   }
// }
 </script>

<style lang="scss" module>
.base-container {
  padding-inline: var(--space-400);
}

</style>