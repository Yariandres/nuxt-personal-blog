<template>
  <section :class="$style['container']">
    <div :class="$style['services']">
      <div>
        <p :class="$style['title']">-services</p>
        <h3 :class="$style['heading']">My Services</h3>
      </div>

      <div :class="$style['services-cards']">
        <ServicesCardComponent
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from "~/helpers/services/index";
</script>

<style lang="scss" module>
.container {
  height: 100dvh;
  width: 100dvw;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: #e3f8e0;

  .services {
    padding-inline: 90px;
    padding-block: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (max-width: 767px) {
      padding-inline: 20px;
    }

    .title {
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

    .services-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      /* Tablet styles */
      @media only screen and (min-width: 768px) and (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
      }

      /* Mobile styles */
      @media only screen and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
