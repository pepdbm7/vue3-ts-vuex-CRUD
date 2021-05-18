<template>
  <NavBar />
  <main class="about flex flex-col p-8 h-screen w-screen mt-12">
    <h2 class="text-3xl text-center p-2 font-bold">This is an about page</h2>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
export default defineComponent({
  name: 'About',
  components: { NavBar }
});
</script>

<style lang="scss" scoped>
.about {
  button {
    width: fit-content;
  }
}
</style>
