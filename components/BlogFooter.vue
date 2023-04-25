<template>
  <div :class="$style['container']">
    <ul :class="$style['social']">
      <li><NuxtLink to="https://github.com/Yariandres" target="_blank"><i class="icon-github-1"></i></NuxtLink></li>
      <li><NuxtLink to="" target="_blank"><i class="icon-instagram-1"></i></NuxtLink></li>
      <li><NuxtLink to="https://www.linkedin.com/in/yari-herrera-9677a9160/" target="_blank"><i class="icon-linkedin-1"></i></NuxtLink></li>
    </ul>

    <div :class="$style['text']">
      <p>Yari's blog &copy; ALl Rights Reserved {{ year }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// get today's date
const today = new Date();
const year = today.getFullYear();
</script>

<style lang="scss" module>
@import '~/css/plugins.css';

.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .social {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

  a {
    width: 40px;
    height: 40px;
    display: inline-block;
    position: relative;
    border-radius: 100%;
    background-color: rgba(19, 15, 73, 0.05);
    color: var(--dark-color);

    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
    }
  }
}
.text {
  text-align: center;
}
}


</style>