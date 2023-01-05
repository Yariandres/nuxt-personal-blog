<template>
  <nav>
    <div class="nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/awards">Awards</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/contact">Contacts</NuxtLink>
    </div>
    <Logo/>
  </nav>
</template>

<style lang="scss">

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.7rem;
  margin-top: 5.6rem;
  margin-bottom: 2.1rem;

  a {
    font-size: 1.8rem;
    font-weight: normal;
    text-decoration: none;
    color: black;

    :visited {
      color: black;
    }

  };

  .router-link-exact-active {
    text-decoration: underline;
  }
}
</style>