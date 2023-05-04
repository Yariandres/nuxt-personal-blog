<template>
  <ul :class="$style['list']">
    <li :class="$style['list__items']">
      <span :class="$style['list__items--label']">Age</span>
      <span :class="$style['list__items--data']">25</span>
    </li>

    <li :class="$style['list__items']">
      <span :class="$style['list__items--label']">Born In</span>
      <span :class="$style['list__items--data']"><a href="#">Florida, USA</a></span>
    </li>

    <li :class="$style['list__items']">
      <span :class="$style['list__items--label']">Mail</span>
      <span :class="$style['list__items--data']"><a href="mailto:support@elisc.com">support@elisc.com</a></span>
    </li>

    <li :class="$style['list__items']">
      <span :class="$style['list__items--label']">Phone</span>
      <span :class="$style['list__items--data']"><a href="tel:+77 022 444 05 05">+77 022 444 05 05</a></span>
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

  &__items {
    display: flex;
    flex-direction: column;

    &--label {
      text-transform: uppercase;
      text-decoration: underline;
      @extend .font-style
    }

    &--data {
      font-size: 16px;
      font-weight: 700;
      line-height: 30px;
      
      a {
        color: #130F49;
        &:hover {
          color: orange;
        }
      }
    }
  }
}
</style>