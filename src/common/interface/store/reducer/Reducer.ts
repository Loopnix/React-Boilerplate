/**
 * Register root reducer state here
 */
import { ITodoReducerState } from "store/interface/todo/Todo";

export interface IRootReducerState {
  /**
   * Todo Reducer state
   */
  todoReducer: ITodoReducerState;
}
