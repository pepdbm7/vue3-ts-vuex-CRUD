<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
  <div class="app flex flex-col">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/styles/variables.scss';
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-color;
  background-color: $main-bg;

  button {
    transition: 0.4s all ease-in-out;
  }
}
</style>
