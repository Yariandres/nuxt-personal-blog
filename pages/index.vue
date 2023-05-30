<template>
  <div :class="$style['container']" class="animated">
    <div :class="$style['left']">
      <div :class="$style['description']">
        <h1 :class="$style['heading']">
          Empowering Businesses through Custom Software <br />
          <span class="cd-headline rotate-1">
            <span class="cd-words-wrapper">
              <b
                :class="[isActive[0] ? 'is-visible' : 'is-hidden']"
                height="200"
                style="color: burlywood"
                >Excellence</b
              >
              <b
                :class="[isActive[1] ? 'is-visible' : 'is-hidden']"
                style="color: chocolate"
                >Innovation</b
              >
              <b
                :class="[isActive[2] ? 'is-visible' : 'is-hidden']"
                style="color: palevioletred"
                >Success</b
              >
            </span>
          </span>
        </h1>

        <p class="subtitle">
          Trust in our unwavering commitment to quality, reliability, and
          unparalleled support. Together, we'll embark on a transformative
          journey, paving the way for your success.
        </p>
      </div>

      <div :class="$style['buttons']">
        <div :class="$style['button']">
          <NuxtLink to="/contact">Got a project?</NuxtLink>
        </div>

        <div :class="$style['button']" data-style="border">
          <NuxtLink to="/contact">Let's talk</NuxtLink>
        </div>
      </div>

      <div :class="$style['info']">
        <ul>
          <li><a href="tel:+77 022 444 05 05">+48 008 301 990</a></li>
          <li><a href="mailto:support@elisc.com">support@codigo.com</a></li>
          <li>
            <p
              ref="locationText"
              :to="googleAddress"
              :class="$style['address']"
              @click="openLocation"
            >
              Poznan, Greater Poland
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div :class="$style['right']">
      <div :class="$style['image-holder']">
        <img src="~/assets/img/about/2.png" alt="image thumbnail" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

// interface PostType {
//   id: number;
//   date: string;
//   title: {
//     rendered: string;
//   };
//   excerpt: {
//     rendered: string;
//   };
//   slug: string;
// }

// interface CategoryType {
//   id: number;
//   name: string;
//   count: number;
//   slug: string;
// }

const locationText = ref<HTMLElement>();
const googleAddress = ref<string>();
const isActive = ref([true, false, false]);

watchEffect((onInvalidate) => {
  const interval = setInterval(() => {
    const [first, second, third] = isActive.value;

    isActive.value = [second, third, first];
  }, 2500);

  onInvalidate(() => {
    clearInterval(interval);
  });
});

const openLocation = () => {
  const address = locationText.value?.textContent?.replace(/\ /g, "+");
  const text = "https://maps.google.com?q=";
  window.open(text + address);
};

// const { data: posts } = await useWordpressApi().getPosts<any>();
// const { data: categories } = await useWordpressApi().getCategories<
//   CategoryType[]
// >();
</script>

<style lang="scss" module>
@import "~/css/plugins.css";

.container {
  padding: 50px;

  overflow-y: scroll;
  scroll-behavior: smooth;

  overflow-y: scroll;
  scroll-behavior: smooth;
  display: flex;
  gap: 16px;
  background-color: #7aebbe3e;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 3rem;
      margin-block-start: 1.6rem;

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    .heading {
      font-size: 50px;
      line-height: 50px;
      color: var(--main-color);

      @media (max-width: 768px) {
        text-align: center;
      }

      .blue-text {
        color: pink !important;
        color: chocolate;
      }
    }

    .buttons {
      display: flex;
      gap: 16px;

      @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        margin-block: 32px;
      }

      .button {
        a {
          color: var(--main-color);
          display: inline-block;
          border: 1.5px solid var(--main-color);
          border-radius: 50px;
          padding: 9px 40px;
          white-space: nowrap;
          background-color: #fff;

          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;

          &:hover {
            background-color: var(--main-color);
            color: #fff;
            transform: translateY(-5px);
            box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
            -webkit-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
            -moz-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
          }
        }
      }
    }

    .info {
      border-left: 4px solid var(--yellow-color);
      padding-inline-start: 16px;

      a {
        color: var(--main-color);
        font-weight: 600;
        font-size: 18px;

        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -ms-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .address {
        cursor: pointer;
        color: #ef982e;
        font-weight: 600;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
