<template>
  <div :class="$style['hero']">

    <div :class="$style['row']">
      <div :class="$style['holder']">
        <img src="~/assets/img/yari.jpeg" alt="thum nail" />
      </div>
      <p :class="$style['header']">Hello! I am Yari and since 7 years I <span> have </span> been creating robust scalable <span>commercial</span> web software that achieve specific goals
      </p>
    </div>

    <div :class="$style['copy']">
      <p :class="$style['text']">Ready to launch you next idea? Working with me is like having a personal coding ninja at
        your fingertips. lets talk today and get your idea kicked off!!
      </p>
      <div :class="$style['icons']">
        <a href="https://github.com/Yariandres" target="_blank">
          <IconGithub />
        </a>
        <a href="https://github.com/Yariandres" target="_blank">
          <IconLinkedin />
        </a>
        <IconInstagram />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.hero {
  padding-block: 7rem;


  .row {
    display: flex;
    align-items: center;
    gap: 2rem;
    .holder {
      height: 80%;
      width: 80%;
      border-radius: 50%;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .header {
      font-size: 4.6rem;
      display: inline;
      line-height: 1.4;

      span {
        color: var(--text-color-active);
        margin-left: 2rem;
      }

    }
  }

  .text {
    font-size: 2.3rem;
    margin-top: 5rem;
    max-width: 70.5rem;
    letter-spacing: 1px;
  }

  .copy {
    display: flex;
    flex-direction: column;
    gap: 2rem;

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
}
</style>