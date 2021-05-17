<template>
   <div id="nav">
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'About'}">About</router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar"
})
</script>

<style scoped lang="scss">

</style>