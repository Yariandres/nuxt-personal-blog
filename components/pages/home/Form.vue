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

          <div class="form__group">
            <input
              type="email"
              class="form__input"
              placeholder="Full name"
              required
              id="email"
            />
            <label for="email" class="form__label">Email Address</label>
          </div>

          <div class="form__group-radio">
            <div class="form__radio-group" aria-hidden="true">
              <input
                type="radio"
                class="form__radio-input"
                id="cv"
                name="size"
              />
              <label for="cv" class="form__radio-label">
                <span class="form__radio-button"></span>
                CV request
              </label>
            </div>
            <div class="form__radio-group" aria-hidden="true">
              <input
                type="radio"
                class="form__radio-input"
                id="project"
                name="size"
              />
              <label for="project" class="form__radio-label">
                <span class="form__radio-button"></span>
                Project request
              </label>
            </div>
          </div>

          <div class="form__group">
            <button class="btn btn--primary" type="submit">
              Send request &rarr;
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/mixins.scss';

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
  .section {
    color: #221520;
  }
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

.section {
  padding-inline: 150px;
  padding-block-end: 150px;

  @media (max-width: 1130px) {
    padding-inline: 25px;
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

  @media (max-width: 1130px) {
    width: 100%;
  }
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

  &__group-radio {
    display: flex;
    align-items: center;

    @media (max-width: 1130px) {
      flex-direction: column;
      gap: 25px;
    }
  }

  &__radio-group {
    width: 50%;
  }

  &__radio-input {
    display: none;
  }

  &__radio-label {
    font-size: 16px;
    cursor: pointer;
    color: #221520;
    position: relative;
    padding-left: 55px;

    @media (max-width: 600px) {
      color: #fff;
    }
  }

  &__radio-button {
    height: 20px;
    width: 20px;
    border: 5px solid #c99862;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    left: -1px;
    top: -5px;

    &::after {
      content: '';
      height: 16px;
      width: 16px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ffae00;
      opacity: 0;
      transition: opacity 0.2s;
    }
  }

  &__radio-input:checked ~ &__radio-label &__radio-button::after {
    opacity: 1;
  }

  .btn {
    border: none;
    cursor: pointer;
    padding: 15px 19px;
    margin-top: 56px;
    background-color: #c99862;
    color: #fff;
    border-radius: 25px;
    text-transform: uppercase;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 20px rgba(black, 0.2);

      &::after {
        transform: scaleX((1.4)) scaleY(1.6);
        opacity: 0;
      }
    }

    &:active,
    &:focus {
      outline: none;
      transform: translateY(-1px);
      box-shadow: 0 5px 16px rgba(#000000, 0.2);
    }
  }
}
</style>
