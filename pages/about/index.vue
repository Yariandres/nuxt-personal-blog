<template>
  <section :class="$style['container']">
    <div :class="$style['main']">
      <div :class="$style['flex-row']">
        <div :class="$style['flex-col']">
          <div :class="$style['text-group']">
            <p :class="$style['greetings']">- Nice to meet you</p>
            <h3 :class="$style['name']">Yari Herrera</h3>
            <span class="cd-headline rotate-1">
              <span class="blc" >Web designer &amp; </span>
              <span class="cd-words-wrapper">
                <b :class="[isActive[0] ? 'is-visible' : 'is-hidden']" style="color: blue">Designer</b>
                <b :class="[ isActive[1] ? 'is-visible' : 'is-hidden']" style="color: orange">Coder</b>
                <b :class="[ isActive[2] ? 'is-visible' : 'is-hidden']" style="color: red">Player</b>
              </span>
            </span>
          </div>

          <div :class="$style['button']">
            <NuxtLink to="/portfolio">Got a project?</NuxtLink>
          </div>
        </div>

        <div :class="$style['flex-col']">
          <div :class="$style['paragraphs']">
            <p>
              Hello there! My name is <span :class="$style['text-orange']">Yari Herrera</span>. I am a web designer &amp; developer, and I'm very passionate and dedicated to my work.
            </p>
            <p>
              With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
            </p>
          </div>

          <ul :class="$style['list']">
            <li :class="$style['list__items']">
              <span :class="$style['list__items--label']">Age</span>
              <span :class="$style['list__items--data']">25</span>
            </li>

            <li :class="$style['list__items']">
              <span :class="$style['list__items--label']">Born In</span>
              <span :class="$style['list__items--data']"><a class="href_location" href="#">Florida, USA</a></span>
            </li>

            <li :class="$style['list__items']">
              <span :class="$style['list__items--label']">Mail</span>
              <span :class="$style['list__items--data']"><a href="mailto:support@elisc.com">support@elisc.com</a></span>
            </li>

            <li :class="$style['list__items']">
              <span :class="$style['list__items--label']">Phone</span>
              <span :class="$style['list__items--data']"><a href="tel:+77 022 444 05 05">+77 022 444 05 05</a></span>
            </li>
          </ul>
        </div>
      </div>

      <ul :class="$style['cards']">
        <li :class="$style['card']">
          <div class="list_inner">
            <h3>10+</h3>
            <span>Years of Experience</span>
          </div>
        </li>
        <li :class="$style['card']">
          <div class="list_inner">
            <h3>50+</h3>
            <span>Projects Completed</span>
          </div>
        </li>
        <li :class="$style['card']">
          <div class="list_inner">
            <h3>30+</h3>
            <span>Happy Clients</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const isActive = ref([true, false, false]);

watchEffect((onInvalidate) => {
  const interval = setInterval(() => {
    const [first, second, third] = isActive.value;

    isActive.value = [second, third, first];
  }, 2500);

  onInvalidate(() => {
    clearInterval(interval);
  });
});

</script>

<style lang="scss" module>
.container {
  background-color: #7aebbe3e;

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
  
        .text-group {
          width: max-content;
          .greetings {
            text-transform: uppercase;
            font-weight: 500;
            font-size: 14px;
          }
        
          .name {
            font-weight: 800;
            font-size: 40px;
          }
        }
  
        .button {
          a {
            color: inherit;
            display: inline-block;
            border: 1.5px solid #130F49;
            border-radius: 50px;
            padding: 9px 40px;
            white-space: nowrap;
            
            -webkit-transition: all .3s ease;
            -moz-transition: all .3s ease;
            -ms-transition: all .3s ease;
            -o-transition: all .3s ease;
            transition: all .3s ease;
            
            &:hover {
              background-color: #130F49;
              color: #fff;
            }
          }
        }

        .paragraphs {
          display: flex;
          flex-direction: column;
          gap: 19px;

          p {
            @extend .font-style
          }
        }
        .list {
          margin-block-start: 14px;
          display: flex;
          gap: 25px;

          &__items {
            display: flex;
            flex-direction: column;

            &--label {
              text-transform: uppercase;
              text-decoration: underline;
              @extend .font-style
            }

            &--data {
              font-size: 16px;
              font-weight: 700;
              line-height: 30px;
              
              a {
                color: #130F49;
                &:hover {
                  color: orange;
                }
              }
            }
          }
        }
      }
    }
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


    .font-style {
      font-size: 15px;
      font-weight: 400;
      line-height: 30px;
    }

    .text-orange {
      color: orange;
    }
  }
}
</style>