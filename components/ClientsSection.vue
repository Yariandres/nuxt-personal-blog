<template>
  <div :class="$style['layout-verticle']">
    <h2 :class="$style['section-title']">Past Clients</h2>
    <div :class="$style['images-container']">
      <div :class="$style['holder']">
        <img src="~/assets/svg/maybellin.svg" alt="logo">
      </div>
      <div :class="$style['holder']">
        <img src="~/assets/svg/roche-logo-white.png" alt="logo" width="80">
      </div>
      <img src="~/assets/svg/interflora.svg" alt="logo" width="150">
      <div :class="$style['holder']">
        <img src="~/assets/img/verseo-logo-dark.svg" alt="logo" width="100">
      </div>
      <img src="~/assets/img/seargin.jpeg" alt="logo" width="100">
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.layout-verticle {
  padding-block: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
}

.section-title {
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 0;
}
.images-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}

.holder {
  height: 100px;
  background-color: var(--bg-dark-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 1.6rem;
  border-radius: 1rem;
}
</style>