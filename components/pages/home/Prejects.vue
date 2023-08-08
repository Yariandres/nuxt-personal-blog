<script setup lang="ts"></script>

<template>
  <section class="section">
    <h2>projects</h2>
  </section>
</template>

<style lang="scss">
.section {
  padding: 70px;
  scroll-snap-align: start;

  &:nth-of-type(2) {
    background: #efe7d5;
  }
  &:nth-of-type(3) {
    background: #f7ecd2;
  }
  &:nth-of-type(4) {
    background: #f3deac;
  }
  &:nth-of-type(5) {
    background: #f7e7c2;
  }

  h2 {
    font-size: 3em;
  }
}
</style>
