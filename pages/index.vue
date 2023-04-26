<template>
<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fuga quis sapiente odit dolores error. Recusandae omnis ipsum soluta dignissimos cum accusantium eius labore molestias id? Qui cumque corporis reiciendis!</div> 

</template>

<script setup lang="ts">

interface PostType {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
}

interface CategoryType {
  id: number;
  name: string;
  count: number;
  slug: string;
}

const { data: posts } = await useWordpressApi().getPosts<any>();
const { data: categories } = await useWordpressApi().getCategories<CategoryType[]>();
</script>

<style lang="scss" scoped>
div {
  padding: 50px;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

