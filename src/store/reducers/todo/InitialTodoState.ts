import { ITodoReducerState } from "../../interface/todo/Todo";

/**
 * Initial state for todo reducer
 */
export const initialTodoState: ITodoReducerState = {
  /**
   * TodoList (collection of existing todos)
   */
  todoList: [],
  /**
   *  Current selected todo
   */
  selectedTodo: undefined
};
