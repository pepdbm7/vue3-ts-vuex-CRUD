<template>
  <div class="notfound-container flex flex-col p-8 h-screen w-screen" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
    <h2 class="text-white text-3xl font-bold">Not found page</h2>
    <button
      class="bg-white hover:text-white hover:bg-yellow-600 mx-auto my-6 p-2 rounded flex flex-nowrap duration-100 shadow-md font-bold"
      @click="goHome"
    >
      Go Home
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import notFoundImg from '../assets/img/404.jpg';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'NotFound',

  setup() {
    const router = useRouter();
    const goHome = () => router.push({ name: 'Home' });
    const bgImg = notFoundImg;
    return { goHome, bgImg };
  }
});
</script>

<style lang="scss" scoped>
.notfound-container {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #00cbe5;

  button {
    width: fit-content;
  }
}
</style>
