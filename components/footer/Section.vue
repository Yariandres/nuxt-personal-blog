<template>
  <footer class="footer">
    <div class="footer__logo-box">
      <nuxt-img
        src="/logo.png"
        alt="footer logo icon"
        class="footer__logo"
        width="100"
        height="100"
        loading="lazy"
        format="webp"
      />
    </div>

    <div class="row">
      <div class="col-1">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li>
              <a href="#" class="footer__link">About</a>
            </li>
            <li>
              <a href="#" class="footer__link">Blog</a>
            </li>
            <li>
              <a href="#" class="footer__link">Contact me</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-2">
        <p class="footer__copy-right">
          Built using Vue Nuxt Typescript Wordpress CMS, By
          <a href="#" class="footer__link"> Yari Andres </a>
          For my personal site. <br />
          Copyright &copy; by
          <a href="#" class="footer__link" width="100px" height="auto"
            >Codigo
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-block-start: 100px;
  padding-block-end: 140px;
  padding-inline: 100px;
  color: #5e5d5d;

  .row {
    display: flex;
    align-items: flex-center;
    flex-wrap: wrap;
    gap: 70px;
    justify-content: space-between;
  }

  &__logo-box {
    text-align: center;
  }

  &__logo {
    width: 100px;
    height: auto;
    border-radius: 50%;
  }

  &__navigation {
    border-top: 1px solid rgb(53, 53, 53);
    padding-block-start: 20px;
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  &__copy-right {
    color: rgb(173, 173, 173);
    border-top: 1px solid rgb(53, 53, 53);
    padding-block-start: 20px;
  }

  &__link {
    &:link,
    &:visited {
      color: #e7e7e7;
      background-color: #150f11;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: aquamarine;
      box-shadow: 0 10px 20px rgba(#000000, 0.4);
      transform: rotate(5deg) scale(1.3);
    }
  }
}

.dark {
  .footer {
    background-color: #150f11;
  }
}
</style>
