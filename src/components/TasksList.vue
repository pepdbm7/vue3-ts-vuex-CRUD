<template>
  <div v-if="error">
    {{ error }}
  </div>

  <div v-if="loading">
    <h3 class="text-center mt-4">
      <svg class="animate-spin mx-auto my-8 h-16 w-16 text-purple" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Loading...
    </h3>
  </div>

  <div v-else>
    <p class="text-center my-3 italic">{{ completedCount }} of {{ totalCount }} tasks are completed</p>
    <Task v-for="task in tasks" :key="task" v-bind="task" />
  </div>
</template>

<script lang="ts">
import { computed, onMounted, defineComponent, onErrorCaptured, ref } from 'vue';
import { useStore } from '@/store';
import Task from './Task.vue';
import { ActionTypes } from '@/store/actions';

export default defineComponent({
  components: { Task },
  setup() {
    const store = useStore();
    const tasks = computed(() => store.state.tasks);

    const error = ref(null);
    onErrorCaptured((e: any) => {
      error.value = e;
      return true;
    });

    onMounted(() => store.dispatch(ActionTypes.fakeApiCall));

    const loading = computed(() => store.state.loading);
    const completedCount = computed(() => store.getters.completedCount);
    const totalCount = computed(() => store.getters.totalCount);

    return { loading, error, tasks, completedCount, totalCount };
  }
});
</script>
