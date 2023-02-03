<template>
  <div :class="$style['main']">
    <slot/>
  </div>
</template>

<style lang="scss" module>
.main {
    display: grid;
    grid-template-columns: 3fr 3fr;
    background-color: #D0CBC5;
    border-radius: 1rem;
    padding: 5.6rem 0;
}
</style>