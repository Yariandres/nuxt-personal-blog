<template>
  <div :class="$style['section']" class="animated">
    <div>
      <h1 :class="$style['heading']">
        Hi, I'm Yari Herrera <br />
        <span class="cd-headline rotate-1"
          ><!-- ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  -->
          <span>Creative </span>
          <span class="cd-words-wrapper">
            <b>Designer</b>
            <b >Coder</b>
            <b class="is-visible">Player</b>
          </span>
        </span>
      </h1>

      <div class="subtitle">
        <p>
          I'm a Florida based web designer &amp; front‑end developer with
          <span class="blueColor">10+ years</span> of experience
        </p>
      </div>

      <div class="buttons">
        <div class="elisc_tm_button transition_link">
          <a href="#portfolio">Got a project?</a>
        </div>
        <div class="elisc_tm_button transition_link" data-style="border">
          <a href="#contact">Let's talk</a>
        </div>
      </div>

      <div class="info">
        <ul>
          <li><a href="tel:+77 022 444 05 05">+77 022 444 05 05</a></li>
          <li><a href="mailto:support@elisc.com">support@elisc.com</a></li>
          <li>
            <a class="href_location" href="#">Ave Street Avenue, New York</a>
          </li>
        </ul>
      </div>
    </div>

    <div>
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
  }

  .elisc_tm_button {
    width: 100%;
    float: left;
  }
  .elisc_tm_button a {
    color: #fff;
    background-color: #130f49;
    display: inline-block;
    border: 1.5px solid #130f49;
    border-radius: 4px;
    padding: 9px 40px 9px 40px;
    white-space: nowrap;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  // .elisc_tm_button a:hover {
  //   background-color: transparent;
  //   color: #55527c;
  // }
  // .elisc_tm_button[data-style='border'] a {
  //   background-color: transparent;
  //   color: #55527c;
  // }
  // .elisc_tm_button[data-style='border'] a:hover {
  //   background-color: #130f49;
  //   color: #fff;
  // }
  // .elisc_tm_button[data-position='center'] {
  //   text-align: center;
  // }
  // .elisc_tm_button[data-position='left'] {
  //   text-align: left;
  // }
  // .elisc_tm_button[data-position='right'] {
  //   text-align: right;
  // }
</style>
