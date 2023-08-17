<script setup lang="ts">
type Projects = {
  id: string;
  name: string;
  description: string;
  tech: any;
};
const props = defineProps<{
  project: Projects;
  index: number;
}>();

const isRowReverse = computed(() => {
  if (props.index % 2 === 0) {
    return 'row-reverse';
  } else {
    return 'row';
  }
});
</script>

<template>
  <section class="section">
    <div class="left">
      <h2 class="heading">{{ project.name }}</h2>
      <p class="description">
        {{ project.description }}
      </p>
      <ul class="group">
        <li v-for="(tech, index) in project.tech" class="item" :key="index">
          {{ tech }}
        </li>
      </ul>
    </div>

    <div class="right">
      <img
        class="image"
        src="~/assets/images/dashboard.png"
        alt="sample dashboard"
        width="445"
        height="445"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style lang="scss">
.section {
  display: flex;
  justify-content: space-around;
  flex-direction: v-bind(isRowReverse);

  @media (max-width: 1130px) {
    flex-direction: column;
    align-items: center;
    padding-inline: 25px;
    gap: 70px;
  }

  .left {
    max-width: 545px;
    display: flex;
    flex-direction: column;
    gap: 35px;

    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;

    .heading {
      letter-spacing: 10px;
      font-weight: 100;
      text-transform: uppercase;
    }

    .description {
      font-size: 16px;
      line-height: 26px;
    }

    .group {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;

      @media (max-width: 1130px) {
        justify-content: center;
      }

      .item {
        list-style: none;
        border: 1px solid unset;
        border-radius: 20px;
        padding-inline: 15px;
        padding-block: 8px;
      }
    }
  }

  .right {
    animation-name: moveInRight;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;

    .image {
      max-width: 445px;
      border-radius: 25px;
    }
  }
}
// https://coolors.co/gradient-maker/c471f2-f76cc6
.dark {
  body {
    background: hsla(310, 23%, 10%, 1);

    background: linear-gradient(
      160deg,
      hsla(310, 23%, 10%, 1) 0%,
      hsla(306, 20%, 10%, 1) 0%,
      hsla(9, 38%, 20%, 1) 100%
    );

    background: -moz-linear-gradient(
      160deg,
      hsla(310, 23%, 10%, 1) 0%,
      hsla(306, 20%, 10%, 1) 0%,
      hsla(9, 38%, 20%, 1) 100%
    );

    background: -webkit-linear-gradient(
      180deg,
      hsla(310, 23%, 10%, 1) 0%,
      hsla(306, 20%, 10%, 1) 0%,
      hsla(9, 38%, 20%, 1) 100%
    );
  }

  .item {
    border: 1px solid #2cdbda;
  }
}

.light {
  .section {
    background-color: #ffffff;
    color: #fff;

    .heading {
      color: #221520;
    }

    .description {
      color: #221520;
    }
  }

  .item {
    border: 1px solid red;
    color: #221520;
  }
}
</style>
