<template>
  <div :class="$style['card']">
    <figure :class="$style['card__figure']">
      <img :class="['card__image']" :src="image ? image : 'https://placeholder.pics/svg/248x298'" alt="ramdom image">
    </figure>

    <div :class="$style['card__body']">
      <p :class="$style['card__body--date']">{{ date }}</p>
      <h2 :class="$style['card__body--title']">{{ title }}</h2>
      <NuxtLink :to="to">
        <span :class="$style['card__body--button']">Read</span>
      </NuxtLink>
      <p :class="$style['card__body--author']">By - Yari Andres</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<
    {
      to: string;
      title: string;
      date: string;
      image?: string;
      description: string;
    }
  >();
</script>

<style lang="scss" module>
 .card {
    display: flex;
    gap: 2.9rem;
    border-radius: var(--radius-1);
    background: var(--blue-800);
    padding: 1.6rem 3.2rem;

    &__image {
      border-radius: 5px 5px 0 0;
    }

    &__body {
      padding: 1.6rem 0;
      display: flex;
      flex-direction: column;
      gap: 4.2rem;

      &--date {
        font-size: 1.6rem;
        font-weight: 100;
        color: var(--yell-200);
      }

      &--title {
        font-size: 2.6rem;
        font-weight: 700;
        letter-spacing: 1px;
        color: var(--yell-50);
      }

      a {
        text-decoration: none;
      }

      &--button {
        background-color: var(--blue-1000);
        border: none;
        border-radius: 2rem;
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 800;
        cursor: pointer;
        padding: 0.9rem 2rem;
        transition: box-shadow 0.3s, background-color 0.3s ease-in-out, color 0.2s ease-in-out;
        
        &:hover {
          background-color: var(--red-100);
          color: var(--blue-1000);
          box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.2);
        }
      }

      &--author {
        font-size: 1.6rem;
        font-weight: 100;
        color: var(--red-400);
      }
    }
  }
</style>