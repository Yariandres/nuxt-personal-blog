<template>
  <section :class="$style['container']">
    <div :class="$style['main']">
      <div :class="$style['flex-row']">
        <div :class="$style['flex-col']">
          <AboutBiography/>
        </div>

        <div :class="$style['flex-col']">
          <AboutParagraphs/>
          <AboutInfoList/>
        </div>
      </div>
      <AboutCards/>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.container {
  background-color: #1b3bc990;
  .main {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 70px;
    padding-inline: 90px;
    padding-block: 90px;

    @media (max-width: 1040px) {
      padding-inline: 20px;
    }

    .flex-row {
      display: flex;
      gap: 150px;
      
      @media (max-width: 1040px) {
        flex-direction: column;
        gap: 46px;
      }
      .flex-col {
        display: flex;
        flex-direction: column;
        gap: 32px;

        @media (max-width: 1040px) {
          text-align: center;
          align-items: center;
        }
      }
    }
  }
}
</style>