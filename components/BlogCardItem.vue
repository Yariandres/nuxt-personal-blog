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
    background: var(--brown-300);
    border-radius: var(--radius-1);
    padding: 1.6rem;

    &__image {
      border-radius: 5px 5px 0 0;
    }

    &__body {
      padding: 1.6rem 0;
      // width: 15.9rem;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      &--date {
        font-size: 1.2rem;
        font-weight: 100;
      }

      &--title {
        font-size: 2.6rem;
        font-weight: 500;
      }

      &--button {
        background-color: var(--blue-800);
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
</style>