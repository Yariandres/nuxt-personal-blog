<template>
  <BlogNav />
  <NuxtPage />
</template>

<style>

:root {
  --bg-color-light: #fff;
  --text-color-dark: #000;

  --bg-color-dark: #000;
  --text-color-light: #fff;

}

.light {
  background-color: var(--bg-color-light);
  color: var(--text-color-dark);
}

.dark {
  background-color: var(--bg-color-dark);
  color: var(--text-color-light);
}
</style>
