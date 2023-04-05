<template>
  <div :class="$style['layout-verticle']">
    <h2 :class="$style['section-title']">Services</h2>
    <LayoutFlexRow>
      <div :class="$style['card']">
        <h3 :class="$style['card-title']">Software Developement</h3>
        <p>Ecommerce</p>
        <p>SASS</p>
        <p>Ecommerce</p>
      </div>

      <div :class="$style['card']">
        <h3 :class="$style['card-title']">Body Leasing</h3>
        <p>Ecommerce</p>
        <p>SASS</p>
        <p>Ecommerce</p>
      </div>

      <div :class="$style['card']">
        <h3 :class="$style['card-title']">Consulting</h3>
        <p>Ecommerce</p>
        <p>SASS</p>
        <p>Ecommerce</p>
      </div>
    </LayoutFlexRow>
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

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 2.4rem;
  padding-inline: 2.6rem;
  border: 4px solid var(--text-color-red-0);
  border-radius: 1rem;

  // not last child
  &:not(:last-child) {
    margin-inline-end: 1.6rem;
  }

  .card-title {
    font-size: 1.9rem;
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding: 0;
  }
}


</style>