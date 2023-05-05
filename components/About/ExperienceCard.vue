<template>
    <div :class="$style['row']">
      <div :class="$style['card']">
        <button :class="$style['card__btn']" @click="openModal">
          <div :class="$style['card__header']">
            <p :class="$style['text-orange']">-2018 - Present</p>
            <p>-Envato Market</p>
          </div>
          
          <div :class="$style['flex-gap-16']">
            <h3 :class="$style['card__title']">Web Developer</h3>
            <div :class="$style['card__text']">
              <p>Website development is the process of building, programming, coding and maintaining websites and web applications.
              </p>
            </div>
          </div>
        </button>
      </div>

      <dialog ref="modal" :class="{ [$style['modal']]: true, [$style['modal__isOpen']]: isNotOpen }">
        <button :class="$style['modal__close-icon']" @click="closeModal">
          <i class="icon-cancel"></i>
        </button>

        <img :class="$style['modal__image']"  src="~/assets/img/experience/1.jpg" alt="" />

        <p :class="$style['modal__time']">-2018 - Present</p>
        <p :class="$style['modal__company']">-Envato Market</p>

        <div :class="$style['modal__description']">
          <p>Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
          <p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
          <p>That’s why more companies are not only reevaluating their website’s design but also partnering with Elisc, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
        </div>
      </dialog>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const modal = ref<HTMLDialogElement | null>(null);
const isNotOpen = ref<boolean>(true);

const openModal = () => {
  modal.value?.showModal();
  isNotOpen.value = false;
}

const closeModal = () =>{
  modal.value?.close();
  isNotOpen.value = true;
}

</script>

<style lang="scss" module>
.card-row {
  display: flex;
  flex-direction: column;
}

.card {  
  flex-basis: 50%;
  background-color: #fff;
  padding-inline: 40px;
  padding-block: 40px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.252);
  box-shadow: -1px 9px 25px -5px rgba(0,0,0,0.1);
  -webkit-box-shadow: -1px 9px 25px -5px rgba(0,0,0,0.1);
  -moz-box-shadow: -1px 9px 25px -5px rgba(0,0,0,0.1);
  

  &__btn {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    outline: none;
    text-align: left;
  }
  
  &__header {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 14px;
      font-weight: 500;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 19px;
  } 

  .font-style {
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
  }

  &__text {
    p {
      @extend .font-style
    }
  }

  .text-orange {
    color: orange;
  }
};

.modal {
  max-width: 80ch;
  border-radius: 5px;
  padding-inline: 40px;
  padding-block-start: 60px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  position: relative;
  isolation: isolate;
  z-index: 1;

  &__isOpen {
    display: none;
  }

  &::backdrop {
    background: rgba(51, 51, 51, 0.928);
  }

  &__image {
    border-radius: 5px;
    height: 375px; // to be removed  
  }

  &__time {
    background-color: #000000;
    color: orange;
    padding-block: 10px;
    text-align: center;
    border-radius: 5px;
    display: inline;
    max-width: 160px;
    font-size: 16px;
    font-weight: 400;
  }

  &__company {
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    color: rgba(85, 82, 124, 0.501);
  }

  &__description {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    color: rgba(85, 82, 124, 0.632);
  }

  &__close-icon {
    position: absolute;
    right: 0;
    top: 12px;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    outline: none;
    

    i {
      padding: 10px;
      color: rgba(85, 82, 124, 0.632);;
      border: 2px solid rgba(85, 82, 124, 0.632);;
      border-radius: 10px;
      z-index: 10;

      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;

      &:hover {
        border-radius: 100%;
      }
    }
  }      
}
</style>