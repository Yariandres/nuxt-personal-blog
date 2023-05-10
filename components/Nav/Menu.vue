<template>
  <div class="menu">
    <ul>
      <li v-for="item in items" :key="item.name">
        <NuxtLink class="tooltip" :data-tooltip="item.name" :to="item.path">
          <i :class="item.icon"></i>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface MenuItem {
  name: string;
  path: string;
  icon: string;
}

defineProps<{
  items: Array<MenuItem>;
}>();
</script>

<style lang="scss" scoped>
.menu {
  .tooltip {
    position: relative;
  }

  .tooltip::before {
    content: attr(data-tooltip);
    position: absolute;
    top: -15px;
    right: -80px;
    font-size: 14px;
    padding: 2px 5px;
    background-color: #969dab;
    color: #fff;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
  }

  .tooltip:hover::before {
    opacity: 1;
  }

  ul {
    margin: 0px;
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 27px;

    li {
      a {
        i {
          font-size: 25px;
          color: #130f49;
          width: 100%;

          &:hover {
            color: var(--blue-color);
            transition: 0.3s ease-in-out;
          }
        }
      }
    }
  }
}
.router-link-active {
  background-color: #f8d1a7;
  height: 100px;
  width: auto;
  border-radius: 50px;
}
</style>
