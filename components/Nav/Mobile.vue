<template>
  <div class="topbar">
    <div class="topbar__inner">
      <div class="logo" data-type="image">
        <!-- You can use text or image as logo. data-type values are: "image" and "text"  -->
        <!-- <NuxtLink class="image" href="#"><img src="~/assets/img/logo/logo.png" alt="" /></NuxtLink> -->
        <NuxtLink class="text" to="/"><span>Codigo</span></NuxtLink>
      </div>

      <div class="trigger">
        <div class="hamburger hamburger--slider">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="menu">
    <!-- <div class="menu opened"> -->
    <div class="menu__inner">
      <ul class="list">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/services">Services</NuxtLink></li>
        <li><NuxtLink to="/porfolio">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/conatct">Contact</NuxtLink></li>
      </ul>
      
      <div class="social">
        <ul>
          <li>
            <NuxtLink to="#"
              ><img class="svg" src="~/assets/img/svg/social/facebook.svg" alt=""
            /></NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"
              ><img class="svg" src="~/assets/img/svg/social/twitter.svg" alt=""
            /></NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"
              ><img class="svg" src="~/assets/img/svg/social/instagram.svg" alt=""
            /></NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"
              ><img class="svg" src="~/assets/img/svg/social/dribbble.svg" alt=""
            /></NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"
              ><img class="svg" src="~/assets/img/svg/social/tik-tok.svg" alt=""
            /></NuxtLink>
          </li>
        </ul>
      </div>
      
      <div class="copyright">
        <p>Yari's blog &copy; ALl Rights Reserved {{ year }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const today = new Date();
const year = today.getFullYear();
</script>

<style lang="scss" scoped>
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

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 20px;

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

    .trigger {
      position: relative;
      top: 5px;
    }

    .hamburger{
      padding: 0px;
    }

    .hamburger-inner:after, 
    .amburger-inner:before{
      width: 30px;
      height: 2px;
    }
  }

  &__hamburger-box{
    width: 30px;
  }

  @media (max-width: 1040px) {
    display: block;
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

    .list {
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
  }
}

.menu.opened {
  right: 0px;
}

</style>
