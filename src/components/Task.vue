<template>
  <div class="task flex items-center bg-white rounded-md shadow-md my-2 p-1 border-4" :class="completed ? 'border-green-500' : 'border-white'">
    <div class="flex-shrink-0 m-1 ml-3 align-middle">
      <input v-model="checkRef" type="checkbox" class="cursor-pointer" @change="editTask()" />
    </div>

    <div class="ml-6 flex-grow">
      <input
        v-show="showInput"
        ref="textRef"
        class="w-full focus:outline-none text-center"
        type="text"
        placeholder="Write a text for this task..."
        autofocus
        @keydown.enter="onTextChanged()"
        @focusout="onTextChanged()"
      />
      <h4 v-show="!showInput" class="text-sm md:text-lg text-gray-900 leading-tight cursor-pointer hover:text-gray-500" @click="toggleShowInput()">
        {{ text }}
      </h4>
    </div>
    <div class="flex-shrink-0 hidden md:flex">
      <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded" @click="deleteTask()">Remove</button>
    </div>
    <div class="flex-shrink-0 md:hidden text-red-500 hover:text-red-700 cursor-pointer">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, nextTick } from 'vue';

import { useStore } from '@/store';
import { MutationType } from '@/store/mutations';

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    text: { type: String, required: true },
    completed: { type: Boolean, required: true },
    isBeingEdited: { type: Boolean, required: true }
  },
  setup(props) {
    const store = useStore();
    const textRef = ref();
    const checkRef = ref();
    const showInput = ref(false);

    onMounted(() => {
      textRef.value.value = props.text;
      checkRef.value = props.completed;
      showInput.value = props.isBeingEdited;
    });

    const toggleShowInput = async () => {
      const otherTaskBeingEdited = computed(() => store.getters.tasksBeingEdited?.find((task) => task.id !== props.id));
      if (!otherTaskBeingEdited.value) {
        if (!showInput.value) {
          showInput.value = true;
          nextTick(() => textRef?.value?.focus());
        } else {
          showInput.value = false;
        }
      }
    };

    const editTask = () => {
      if (textRef?.value) store.commit(MutationType.EditTask, { id: props.id, text: textRef.value.value.trim(), completed: checkRef.value });
    };

    const deleteTask = () => {
      store.commit(MutationType.DeleteTask, { id: props.id });
    };

    const onTextChanged = () => {
      editTask();
      toggleShowInput();
    };

    return { editTask, deleteTask, showInput, toggleShowInput, onTextChanged, textRef, checkRef };
  }
});
</script>
