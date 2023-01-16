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

    <div class="main__right">
      <div class="card">
        <figure class="card__figure">
          <img class="card__image" src="https://placeholder.pics/svg/248x298" alt="ramdom image">
        </figure>

          <div class="card__body">
            <p class="card__body--date">APR, 2022</p>
            <h2 class="card__body--title">Loose and tight coupling in Software Design</h2>
            <button class="card__body--button">Read</button>
          </div>
      </div>
      <div class="card">
        <figure class="card__figure">
          <img class="card__image" src="https://placeholder.pics/svg/248x298" alt="ramdom image">
        </figure>

        <div class="card__body">
          <p class="card__body--date">APR, 2022</p>
          <h2 class="card__body--title">Loose and tight coupling in Software Design</h2>
          <button class="card__body--button">Read</button>
        </div>
      </div>
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

    &__right {
      display: flex;
      flex-direction: column;
      gap: 7.6rem;
      padding: 5.6rem 0;
      .card {
        display: flex;
        gap: 2.9rem;


        &__image {
          border-radius: 5px 5px 0 0;
        }


        &__body {
          padding: 1.6rem 0;
          width: 15.9rem;
          display: flex;
          flex-direction: column;
          gap: 1.6rem;

          &--date {
            font-size: 1.2rem;
            font-weight: 100;
          }
  
          &--title {
            font-size: 2.6rem;
            font-weight: 100;
          }
  
          &--button {
            background-color: #000;
            border: none;
            border-radius: 2rem;
            color: #ffffff;
            font-size: 1.2rem;
            font-weight: 800;
            cursor: pointer;
            padding: 0.9rem 2rem;
            transition: box-shadow 0.3s, background-color 0.3s ease-in-out, color 0.2s ease-in-out;
            
            &:hover {
              background-color: #ffffff;
              color: #000;
              box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
    }
  }
</style>