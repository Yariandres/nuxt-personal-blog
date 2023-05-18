<template>
  <section :class="$style['container']">
    <div :class="$style['section']">
      <div>
        <p :class="$style['title']">- Projects</p>
        <h3 :class="$style['heading']">Recent completed works</h3>
      </div>

      <porfolio-carousel-component />

      <div :class="$style['button']">
        <NuxtLink to="/portfolio">View all projects</NuxtLink>
      </div>

      <hr />

      <porfolio-testimonial-component />
    </div>
  </section>
</template>

<style lang="scss" module>
.container {
  height: 100dvh;
  width: 100dvw;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: #d2f4ec;

  .section {
    padding-inline: 90px;
    padding-block: 50px;
    display: flex;
    flex-direction: column;
    gap: 54px;

    .title {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 14px;
      color: ivar(--main-color);
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
  }
}
</style>
