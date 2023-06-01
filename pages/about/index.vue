<template>
  <section :class="$style['container']">
    <div :class="$style['about']">
      <div :class="$style['flex-row']">
        <div :class="$style['flex-col']">
          <AboutBiography />
        </div>

        <div :class="$style['flex-col']">
          <AboutParagraphs />
          <AboutInfoList />
        </div>
      </div>
      <AboutCards />
    </div>

    <div :class="$style['experience']">
      <div :class="$style['flex-gap-32']">
        <p :class="$style['greetings']">- Experience</p>
        <h3 :class="$style['heading']">Everything about me!</h3>
        <div :class="$style['card-row']">
          <AboutExperienceCard
            v-for="info in about"
            :key="info.id"
            :about="about"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { about } from "~/helpers/about";
</script>

<style lang="scss" module>
.container {
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: #e3f7e0;
  .about {
    background-color: #fce8d2;
    display: flex;
    flex-direction: column;
    gap: 70px;
    padding-inline: 90px;
    padding-block: 90px;

    @media (max-width: 1040px) {
      padding-inline: 20px;
    }

    .flex-row {
      display: flex;
      gap: 150px;

      @media (max-width: 1040px) {
        flex-direction: column;
        gap: 46px;
      }

      .width-100 {
        width: 100% !important;
      }
      .flex-col {
        display: flex;
        flex-direction: column;
        gap: 32px;

        &:first-child {
          width: 100%;
        }

        @media only screen and (min-width: 768px) and (max-width: 1023px) {
          text-align: center;
          align-items: center;
        }
      }
    }
  }

  .card-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    @media only screen and (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .experience {
    padding-inline: 90px;
    padding-block: 90px;

    @media only screen and (max-width: 767px) {
      padding-inline: 20px;
    }

    .greetings {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 14px;
      color: var(--main-color);
    }
    .heading {
      font-weight: 800;
      font-size: 40px;
      color: var(--main-color);
    }

    .flex-gap-16 {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .flex-gap-32 {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  }
}
</style>
