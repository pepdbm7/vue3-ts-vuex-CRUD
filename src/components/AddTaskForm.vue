<template>
  <form class="my-8" @submit.prevent="createTask">
    <div class="mx-auto flex items-center bg-white p-2 rounded-md shadow-md">
      <div class="flex-grow m-1 ml-3">
        <input id="addButton" v-model="text" class="w-full focus:outline-none" type="text" placeholder="Write your next task to do..." />
      </div>
      <div class="flex-shrink-0">
        <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded">Add</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useStore } from '@/store';
import { Task } from '@/store/state';
import { MutationType } from '@/store/mutations';

export default defineComponent({
  setup() {
    const text = ref('');
    const store = useStore();

    const createTask = () => {
      if (text.value === '') return;

      const newTask: Task = {
        id: Date.now(),
        text: text.value,
        completed: false,
        isBeingEdited: false
      };
      store.commit(MutationType.CreateTask, newTask);
      text.value = '';
    };
    return { createTask, text };
  }
});
</script>
