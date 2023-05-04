<template>
  <div :class="$style['paragraphs']">
    <p>
      Hello there! My name is <span :class="$style['text-orange']">Yari Herrera</span>. I am a web designer &amp; developer, and I'm very passionate and dedicated to my work.
    </p>
    <p>
      With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
    </p>
  </div>
</template>

<style lang="scss" module>
 .font-style {
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
}
.paragraphs {
  display: flex;
  flex-direction: column;
  gap: 19px;

  p {
    @extend .font-style
  }

  .text-orange {
    color: orange;
  }
}
</style>