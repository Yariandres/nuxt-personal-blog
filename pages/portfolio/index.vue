<template>
  <section :class="$style['container']">
    <div :class="$style['section']">
      <div>
        <p :class="$style['title']">- Projects</p>
        <h3 :class="$style['heading']">Recent completed works</h3>
      </div>

      <porfolio-carousel-component />

      <div :class="$style['button']">
        <NuxtLink to="/portfolio">Wiev all projects</NuxtLink>
      </div>

      <hr />

      <PorfolioTestimonialComponent />
    </div>
  </section>
</template>

<style lang="scss" module>
.container {
  height: 100dvh;
  width: 100dvw;
  overflow-y: scroll;
  scroll-behavior: smooth;

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
      color: inherit;
    }

    .heading {
      font-weight: 800;
      font-size: 40px;
      color: black;
    }

    .button {
      a {
        color: inherit;
        // background-color: #130F49;
        display: inline-block;
        border: 1.5px solid #130f49;
        border-radius: 50px;
        padding: 9px 40px;
        white-space: nowrap;

        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -ms-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;

        &:hover {
          background-color: #130f49;
          color: #fff;
        }
      }
    }
  }
}
</style>
