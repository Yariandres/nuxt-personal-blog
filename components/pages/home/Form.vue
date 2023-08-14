<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="form-container">
      <div class="form-items">
        <form class="form">
          <h2 class="heading">Say hello!</h2>
          <div class="form-group">
            <input
              type="text"
              class="form__input"
              placeholder="Full name"
              required
              id="name"
            />
            <label for="name" class="form__label">Full name</label>
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form__input"
              placeholder="Full name"
              required
              id="email"
            />
            <label for="email" class="form__label">Email Address</label>
          </div>
        </form>
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
  .form-container {
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
  .form-container {
    background-image: linear-gradient(
        105deg,
        rgba(#fff, 0.9) 0%,
        rgba(#fff, 0.9) 50%,
        transparent 50%
      ),
      url('~/assets/images/hero-dark-mode.png');
  }
}

.heading {
  letter-spacing: 5px;
  font-weight: 100;
  text-transform: uppercase;
  color: #221520;
}

.form-container {
  background-size: cover;
  height: 500px;
  width: 100%;
  box-shadow: 0 1.5px 40px rgba(#000000, 0.3);
  border-radius: 25px;
}

.form-items {
  width: 50%;
  padding: 60px;
}
</style>
