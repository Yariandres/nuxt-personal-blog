<template>
  <div :class="$style['testimonials']">
    <div :class="$style['testimonials__top']">
      <p :class="$style['testimonials__title']">- testimonial</p>
      <h3 :class="$style['testimonials__heading']">What client's say?</h3>
    </div>

    <swiper
      :class="$style['my-swiper']"
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <swiper-slide>
        <div :class="$style['testimonial']">
          <p :class="$style['testimonial__text']">
            I rarely like to write reviews, but the Marketify team truly deserve
            a standing ovation for their customer support, customisation and
            most importantly, friendliness and professionalism.
          </p>
          <div :class="$style['testimonial__row']">
            <img
              :class="$style['testimonial__image']"
              src="~/assets/img/experience/1.jpg"
              alt=""
            />
            <div>
              <p :class="$style['testimonial__name']">John Doe</p>
              <p :class="$style['testimonial__job']">CEO at Design labs</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div :class="$style['testimonial']">
          <p :class="$style['testimonial__text']">
            I rarely like to write reviews, but the Marketify team truly deserve
            a standing ovation for their customer support, customisation and
            most importantly, friendliness and professionalism.
          </p>
          <div :class="$style['testimonial__row']">
            <img
              :class="$style['testimonial__image']"
              src="~/assets/img/experience/1.jpg"
              alt=""
            />
            <div>
              <p :class="$style['testimonial__name']">John Doe</p>
              <p :class="$style['testimonial__job']">CEO at Design labs</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div :class="$style['testimonial']">
          <p :class="$style['testimonial__text']">
            I rarely like to write reviews, but the Marketify team truly deserve
            a standing ovation for their customer support, customisation and
            most importantly, friendliness and professionalism.
          </p>
          <div :class="$style['testimonial__row']">
            <img
              :class="$style['testimonial__image']"
              src="~/assets/img/experience/1.jpg"
              alt=""
            />
            <div>
              <p :class="$style['testimonial__name']">John Doe</p>
              <p :class="$style['testimonial__job']">CEO at Design labs</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div :class="$style['testimonial']">
          <p :class="$style['testimonial__text']">
            I rarely like to write reviews, but the Marketify team truly deserve
            a standing ovation for their customer support, customisation and
            most importantly, friendliness and professionalism.
          </p>
          <div :class="$style['testimonial__row']">
            <img
              :class="$style['testimonial__image']"
              src="~/assets/img/experience/1.jpg"
              alt=""
            />
            <div>
              <p :class="$style['testimonial__name']">John Doe</p>
              <p :class="$style['testimonial__job']">CEO at Design labs</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style lang="scss" module>
.testimonials {
  padding-block: 50px;
  padding-inline: 100px;
  text-align: center;
  background-color: #fff4f6;
  border-radius: 10px;

  &__top {
    margin-block-end: 46px;
  }

  &__title {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    color: inherit;
  }

  &__heading {
    font-weight: 800;
    font-size: 40px;
    color: black;
  }
}

.testimonial {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-block-end: 62px;

  &__text {
    font-size: 24px;
    font-weight: 400;
    line-height: 45px;
  }

  &__row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  &__image {
    width: 70px;
    height: auto;
    border-radius: 50%;
    border: 4px solid white;
  }

  &__name {
    font-size: 30px;
    font-weight: 500;
    color: black;
  }

  &__job {
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
