<template>
  <div :class="$style['hero-section']">
    <div :class="$style['row']">
      <div :class="$style['holder']">
        <img src="~/assets/img/yari.jpeg" alt="thum nail" />
      </div>
      <p :class="$style['header']">Hello and welcome to my website!  
      <span>My name is Yari and I am a talented</span> software <br> engineer based in Europe.</p>
    </div>
    
    <div :class="$style['copy']">
      <p :class="$style['text']">Are you ready to turn your project idea into a reality? With my expertise as a skilled software engineer, working with me is like having a personal coding ninja at your service. Let's discuss your vision and get your project started today!
      </p>
      <div :class="$style['icons']">
        <a href="https://github.com/Yariandres" target="_blank">
          <IconGithub />
        </a>
        <a href="https://www.linkedin.com/in/yari-herrera-9677a9160/" target="_blank">
          <IconLinkedin />
        </a>
        <IconInstagram />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.hero-section {
  padding-block: 4.8rem;
}
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
    font-weight: 800;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
      font-size: 2.6rem;
      text-align: center;
    }

    span {
      margin-left: 2rem;
      color: var(--text-color-active);
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
</style>