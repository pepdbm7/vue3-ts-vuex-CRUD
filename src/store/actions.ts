import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'

export enum ActionTypes {
  fakeApiCall = 'FAKE_API_CALL'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.fakeApiCall](context: ActionAugments): void
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.fakeApiCall]({ commit }) {
    commit(MutationType.SetLoading, true)

    await sleep(1000)

    commit(MutationType.SetLoading, false)
  }
}
