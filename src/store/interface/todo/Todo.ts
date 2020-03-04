export interface ITodo {
  /**
   * ID of todo
   */
  id: number;
  /**
   * Title of todo
   */
  title: string;
  /**
   * Description of todo
   */
  desc: string;
}

export interface ITodoReducerState {
  /**
   * TodoList (collection of existing all todos)
   */
  todoList: ITodo[];
  /**
   * Current selected todo
   */
  selectedTodo?: ITodo;
}
