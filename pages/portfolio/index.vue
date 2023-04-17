<template>
  <div :class="$style['base-container']">
    <div :class="$style['section']">
      <div :class="$style['carousel']">
        <div>
          <h2 :class="$style['heading']">Software</h2>
          <h2 :class="$style['heading']">& Developement</h2>
        </div>

        <div :class="$style['carousel__controls']">
          <IconArrowLeft />
          <IconArrowRight />
        </div>
      </div>

      <div :class="$style['carousel-cards']">
        <div :class="$style['carousel-cards__card']">
          <div :class="$style['carousel-cards__card__image']">
            <img src="https://picsum.photos/200/300" alt="image" />
          </div>
          <div :class="$style['carousel-cards__card__content']">
            <h3 :class="$style['carousel-cards__card__content__heading']">
              Project 1
            </h3>
            <p :class="$style['carousel-cards__card__content__description']">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              doloremque quae quidem nesciunt voluptatum. Quisquam, quae
              voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
            </p>
          </div>
        </div>
        <div :class="$style['carousel-cards__card']">
          <div :class="$style['carousel-cards__card__image']">
            <img src="https://picsum.photos/200/300" alt="image" />
          </div>
          <div :class="$style['carousel-cards__card__content']">
            <h3 :class="$style['carousel-cards__card__content__heading']">
              Project 2
            </h3>
            <p :class="$style['carousel-cards__card__content__description']">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              doloremque quae quidem nesciunt voluptatum. Quisquam, quae
              voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
            </p>
          </div>
        </div>
        <div :class="$style['carousel-cards__card']">
          <div :class="$style['carousel-cards__card__image']">
            <img src="https://picsum.photos/200/300" alt="image" />
          </div>
          <div :class="$style['carousel-cards__card__content']">
            <h3 :class="$style['carousel-cards__card__content__heading']">
              Project 3
            </h3>
            <p :class="$style['carousel-cards__card__content__description']">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
              doloremque quae quidem nesciunt voluptatum. Quisquam, quae
              voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.base-container {
  padding-inline: var(--space-400);
}

.heading {
  font-size: 6.8rem;
  margin: 0;
  padding: 0;
}

.section {
  height: 70dvh;
}

.carousel {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &__controls {
    display: flex;
    gap: 1.6rem;
  }
}

.carousel-cards {
  display: flex;
  gap: 1.6rem;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &__card {
    scroll-snap-align: start;
    width: 40rem;
    height: 30rem;
    background-color: var(--color-background);
    border-radius: var(--border-radius-200);
    padding: var(--space-200);
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    &__image {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: var(--border-radius-200);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      &__heading {
        font-size: 2.4rem;
        font-weight: 600;
        margin: 0;
        padding: 0;
      }

      &__description {
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>