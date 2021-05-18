<template>
  <div v-if="error">
    {{ error }}
  </div>

  <div v-if="loading">
    <h3 class="text-center mt-4"><svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> Loading...</h3>
  </div>

  <div v-else>
    <p class="text-center mt-2">{{ completedCount }} of {{ totalCount }} completed.</p>
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
