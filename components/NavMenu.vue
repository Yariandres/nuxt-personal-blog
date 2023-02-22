<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/blog">Blog</NuxtLink>
    <NuxtLink to="/awards">Awards</NuxtLink>
    <NuxtLink to="/projects">Projects</NuxtLink>
    <NuxtLink to="/contact">Contacts</NuxtLink>
  </nav>
</template>

<style lang="scss">

nav {
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  margin-block: 1.8rem;
  
  a {
    font-size: 2.1rem;
    font-weight: normal;
    text-decoration: none;
    color: var(--blue-50);
    z-index: 10;
    
    :visited {
      color: black;
    }

    &:hover {
      color: var(--blue-500);
    }

  }
  .router-link-exact-active {
    text-decoration: underline;
  }
}
</style>