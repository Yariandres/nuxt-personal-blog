<template>
 <MainWrapper>
    <div :class="$style['left']">
      <HeroHeaderItem 
        :text-one="'WELCOME'" 
        :text-two="'TO'" 
        :text-three="'MY'" 
        :text-four="'SITE'"
      />
    </div>
  </MainWrapper>
</template>

<style lang="scss" module>
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>