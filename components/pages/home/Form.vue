<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="form">
      <div class="form-items">
        <!-- <form></form> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/mixins.scss';
.light {
  .section {
    color: #221520;
  }
}

.section {
  padding-inline: 150px;
}

.dark {
  .form {
    background-image: linear-gradient(
        105deg,
        rgba(#fff, 0.9) 0%,
        rgba(#fff, 0.9) 50%,
        transparent 50%
      ),
      url('~/assets/images/hero-light-mode.png');
  }
}

.light {
  .form {
    background-image: linear-gradient(
        105deg,
        rgba(#fff, 0.9) 0%,
        rgba(#fff, 0.9) 50%,
        transparent 50%
      ),
      url('~/assets/images/hero-dark-mode.png');
  }
}

.form {
  background-size: cover;
  height: 500px;
  width: 100%;
  box-shadow: 0 1.5px 40px rgba(#000000, 0.3);
}
</style>
