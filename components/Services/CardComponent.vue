<template>
  <div :class="$style['card']">
    <p :class="$style['card__index']">{{ Number(service.id) + 1 }}</p>
    <h3 :class="$style['card__title']">{{ service.heading }}</h3>
    <p :class="$style['card__description']">
      {{ service.content }}
    </p>
    <button :class="$style['card__action']" @click="openModal">
      Read more ->
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
      src="~/assets/img/experience/1.jpg"
      alt=""
    />

    <p :class="$style['modal__title']">{{ service.heading }}</p>

    <div :class="$style['modal__description']">
      <P>{{ service.description }}</P>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Service from "~/types/services";

const modal = ref<HTMLDialogElement | null>(null);
const isNotOpen = ref<boolean>(true);

defineProps<{
  service: Service;
}>();

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
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 16px;
  border: 1px solid #d2d2d2d7;
  border-radius: 10px;
  padding-block: 40px;
  padding-inline: 40px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 3px 8px 12px 1px rgba(196, 196, 196, 0.21);
    -webkit-box-shadow: 3px 8px 12px 1px rgba(196, 196, 196, 0.21);
    -moz-box-shadow: 3px 8px 12px 1px rgba(196, 196, 196, 0.21);
  }

  &__title {
    font-size: 19px;
    font-weight: 700;
  }

  &__description {
    font-size: 16px;
    font-weight: 400;
    color: var(--main-color);
    line-height: 30px;
  }

  &__action {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    font: solid var(--main-color);
    color: solid var(--main-color);
    cursor: pointer;
    outline: none;
    text-align: left;

    font-size: 16px;
    color: var(--main-color);
    font-weight: 700;
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

  &__title {
    font-size: 19px;
    font-weight: 700;
  }

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
