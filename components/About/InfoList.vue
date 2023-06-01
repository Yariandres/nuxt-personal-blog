<template>
  <ul :class="$style['list']">
    <li :class="$style['list__items']">
      <span :class="$style['list__items--label']">Location</span>
      <span :class="$style['list__items--data']"
        ><a href="#">Poznan, Poland</a></span
      >
    </li>

    <li :class="$style['list__items']">
      <span :class="$style['list__items--label']">Mail</span>
      <span :class="$style['list__items--data']"
        ><a href="mailto:support@elisc.com">support@codigo.com</a></span
      >
    </li>

    <li :class="$style['list__items']">
      <span :class="$style['list__items--label']">Phone</span>
      <span :class="$style['list__items--data']"
        ><a href="tel:+48 008 301 990">+48 008 301 990</a></span
      >
    </li>
  </ul>
</template>

<style lang="scss" module>
.font-style {
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
}
.list {
  margin-block-start: 14px;
  display: flex;
  gap: 25px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  &__items {
    display: flex;
    flex-direction: column;

    &--label {
      text-transform: uppercase;
      text-decoration: underline;
      @extend .font-style;
    }

    &--data {
      font-size: 16px;
      font-weight: 700;
      line-height: 30px;

      a {
        color: var(--main-color);
        &:hover {
          color: orange;
        }
      }
    }
  }
}
</style>
