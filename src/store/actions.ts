import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'

export enum ActionTypes {
  GetTasks = 'GET_ITEMS'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.GetTasks](context: ActionAugments): void
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetTasks]({ commit }) {
    commit(MutationType.SetLoading, true)

    await sleep(1500)

    commit(MutationType.SetLoading, false)
    commit(MutationType.SetItems, [
      {
        id: 1,
        text: 'This is an example of task',
        completed: false
      }
    ])
  }
}
