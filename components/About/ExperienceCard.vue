<template>
  <div :class="$style['card']">
    <button :class="$style['card__btn']" @click="openModal">
      <div :class="$style['card__header']">
        <p :class="$style['text-orange']">-{{ info.date }}</p>
        <p>-{{ info.company }}</p>
      </div>

      <div :class="$style['flex-gap-16']">
        <h3 :class="$style['card__title']">{{ info.heading }}</h3>
        <div :class="$style['card__text']">
          <p>{{ info.description.substring(0, 150) }}...</p>
        </div>
      </div>
    </button>
  </div>

  <dialog
    ref="modal"
    :class="{ [$style['modal']]: true, [$style['modal__isOpen']]: isNotOpen }"
  >
    <button :class="$style['modal__close-icon']" @click="closeModal">
      <i class="icon-cancel"></i>
    </button>

    <img
      :class="$style['modal__image']"
      src="~/assets/img/experience/1.png"
      alt=""
    />

    <p :class="$style['modal__time']">-{{ info.date }}</p>
    <p :class="$style['modal__company']">-{{ info.company }}</p>

    <div :class="$style['modal__description']">
      {{ info.description }}
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import About from "~/types/about/index";

defineProps<{
  info: About;
}>();

const modal = ref<HTMLDialogElement | null>(null);
const isNotOpen = ref<boolean>(true);

const openModal = () => {
  modal.value?.showModal();
  isNotOpen.value = false;
};

const closeModal = () => {
  modal.value?.close();
  isNotOpen.value = true;
};
</script>

<style lang="scss" module>
.card {
  background-color: #fff;
  padding-inline: 40px;
  padding-block: 40px;
  border-radius: 5px;

  box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);

  &__btn {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    font: solid var(--main-color);
    color: solid var(--main-color);
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
      @extend .font-style;
    }
  }

  .text-orange {
    color: orange;
  }
}

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
    right: 12px;
    top: 12px;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    font: solid var(--main-color);
    color: solid var(--main-color);
    cursor: pointer;
    outline: none;

    i {
      padding: 10px;
      color: rgba(85, 82, 124, 0.632);
      border: 2px solid rgba(85, 82, 124, 0.632);
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
