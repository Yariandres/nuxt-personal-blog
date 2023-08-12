<script setup lang="ts">
import projects from '~/data/project.json';

type Projects = {
  id: string;
  name: string;
  description: string;
};

const data = ref<Projects[]>(projects.data);
</script>

<template>
  <main>
    <pages-home-hero />
    <pages-home-prejects
      v-for="project in data"
      :key="project.id"
      :project="project"
    />
  </main>
</template>
