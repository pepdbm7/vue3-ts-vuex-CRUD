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
      <h4 v-show="!showInput" class="text-xl text-gray-900 leading-tight cursor-pointer hover:text-gray-500" @click="toggleShowInput()">
        {{ text }}
      </h4>
    </div>
    <div class="flex-shrink-0">
      <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded" @click="deleteTask()">Remove</button>
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
