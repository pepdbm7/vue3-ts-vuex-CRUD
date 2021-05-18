export type Task = {
  id: number
  text: string
  completed: boolean
}

export type State = {
  loading: boolean
  items: Task[]
}

export const state: State = {
  loading: false,
  items: []
}
