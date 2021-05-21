export type Task = {
  id: number;
  text: string;
  completed: boolean;
  isBeingEdited: boolean;
};

export type State = {
  loading: boolean;
  tasks: Task[];
  filteredTasks: Task[];
  searchQuery: string;
};

export const state: State = {
  loading: false,
  tasks: [],
  filteredTasks: [],
  searchQuery: ''
};
