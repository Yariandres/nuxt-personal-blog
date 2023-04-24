<template>
  <div :class="$style['sidebar']">
    <div :class="$style['inner']">
      <LayoutMain>
        <template #navigation>
          <div :class="$style['author']">
            <div :class="$style['image']">
              <img src="~/assets/img/about/1.jpg" alt="about image" />
              <div :class="$style['main']" data-img-url="~/assets/img/about/1.jpg"></div>
            </div>
    
            <div :class="$style['name']">
              <h3><span>Yari Herrera<span :class="$style['back']">Yari Herrera</span></span></h3>
            </div>
          </div>
        </template>

        <template #main>
          <div :class="[$style['menu'], $style['scrollable']]">
            <ul class="transition_link">
              <li>
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about">About</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services">Services</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/portfolio">Portfolio</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog">Blog</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact">Contact</NuxtLink>
              </li>
            </ul>
          </div>
        </template>

        <template #footer>
          <BlogFooter />
        </template>
      </LayoutMain>
    </div>
  </div>
  <!-- /SIDEBAR -->
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { useRouter } from 'vue-router';

const router = useRouter();
const mode = useColorMode();

const isConatctPage = computed(() => {
  return router.currentRoute.value.name;
});
</script>

<style lang="scss" module>
.sidebar {
  width: 370px;
  border-right: 1px solid rgba(85, 82, 124, .1);

  .inner {
    text-align: center;

    img {
      position: relative;
      opacity: 0;
      min-width: 100%;
    }
  }

  .author {
    width: 100%;
    float: left;
    padding-top: 60px;
  }

  .image {
    position: relative;
    width: 118px;
    display: inline-block;
  }

  .main {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 100%;

    &::before {
      position: absolute;
      content: "";
      top: -2px;
      bottom: -2px;
      left: -2px;
      right: -2px;
      background-color: var(--blue-color);
      z-index: -1;
      border-radius: 100%;
    }
  }

  .name {
    width: 100%;

    span {
      position: relative;
      font-style: italic;
      font-size: 88px;
      font-family: var(--font-kristi);
      line-height: 1;
      color: rgba(19, 15, 73, 0.07);
      display: block;
    }

    .back {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      font-family: var(--font-inter);
      font-weight: 700;
      font-size: 30px;
      color: var(--dark-color);
      font-style: normal;
      margin-top: 5px;
    }
  }

  .menu {
    ul {
      margin: 0px;
      height: 100%;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
}


.sidebar .menu ul li:last-child {
  margin-bottom: 0px;
}

.sidebar .menu ul li a {
  color: var(--main-color);

  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}

.sidebar .menu ul li.active a,
.sidebar .menu ul li.current a,
.sidebar .menu ul li a:hover {
  color: var(--blue-color);
}

.sidebar .copyright {
  position: absolute;
  bottom: 50px;
}

.sidebar .social {
  width: 100%;
  float: left;
  margin-bottom: 7px;
}

.sidebar .social ul {
  margin: 0px;
}

.sidebar .social ul li {
  margin: 0px 3px 0px 0px;
  display: inline-block;
}

.sidebar .social ul li:last-child {
  margin-right: 0px;
}

.sidebar .social ul li a {
  width: 40px;
  height: 40px;
  display: inline-block;
  position: relative;
  border-radius: 100%;
  background-color: rgba(19, 15, 73, 0.05);
  color: var(--dark-color);
}

.sidebar .social ul li i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
}

.sidebar .text {
  padding: 0px 50px;
}</style>