<template>
  <div class="container w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
    <BlogNav />
    <NuxtPage />
  </div>
</template>

<style>
body {
  background-color: #000000;
}

.container {
  @apply mx-auto max-w-5xl px-10 sm:px-0;
}
</style>