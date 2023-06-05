<template>
  <section :class="$style['container']">
    <div :class="$style['heading-container']">
      <h1>{{ project.company }}</h1>
      <h3 :class="$style['heading']">Project: {{ project.project }}</h3>
    </div>

    <div :class="$style['section']">
      <div :class="$style['left']">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro
          sequi nam facere suscipit magni reprehenderit eos, facilis dolor quas,
          voluptate quia vero deserunt esse laudantium, accusamus corrupti cum
          provident! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Perspiciatis distinctio architecto possimus excepturi id. Explicabo
          vitae natus ab fugiat harum aut voluptatem reprehenderit, sit tempore
          cumque, quam aperiam sequi maiores?
        </p>
      </div>
      <div :class="$style['right']">
        <div :class="$style['image-holder']">
          <img :src="imagesArr[Number(params.id)]" alt="project image" />
        </div>
      </div>
    </div>

    <div :class="$style['button']">
      <NuxtLink to="/portfolio">&larr; Back to portfolio page</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolio } from "~/helpers/portfolio/index";

import tastyTask from "~/assets/img/portfolio/tasty-task.png";
import maybellin from "~/assets/img/portfolio/maybelline.png";
import interflora from "~/assets/img/portfolio/interflora.png";

const { params } = useRoute();

const imagesArr = [tastyTask, maybellin, interflora];
const project = portfolio[Number(params.id)];
</script>

<style lang="scss" module>
.container {
  height: 100dvh;
  width: 100dvw;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding-inline: 90px;
  padding-block: 50px;

  .heading-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-block-end: 32px;
  }

  .heading {
    font-weight: 800;
    font-size: 40px;
    color: var(--main-color);
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

  .section {
    display: flex;
    justify-content: space-between;
    gap: 36px;
    // align-items: center;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }

    .right {
      .image-holder {
        min-width: 577px;
      }
    }
  }

  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    color: var(--main-color);
  }
}
</style>
