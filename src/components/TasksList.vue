<template>
  tasklist
  <div v-if="error">
    {{ error }}
  </div>
  <Suspense v-else>
    <template #default>
      <Task v-for="item in items" :key="item" v-bind="item" />
    </template>
    <template #fallback>Loading...</template>
  </Suspense>
</template>

<script lang="ts">
import { computed, defineComponent, onErrorCaptured, ref } from 'vue';
import { useStore } from '@/store';
import Task from './Task.vue';

export default defineComponent({
  components: { Task },
  setup() {
    const store = useStore();
    const items = computed(() => store.state.items);
    console.log({ items, store, state: store.state });

    const error = ref(null);
    onErrorCaptured((e: any) => {
      error.value = e;
      return true;
    });

    return { items, error };
  }
});
</script>
