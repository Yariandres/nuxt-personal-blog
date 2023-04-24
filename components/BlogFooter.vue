<template>
  <div class="copyright">
        <div class="social">
          <ul>
            <li><NuxtLink to=""><i class="icon-facebook-1"></i></NuxtLink></li>
            <li><NuxtLink to=""><i class="icon-twitter-1"></i></NuxtLink></li>
            <li><NuxtLink to=""><i class="icon-linkedin-1"></i></NuxtLink></li>
          </ul>
        </div>
        <div class="text">
          <p>Yari's blog &copy; ALl Rights Reserved {{ year }}</p>
        </div>
      </div>
</template>

<script setup lang="ts">
// get today's date
const today = new Date();
const year = today.getFullYear();
</script>