<template>
  <NavBar />
  <div class="about flex flex-col p-8 h-screen w-screen mt-12">
    <h1>This is an about page</h1>
  </div>
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
