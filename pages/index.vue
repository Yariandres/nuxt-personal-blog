<script setup lang="ts">
import projects from '~/data/project.json';

type Projects = {
  id: string;
  name: string;
  description: string;
  tech: string[];
};

const data = ref<Projects[]>(projects.data);
</script>

<template>
  <main>
    <pages-home-hero />
    <section-title :title="'Projects'" />
    <pages-home-prejects
      v-for="(project, index) in data"
      :key="project.id"
      :project="project"
      :index="index"
    />
    <section-title :title="'Contact'" />
    <pages-home-form />
  </main>
</template>
