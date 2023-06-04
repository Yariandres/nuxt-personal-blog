<template>
  <div :class="$style['carousel']">
    <swiper :slides-per-view="slides" :space-between="30" :modules="[Thumbs]">
      <swiper-slide>
        <div :class="$style['card']">
          <img
            :class="$style['card__image']"
            src="~/assets/img/portfolio/tasty-task.png"
            alt=""
          />
          <div @click="$router.push('/portfolio/0')">
            <p :class="$style['card__title']">Verseo</p>
            <p :class="$style['card__name']">Tasty Tasks</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div :class="$style['card']">
          <img
            :class="$style['card__image']"
            src="~/assets/img/portfolio/maybelline.png"
            alt=""
          />
          <div @click="$router.push('/portfolio/1')">
            <p :class="$style['card__title']">Loreal</p>
            <p :class="$style['card__name']">Maybelline</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div :class="$style['card']">
          <img
            :class="$style['card__image']"
            src="~/assets/img/portfolio/interflora.png"
            alt=""
          />
          <div @click="$router.push('/portfolio/2')">
            <p :class="$style['card__title']">Interflora</p>
            <p :class="$style['card__name']">Interflora France</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// https://swiperjs.com/vue

const slides = ref<number>(3);

const checkMobileSize = () => {
  if (window.innerWidth < 678) {
    slides.value = 1;
  } else if (window.innerWidth < 1040) {
    slides.value = 2;
  } else if (window.innerWidth > 1040) {
    slides.value = 3;
  }
};

onMounted(() => {
  checkMobileSize();
  window.addEventListener("resize", checkMobileSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobileSize);
});
</script>

<style lang="scss" module>
@import "~/css/animations.scss";
.carousel {
  cursor: pointer;
}
.card {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__image {
    border-radius: 5px;
    object-fit: cover;
  }

  &__title {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    color: solid var(--main-color);
  }

  &__name {
    font-size: 19px;
    color: var(--main-color);
    font-weight: 700;
    position: relative;
    width: fit-content;

    &:hover::before {
      content: "";
      width: 100%;
      height: 2px;
      background-color: var(--main-color);
      position: absolute;
      bottom: 0;
      left: 0;
      animation: slide-in 0.3s ease-in-out forwards;
    }
  }
}
</style>
