<template>
  <div :class="$style['hero']">
    <div :class="$style['holder']">
      <img src="~/assets/img/yari.jpeg" alt="thum nail" />
    </div>
    <p :class="$style['header']">Hello! I am Yari and since 7 years I have been <span>creating robust scalable commercial
        web software that achieve specific goals</span>
    </p>

    <div :class="$style['copy']">
      <p :class="$style['text']">Ready to launch you next idea? Working with me is like having a personal coding ninja at
        your fingertips. lets talk today and get your idea kicked off!!
      </p>
      <div :class="$style['icons']">
        <IconGithub />
        <IconLinkedin />
        <IconInstagram />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Github from '~/components/Icon/Github.vue'
// import Linkedin from '~/components/Icon/Linkedin.vue'
// import Instagram from '~/components/Icon/Twitter.vue'

</script>

<style lang="scss" module>
.hero {
  padding-block: 7rem;

  .holder {
    height: 163px;
    width: 163px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin-right: 1rem;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .header {
    font-size: 4.2rem;
    display: inline;
    line-height: 1.4;

    span {
      margin-left: 1.9rem;
    }
  }

  .text {
    font-size: 1.9rem;
    margin-top: 5rem;
    max-width: 70.5rem;
  }

  .copy {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    .icons {
      display: flex;
      gap: 1.6rem;

      svg {
        cursor: pointer;

        &:hover {
          fill: var(--text-color-active);
        }
      }
    }
  }
}</style>