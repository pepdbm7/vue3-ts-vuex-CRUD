<template>
  <NavBar />
  <div class="container flex flex-col h-screen w-screen mt-12">
    <h1 class="text-3xl text-center p-2 font-bold">ToDo App</h1>
    <h2 class="text-2xl text-center p-2 font-bold">You won't forget anything ever again</h2>
  </div>
  <TasksList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TasksList from '../components/TasksList.vue';
import NavBar from '../components/NavBar.vue';

export default defineComponent({
  name: 'Home',
  components: { TasksList, NavBar }
});
</script>
