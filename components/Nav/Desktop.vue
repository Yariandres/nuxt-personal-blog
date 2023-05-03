<template>
  <div :class="$style['sidebar']">
      <div>
        <div :class="$style['image']">
          <img src="~/assets/img/about/1.jpg" alt="about image" />
          <!-- <div :class="$style['main']" data-img-url="~/assets/img/about/1.jpg"></div> -->
        </div>
        <div :class="$style['name']">
          <h3>Yari Herrera</h3>
        </div>
      </div>
      <NavMenu :items="[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Services', path: '/services' },
          { name: 'Portfolio', path: '/portfolio' },
          { name: 'Blog', path: '/blog' },
          { name: 'Contact', path: '/contact' }
        ]" 
      />
      <BlogFooter />
    </div>
</template>

<style lang="scss" module>
.sidebar {
  width: 300px;
  border-right: 1px solid rgba(85, 82, 124, .1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100dvh;

  @media (max-width: 1040px) {
    display: none;
  }

  .image {
    width: 118px;
    img {
      opacity: 0;
      min-width: 100%;
    }

    @media (max-width: 1600px) {
      width: 77px;
    }
  }

  .name {
    font-size: 50px;
    font-family: var(--font-kristi);
    line-height: 1;
    color: rgba(19, 15, 73, 0.07);
    text-align: center;

    @media (max-width: 1600px) {
      font-size: 18px;
    }
  }
}
</style>