import { GetterTree } from 'vuex';
import { State, Task } from './state';

export type Getters = {
  completedCount(state: State): number;
  totalCount(state: State): number;
  tasksBeingEdited(state: State): Task[];
  tasksToShow(state: State): Task[];
};

export const getters: GetterTree<State, State> & Getters = {
  completedCount(state) {
    return state.tasks.filter((task) => task.completed).length;
  },
  totalCount(state) {
    return state.tasks.length;
  },
  tasksBeingEdited(state) {
    return state.tasks.filter((task) => task.isBeingEdited === true);
  },
  tasksToShow(state) {
    const allTasks = state.tasks;
    const filteredTasks = state.filteredTasks;
    const searchQuery = state.searchQuery;

    if (searchQuery) return filteredTasks;
    else return allTasks;
  }
};
