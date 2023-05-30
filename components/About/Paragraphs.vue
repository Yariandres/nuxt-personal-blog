<template>
  <div :class="$style['paragraphs']">
    <p>
      Redefining Software Development:
      <span :class="$style['text-orange']">Unleashing Growth </span>through
      Intelligent Solutions
    </p>
    <p>
      Experience the power of intelligent software development. Whether your
      goal is to modernize, gain a competitive edge, or overcome operational
      obstacles, our expert team excels in crafting tailor-made solutions that
      deliver tangible business value. We understand the challenges you face,
      and our bespoke software solutions are meticulously designed to drive your
      growth forward.
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
    @extend .font-style;
  }

  .text-orange {
    color: orange;
  }
}
</style>
