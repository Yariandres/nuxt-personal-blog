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
    <div class="projects">
      <pages-home-prejects
        v-for="(project, index) in data"
        :key="project.id"
        :project="project"
        :index="index"
      />
    </div>
    <section-title :title="'Contact'" />
    <pages-home-form />
  </main>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 160px;

  @media (max-width: 1130px) {
    gap: 70px;
  }
}
</style>
