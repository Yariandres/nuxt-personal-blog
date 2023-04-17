<template>
  <div :class="$style['base-container']">
    <div :class="$style['section']">
      <h2 :class="$style['heading']">Software</h2>
      <h2 :class="$style['heading']">& Developement</h2>


      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_3625_7875)">
          <rect x="4" y="3" width="42" height="42" rx="21" fill="white" />
        </g>
        <path
          d="M28.612 29.8334L22.788 24L28.612 18.1854C28.6741 18.1245 28.7234 18.0519 28.7571 17.9718C28.7907 17.8917 28.8081 17.8056 28.8081 17.7187C28.8081 17.6318 28.7907 17.5457 28.7571 17.4656C28.7234 17.3855 28.6741 17.3129 28.612 17.252C28.5522 17.1886 28.4797 17.1384 28.3994 17.1047C28.319 17.0709 28.2325 17.0544 28.1453 17.056C28.0583 17.0555 27.9721 17.0726 27.8919 17.1063C27.8117 17.1399 27.7392 17.1895 27.6787 17.252L21.388 23.5334C21.2649 23.6575 21.1958 23.8252 21.1958 24C21.1958 24.1748 21.2649 24.3426 21.388 24.4667L27.6787 30.7574C27.8039 30.8783 27.9712 30.9458 28.1453 30.9458C28.3194 30.9458 28.4867 30.8783 28.612 30.7574C28.6738 30.6973 28.7229 30.6255 28.7565 30.5462C28.79 30.4668 28.8073 30.3815 28.8073 30.2954C28.8073 30.2092 28.79 30.1239 28.7565 30.0446C28.7229 29.9652 28.6738 29.8934 28.612 29.8334Z"
          fill="black" />
        <defs>
          <filter id="filter0_d_3625_7875" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3625_7875" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3625_7875" result="shape" />
          </filter>
        </defs>
      </svg>


      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_3625_7900)">
          <rect x="4" y="3" width="42" height="42" rx="21" fill="white" />
        </g>
        <path
          d="M22.444 18.176L28.268 24L22.444 29.824C22.3231 29.9493 22.2556 30.1166 22.2556 30.2907C22.2556 30.4648 22.3231 30.6321 22.444 30.7573C22.5704 30.8761 22.7373 30.9422 22.9107 30.9422C23.0841 30.9422 23.251 30.8761 23.3774 30.7573L29.668 24.4667C29.7909 24.342 29.861 24.1749 29.864 24C29.863 23.8246 29.7925 23.6568 29.668 23.5333L23.3774 17.2427C23.2521 17.1218 23.0848 17.0542 22.9107 17.0542C22.7366 17.0542 22.5693 17.1218 22.444 17.2427C22.3231 17.3679 22.2556 17.5352 22.2556 17.7093C22.2556 17.8834 22.3231 18.0507 22.444 18.176Z"
          fill="black" />
        <defs>
          <filter id="filter0_d_3625_7900" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3625_7900" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3625_7900" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.base-container {
  padding-inline: var(--space-400);
}

.heading {
  font-size: 6.8rem;
  margin: 0;
  padding: 0;
}

.section {
  height: 70dvh;
}</style>