<template>
  <NavBar />
  <main class="about flex flex-col flex flex-col h-screen w-screen p-10 mx-auto mt-12 max-w-7xl mx-auto">
    <h2 class="text-3xl text-center p-2 font-bold mb-10">This is an about page</h2>
    <p class="mb-5">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis recusandae in, libero at modi, laborum pariatur animi eligendi sit optio
      iusto minima placeat veniam deserunt aspernatur, maxime doloremque? Aliquid, earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Blanditiis recusandae in, libero at modi, laborum pariatur animi eligendi sit optio iusto minima placeat veniam deserunt aspernatur, maxime
      doloremque? Aliquid, earum.
    </p>
    <p class="mb-5">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis recusandae in, libero at modi, laborum pariatur animi eligendi sit optio
      iusto minima placeat veniam deserunt aspernatur, maxime doloremque? Aliquid, earum.
    </p>
    <p class="mb-5">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis recusandae in, libero at modi, laborum pariatur animi eligendi sit optio
      iusto minima placeat veniam deserunt aspernatur, maxime doloremque? Aliquid, earum.
    </p>
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
