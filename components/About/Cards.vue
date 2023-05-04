<template>
  <ul :class="$style['cards']">
    <li :class="$style['card']">
      <h3>10+</h3>
      <span>Years of Experience</span>
    </li>
    <li :class="$style['card']">
      <h3>50+</h3>
      <span>Projects Completed</span>
    </li>
    <li :class="$style['card']">
      <h3>30+</h3>
      <span>Happy Clients</span>
    </li>
  </ul>
</template>

<style lang="scss" module>
 .cards {
      display: flex;
      justify-content: space-around;
      gap: 32px;
      
      .card {
        background-color: #D2F4EC;
        text-align: center;
        padding: 60px 20px;
        border-radius: 4px;
        overflow: hidden;
        width: 100%;
        position: relative;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
 
          background-color: rgba(255, 255, 255, 0.5);
          content: '';
          -webkit-transition: -webkit-transform 0.6s;
          transition: transform 0.6s;
          -webkit-transform: 
            scale3d(3.9, 1.4, 1) 
            rotate3d(0, 0, 1, 45deg)
            translate3d(0, -100%, 0);
          transform: 
            scale3d(3.9, 1.4, 1) 
            rotate3d(0, 0, 1, 45deg)
            translate3d(0, -100%, 0);
        }

        &:hover::before {
          -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
            translate3d(0, 100%, 0);
          transform: scale3d(3.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
            translate3d(0, 100%, 0);
        }

        &:nth-child(1){
          background-color: #d3f4ec;
        }

        &:nth-child(2) {
          background-color: #fce8d4;
        }

        &:nth-child(3) {
          background-color: #e3f9e0;
        }
      }
    }
</style>