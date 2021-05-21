<template>
  <div class="py-8 flex items-center">
    <div class="flex flex-col text-left">
      <p class="mb-3 font-bold text-xl">Search filter</p>
      <div class="mx-auto flex items-center bg-white rounded-md shadow-md">
        <div class="flex-grow m-1 ml-3">
          <input
            id="search"
            type="text"
            class="text-sm md:text-lg rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            ref="inputRef"
            placeholder="Search taks by their content"
            @keyup="searchQuery()"
          />
        </div>
        <div class="flex-shrink-0 mx-3">
          <button
            class="hidden md:flex focus:outline-none bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 rounded"
            @click="
              clearQuery();
              searchQuery();
            "
          >
            <svg class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            class="flex md:hidden focus:outline-none"
            @click="
              clearQuery();
              searchQuery();
            "
          >
            <svg class="md:mx-4 h-6 w-6 text-blue-500 hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useStore } from '@/store';
import { MutationType } from '@/store/mutations';

export default defineComponent({
  setup() {
    const inputRef = ref();
    const store = useStore();

    const searchQuery = () => {
      store.commit(MutationType.FilterTasks, inputRef.value.value);
    };

    const clearQuery = () => (inputRef.value.value = '');

    return { inputRef, searchQuery, clearQuery };
  }
});
</script>
