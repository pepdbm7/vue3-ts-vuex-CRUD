<template>
  <nav class="nav shadow-md flex items-center py-2 px-4">
    <router-link class="img_container" :to="{ name: 'Home' }"><img alt="todo logo" :src="require('@/assets/img//postit.svg')" /></router-link>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar'
});
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.nav {
  background-color: $nav-bg;

  a {
    font-weight: bold;
    border: $primary-color 1px solid;
    color: $primary-color;
    padding: 0.75rem 1rem;
    border-radius: 0.42rem;

    &.router-link-exact-active {
      background-color: $secondary-color;
      border: none;
      color: white;
    }

    &.img_container {
      background-color: transparent;
      border: none;
      padding: 0;
      margin-right: 1.5rem;

      img {
        width: 40px;
        height: 40px;
      }
    }

    &:last-child {
      margin-left: auto;
    }
  }
}
</style>
