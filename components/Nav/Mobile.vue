<template>
  <div :class="$style['topbar']">
    <div :class="$style['inner']">
      <div :class="$style['logo']" data-type="image">
        <!-- You can use text or image as logo. data-type values are: "image" and "text"  -->
        <!-- <NuxtLink class="image" href="#"><img src="~/assets/img/logo/logo.png" alt="" /></NuxtLink> -->
        <NuxtLink :class="$style['text']" to="/"><span>Codigo</span></NuxtLink>
      </div>

      <div @click="toggleMobileMenu">
        <div :class="$style['hamburger-menu']">
          <button :class="{[$style['hamburger']]: true, [$style['is-active']]: isMobileMenuOpen}">
            <span :class="$style['line']"></span>
            <span :class="$style['line']"></span>
            <span :class="$style['line']"></span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div :class="{
        [$style['menu']]: true, 
        [$style['opened']]: isMobileMenuOpen
      }">
    <div :class="$style['menu__inner']">
      <ul :class="$style['menu__inner--list']">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/services">Services</NuxtLink></li>
        <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
      
      <div :class="$style['menu__inner--social']">
        <ul>
          <li>
            <NuxtLink to="#"
              ><img :class="$style['svg']" src="~/assets/img/svg/social/facebook.svg" alt=""
            /></NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"
              ><img :class="$style['svg']" src="~/assets/img/svg/social/twitter.svg" alt=""
            /></NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"
              ><img :class="$style['svg']" src="~/assets/img/svg/social/instagram.svg" alt=""
            /></NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"
              ><img :class="$style['svg']" src="~/assets/img/svg/social/dribbble.svg" alt=""
            /></NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"
              ><img :class="$style['svg']" src="~/assets/img/svg/social/tik-tok.svg" alt=""
            /></NuxtLink>
          </li>
        </ul>
      </div>
      
      <div :class="$style['menu__inner--copyright']">
        <p>Yari's blog &copy; ALl Rights Reserved {{ year }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const today = new Date();
const year = today.getFullYear();

const isMobileMenuOpen = ref<boolean>(false);
const isMobileSize = ref<boolean>(false);

const checkMobileSize = () => {
  isMobileSize.value = window.innerWidth < 1040
  if (isMobileMenuOpen.value && !isMobileSize.value) {
    isMobileMenuOpen.value = false;
  }
} 

onMounted(() => {
  checkMobileSize();
  window.addEventListener('resize', checkMobileSize)
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobileSize)
})

const toggleMobileMenu = (): boolean => {
  return isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

</script>

<style lang="scss" module>
.topbar {
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	height: 50px;
	background-color: #fff;
	z-index: 15;
	display: none;
  box-shadow: 0px 1px 20px rgba(160, 160, 160, 0.1);

  @media (max-width: 1040px) {
    display: block;
  }
}
.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
}
.text {
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0px;
  line-height: 50px;
}

.hamburger-menu {
  background-color: #ffffff;

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    width: 30px;
    height: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    .line {
      width: 100%;
      height: 1px;
      background-color: #000000;
      transition: transform 0.3s ease-in-out;

      &:first-child {
        transform-origin: top left;
      }

      &:last-child {
        transform-origin: bottom left;
      }
    }

    &.is-active {
      .line:first-child {
        transform: rotate(39.5deg);
    
      }

      .line:nth-child(2) {
        opacity: 0;
      }

      .line:last-child {
        transform: rotate(-39.5deg);

      }
    }
  }

  .menu {
    display: none;
    flex-direction: column;
    padding: 20px;
    background-color: #fff;

    li {
      margin-bottom: 10px;

      a {
        color: #000;
        text-decoration: none;
        font-size: 16px;
      }
    }
  }

  &.is-active {
    .menu {
      display: block;
    }
  }
}


.menu {
	position: fixed;
	top: 50px;
	right: -200px;
	min-height: 100dvh;
	width: 200px;
	z-index: 15;
	background-color: #fff;
  box-shadow: 2px 20px 1px 4px rgba(160, 160, 160, 0.1);

	-webkit-transition: all .3s ease;
	   -moz-transition: all .3s ease;
	    -ms-transition: all .3s ease;
	     -o-transition: all .3s ease;
	        transition: all .3s ease;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 100dvh;

    &--list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      text-align: right;

      a {
        color: inherit;
        -webkit-transition: color .3s ease;
        -moz-transition: color .3s ease;
        -ms-transition: color .3s ease;
        -o-transition: color .3s ease;
        transition: color .3s ease;

        &:hover {
          color: var(--blue-color);
        }
      }
    }

    &--social {
      width: 20px;
      height: auto;
    }

    &--copyright {
      text-align: center;
    }
  }
}

.menu.opened {
  right: 0px;
}

</style>
