<template>
  <nav class="nav">
    <div class="left">
      <Logo :fill="'var(--green-300)'" :width="100" :height="100"/>
    </div>

    <div class="right">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/awards">Awards</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/contact">Contacts</NuxtLink>
    </div>
  </nav>
</template>

<style lang="scss">

.center-items {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  display: flex;
  justify-content: space-evenly;

  .left {
    background-color: var(--blue-1000);
    flex: 2;
    @extend .center-items;
  }

  .right {
    @extend .center-items;
    justify-content: space-around;
    background-color: var(--blue-1000);
    position: relative;
    flex: 2;
    
    a {
      font-size: 2.1rem;
      font-weight: normal;
      text-decoration: none;
      color: var(--green-50);
      
      :visited {
        color: black;
      }

    };
    .router-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>