import { MutationTree } from 'vuex'
import { State, Task } from './state'

export enum MutationType {
  CreateTask = 'CREATE_ITEM',
  CompleteItem = 'COMPLETE_ITEM',
  DeleteTask = "DELETE_TASK",
  SetLoading = 'SET_LOADING'
}

export type Mutations = {
  [MutationType.CreateTask](state: State, task: Task): void
  [MutationType.CompleteItem](
    state: State,
    task: Partial<Task> & { id: number }
  ): void
  [MutationType.DeleteTask](
    state: State,
    task: Partial<Task> & { id: number }
  ): void
  [MutationType.SetLoading](state: State, value: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreateTask](state, item) {
    state.tasks.unshift(item)
  },
  [MutationType.CompleteItem](state, newTask) {
     const taskIndex = state.tasks.findIndex(task => task.id === newTask.id)
    if (taskIndex === -1) return
    state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...newTask }
  },
  [MutationType.DeleteTask](state, newTask) {
    const filteredTasks = state.tasks.filter(task => task.id !== newTask.id)
   state.tasks = filteredTasks
 },
  [MutationType.SetLoading](state, value) {
    state.loading = value
  }
}
