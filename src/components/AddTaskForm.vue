<template>
  <div class="flex flex-col text-left">
    <p class="mb-3 font-bold text-xl">Add new tasks</p>
    <form class="mb-8 text-sm md:text-lg" @submit.prevent="createTask">
      <div class="mx-auto flex items-center bg-white rounded-md shadow-md">
        <div class="flex-grow m-1 ml-3">
          <input
            id="addButton"
            v-model="text"
            class="w-full focus:outline-none py-4 px-6 text-sm md:text-lg"
            type="text"
            placeholder="Write a new task..."
          />
        </div>
        <div class="flex-shrink-0 mx-3">
          <button type="submit" class="hidden md:flex focus:outline-none bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded">
            Add
          </button>
          <button type="submit" class="md:hidden focus:outline-none font-bold py-2 px-3 rounded">
            <svg class="h-5 w-5 text-green-500 hover:text-green-700" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  </div>
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
