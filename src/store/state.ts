export type Task = {
  id: number
  text: string
  completed: boolean
  isBeingEdited: boolean
};

export type State = {
  loading: boolean
  tasks: Task[]
};

export const state: State = {
  loading: false,
  tasks: []
};
