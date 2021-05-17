<template>
    <div class="notfound-container p-4" v-bind:style="{ backgroundImage: 'url(' + bgImg + ')' }">
        <h2 class="text-white text-3xl">Not found page</h2>
        <button class="bg-yellow-100 hover:text-white hover:bg-yellow-600 mx-auto my-1 p-2 rounded flex flex-nowrap duration-100" @click="goHome">Go Home</button>
    </div>
</template>


<script>
import { defineComponent } from "vue";
import notFoundImg from "../assets/img/404.jpg"
import { useRouter } from "vue-router";
export default defineComponent({
  name: "NotFound",

    setup() {
        const router =useRouter()
        const goHome = () => router.push({name: 'Home'})
        const bgImg = notFoundImg
        return {goHome, bgImg}
    }
})
</script>


<style lang="scss" scoped>
.notfound-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #00cbe5;

    button {
        width: fit-content;
    }

}

</style>