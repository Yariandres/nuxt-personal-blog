<template>
  <div :class="$style['section']" class="animated">
    <div :class="$style['left']">
      <div :class="$style['description']">
        <h1 :class="$style['heading']">
          Hi, I'm Yari <br />
          <span class="cd-headline rotate-1">
            <span>Creative </span>
            <span class="cd-words-wrapper">
              <b :class="[isActive[0] ? 'is-visible' : 'is-hidden']" style="color: blue">Designer</b>
              <b :class="[ isActive[1] ? 'is-visible' : 'is-hidden']" style="color: orange">Coder</b>
              <b :class="[ isActive[2] ? 'is-visible' : 'is-hidden']" style="color: red">Player</b>
            </span>
          </span>
        </h1>

        <p class="subtitle">
          I'm a Florida based web designer &amp; front‑end developer with
          <span class="blueColor">10+ years</span> of experience
        </p>
      </div>

      <div :class="$style['buttons']">
        <div :class="$style['button']">
          <NuxtLink to="/portfolio">Got a project?</NuxtLink>
        </div>

        <div :class="$style['button']" data-style="border">
          <NuxtLink  to="/contact">Let's talk</NuxtLink>
        </div>
      </div>

      <div :class="$style['info']">
        <ul>
          <li><a href="tel:+77 022 444 05 05">+77 022 444 05 05</a></li>
          <li><a href="mailto:support@elisc.com">support@elisc.com</a></li>
          <li>
            <p ref="locationText" :to="googleAddress" :class="$style['address']" @click="openLocation">Ave Street Avenue, New York</p>
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
import { ref, watchEffect} from 'vue';

  interface PostType {
    id: number;
    date: string;
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    slug: string;
  }

  interface CategoryType {
    id: number;
    name: string;
    count: number;
    slug: string;
  }

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
    const address = locationText.value?.textContent?.replace(/\ /g, '+');
    const text = 'https://maps.google.com?q=';
    window.open(text + address);
  }

  const {data: posts} = await useWordpressApi().getPosts<any>();
  const {data: categories} = await useWordpressApi().getCategories<
    CategoryType[]
  >();


</script>

<style lang="scss" module>
  @import '~/css/plugins.css';
  .section {
    padding: 50px;
    height: 100vh;
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

        @media (max-width: 768px) {
          text-align: center;
        }

        .blue-text {
          color: pink !important;
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
            color: inherit;
            // background-color: #130F49;
            display: inline-block;
            border: 1.5px solid #130F49;
            border-radius: 50px;
            padding: 9px 40px;
            white-space: nowrap;
            
            -webkit-transition: all .3s ease;
              -moz-transition: all .3s ease;
                -ms-transition: all .3s ease;
                -o-transition: all .3s ease;
                    transition: all .3s ease;
            
            &:hover {
              background-color: #130F49;
              color: #fff;
            }
          }
        }
      }     

      .info { 
        border-left: 4px solid var(--yellow-color);
        padding-inline-start: 16px;

        a {
          color: #130f49;
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
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: -1px 9px 25px -5px rgba(0,0,0,0.1);
        -webkit-box-shadow: -1px 9px 25px -5px rgba(0,0,0,0.1);
        -moz-box-shadow: -1px 9px 25px -5px rgba(0,0,0,0.1);
      }
    }
  }

</style>
