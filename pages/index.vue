<template>
  <div :class="$style['section']" class="animated">
    <div :class="$style['left']">
      <div :class="$style['description']">
        <h1 :class="$style['heading']">
          Hi, I'm Yari Herrera <br />
          <span class="cd-headline rotate-1">
            <span>Creative </span>
            <span class="cd-words-wrapper">
              <b>Designer</b>
              <b >Coder</b>
              <b class="is-visible">Player</b>
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
            <a :class="$style['href_location']" :to="locationButton">Ave Street Avenue, New York</a>
          </li>
        </ul>
      </div>
    </div>

    <div :class="$style['right']">
      <img src="~/assets/img/about/2.jpg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
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

  const locationButton = ref<string>('');

  

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

    &::-webkit-scrollbar {
      display: none;
    }

    .heading {
      font-size: 50px;
      line-height: 50px;
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
      }
      .buttons {
        display: flex;
        gap: 16px;
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
      }
    }
  }
</style>
