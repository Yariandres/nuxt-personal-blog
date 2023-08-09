<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col gap-16">
        <h2 class="uppercase heading">Progect Name</h2>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          nesciunt ratione quo iusto quasi consequatur quos molestiae ipsam
          blanditiis cupiditate excepturi voluptatibus neque quaerat nisi
          reprehenderit, deserunt explicabo laudantium tempore!
        </p>
      </div>
      <div class="flex flex-col gap-16"></div>
    </div>
  </section>
</template>

<style lang="scss">
@mixin flex-gap($gap-count) {
  $gap: 16px;

  @for $i from 1 through $gap-count {
    .gap-#{$i} {
      margin-right: $gap;
    }
  }
}

.text-center {
  text-align: center;
}

.uppercase {
  text-transform: uppercase;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.gap-16 {
  gap: 16px;
}

.section {
  padding: 70px;
  height: calc(100dvh - 14em);
  scroll-snap-align: start;
  background-color: #221520;

  .heading {
    letter-spacing: 10px;
    font-weight: 100;
    @extend .text-center;
  }

  .description {
    font-size: 16px;
    line-height: 29px;
  }
}
</style>
