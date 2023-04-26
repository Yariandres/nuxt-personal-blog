<template>
  <div class="menu">
    <ul>
      <li v-for="item in items" :key="item.name">
        <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
      </li>
    </ul>  
</div>
</template>

<script setup lang="ts">
interface MenuItem {
  name: string;
  path: string;
}

defineProps<{
  items: Array<MenuItem>; 
}>();
</script>

<style lang="scss" scoped>
.menu {
  ul {
    margin: 0px;
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    li {
      a {
        color: var(--main-color);
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
</style>