<template>
  <div :class="$style['hero']">
    <div :class="$style['row']">
      <div :class="$style['holder']">
        <img src="~/assets/img/yari.jpeg" alt="thum nail" />
      </div>
      <p :class="$style['header']">Welcome to my site! <br><span>I am Yari a software engineer</span> based in Europe.</p>
    </div>

    <div :class="$style['copy']">
      <p :class="$style['text']">Do you have a project in mind? Working with me is like having a personal coding ninja at
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
  padding-block: 4rem;
  .row {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 0;
    }
    .holder {
      height: 50%;
      width: 50%;
      border-radius: 50%;
      overflow: hidden;

      @media screen and (max-width: 768px) {
        height: 9rem;
        width: 9rem;
      }

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .header {
      font-size: 5.6rem;
      display: inline;
      line-height: 1.4;

      @media screen and (max-width: 768px) {
        font-size: 2.6rem;
        text-align: center;
      }

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

    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
      text-align: center;
      margin-block-start: 0;
    }
  }

  .copy {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .icons {
      display: flex;
      gap: 1.6rem;

      @media screen and (max-width: 768px) {
        justify-content: center;
      }

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