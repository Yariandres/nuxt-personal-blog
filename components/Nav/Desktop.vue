<template>
  <div :class="$style['sidebar']">
    <NavMenu
      :items="[
        { name: 'Home', path: '/', icon: 'icon-home' },
        { name: 'About', path: '/about', icon: 'icon-user' },
        { name: 'Services', path: '/services', icon: 'icon-cogs' },
        { name: 'Portfolio', path: '/portfolio', icon: 'icon-folder-open' },
        { name: 'Blog', path: '/blog', icon: 'icon-cloud' },
        { name: 'Contact', path: '/contact', icon: 'icon-phone' },
      ]"
    />
    <BlogFooter />
  </div>
</template>

<style lang="scss" module>
.sidebar {
  padding-block: 23px;
  min-width: 90px;
  border-right: 1px solid rgba(85, 82, 124, 0.1);
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
