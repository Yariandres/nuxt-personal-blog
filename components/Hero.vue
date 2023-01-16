<template>
  <div class="main">
    <div class="main__left">
      <p class="main__left--header">BL</p>
      <p class="main__left--header margin-left">OG-</p>
      <p class="main__left--header">NEW</p>
      <p class="main__left--header light">S</p>
      <div class="main__left__absolute">
        <p class="main__left__absolute--text">Latest news</p>
        <p class="main__left__absolute--text margin-left">and updates</p>
      </div>
    </div>

    <div>
      blog items 
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .main {
    display: grid;
    grid-template-columns: 3fr 3fr;

    margin-top: 2rem;
    background-color: #D0CBC5;
    border-radius: 1rem;

    &__left {
      display: flex;
      flex-direction: column;
      border-radius: 1rem;
   
      padding: 8rem 7.2rem;
      position: relative;

      &--header {
        font-size: 11.8rem;
        font-weight: regular;
        line-height: 8rem;
      }
      &--header.margin-left {
        margin-left: 2.4rem;
        color: #ffffff;
      }
      &--header.light{
        color: #ffffff;
      }

      &__absolute {
        position: absolute;
        top: 34rem;
        left: 16rem;

        &--text {
          font-size: 2.4rem;
          font-weight: 100;
        }
        &--text.margin-left {
          margin-left: 2.4rem;
        }
      }
    }
  }
</style>