<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="left">
      <h2 class="uppercase heading">Progect Name</h2>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
        nesciunt ratione quo iusto quasi consequatur quos molestiae ipsam
        blanditiis cupiditate excepturi voluptatibus neque quaerat nisi
        reprehenderit, deserunt explicabo laudantium tempore! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Laborum quae sint beatae ullam
        velit. Ex ut consequatur commodi harum iste animi et. Quod aspernatur
        iure, doloremque aliquid dicta quaerat adipisci? Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Laudantium sint cumque, quod earum
        placeat deleniti soluta! Rerum possimus quis ad perferendis vel
        expedita, id distinctio quisquam, odio unde incidunt necessitatibus?
      </p>
      <ul class="group">
        <li class="item">Javascript</li>
        <li class="item">React.js</li>
        <li class="item">Vue.js</li>
        <li class="item">Material UI</li>
        <li class="item">CSS Module</li>
        <li class="item">Nuxt.js</li>
        <li class="item">Next.js</li>
      </ul>
    </div>

    <div class="right">
      <img class="image" src="~/assets/images/dashboard.png" alt="" />
    </div>
  </section>
</template>

<style lang="scss">
.section {
  padding-block-start: 140px;
  padding-block-end: 70px;
  padding-inline: 70px;
  display: flex;
  justify-content: space-around;
  gap: 116px;

  @media (max-width: 1130px) {
    flex-direction: column;
    align-items: center;
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
    }

    .description {
      font-size: 16px;
      line-height: 26px;
    }

    .group {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;

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
  .section {
    background: hsla(310, 23%, 10%, 1);

    background: linear-gradient(
      90deg,
      hsla(310, 23%, 10%, 1) 0%,
      hsla(306, 20%, 10%, 1) 0%,
      hsla(9, 38%, 20%, 1) 100%
    );

    background: -moz-linear-gradient(
      90deg,
      hsla(310, 23%, 10%, 1) 0%,
      hsla(306, 20%, 10%, 1) 0%,
      hsla(9, 38%, 20%, 1) 100%
    );

    background: -webkit-linear-gradient(
      90deg,
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
