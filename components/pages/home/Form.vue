<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="form-container">
      <div class="form-items">
        <form class="form">
          <h2 class="heading">Say hello!</h2>
          <div class="form__group">
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
      url('~/assets/images/hero-dark-mode.png');
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
      url('~/assets/images/hero-ligth-mode.png');
  }
}

.heading {
  letter-spacing: 5px;
  font-weight: 100;
  text-transform: uppercase;
  color: #221520;
  margin-bottom: 50px;
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

.form {
  &__group:not(:last-child) {
    margin-bottom: 20px;
  }

  &__input {
    font-size: 15px;
    padding: 15px 20px;
    border-radius: 4px;
    background-color: rgba(#fff, 0.5);
    border: none;
    font-family: inherit;
    border-bottom: 3px solid transparent;
    width: 70%;
    display: block;
    transition: all 0.3s;

    &::-webkit-input-placeholder {
      color: rgb(103, 103, 103);
    }

    &:focus {
      outline: none;
      box-shadow: 0 16px 20px rgba(black, 0.1);
      border-bottom: 3px solid #01ff23;
    }

    &:focus:invalid {
      border-bottom: 3px solid orangered;
    }
  }

  &__label {
    color: #221520;
    font-size: 12px;
    font-weight: 700;
    margin-left: 20px;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }
}
</style>
