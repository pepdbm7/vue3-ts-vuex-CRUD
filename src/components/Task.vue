<template>
  <div class="flex items-center bg-white rounded-md shadow-md m-2 p-1 border-4" :class="completed ? 'border-green-500' : 'border-white'">
    <div class="flex-shrink-0 m-1 ml-3 align-middle">
      <input type="checkbox" class="cursor-pointer" :checked="completed" @change="toggleCompletion()" />
    </div>
    <div class="ml-6 flex-grow">
      <h4 class="text-xl text-gray-900 leading-tight">{{ text }}</h4>
    </div>
    <div class="flex-shrink-0">
      <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded" @click="deleteTask()">Remove</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useStore } from '@/store';
import { MutationType } from '@/store/mutations';

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    text: { type: String, required: true },
    completed: { type: Boolean, required: true }
  },
  setup(props) {
    const store = useStore();

    const toggleCompletion = () => {
      store.commit(MutationType.CompleteItem, {
        id: props.id,
        completed: !props.completed
      });
    };

    const deleteTask = () => {
      store.commit(MutationType.DeleteTask, { id: props.id });
    };

    return { toggleCompletion, deleteTask };
  }
});
</script>
