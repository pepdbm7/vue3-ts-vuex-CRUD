<template>
  <NavBar />
  <main class="container flex flex-col min-h-screen w-screen p-10 mx-auto md:mt-12 max-w-7xl mx-auto">
    <h1 class="text-2xl md:text-3xl text-center p-2 font-bold">ToDo App</h1>
    <h2 class="text-lg md:text-2xl text-center p-2 font-bold mb-6">You won't forget anything ever again</h2>

    <AddTaskForm />
    <TasksList />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TasksList from '../components/TasksList.vue';
import AddTaskForm from '../components/AddTaskForm.vue';
import NavBar from '../components/NavBar.vue';

export default defineComponent({
  name: 'Home',
  components: { TasksList, AddTaskForm, NavBar }
});
</script>
