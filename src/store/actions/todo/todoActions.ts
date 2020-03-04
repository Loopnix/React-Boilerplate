/**
 * Register all action related todo here
 */
import { ITodo } from "../../interface/todo/Todo";
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SELECT_TODO
} from "../../actionTypes/todo/todoActionTypes";
import { IAction } from "../../../common/interface/store/action/Action";

/**
 * Handle add todo action
 * @param todo
 */
export const addTodoAction = (todo: ITodo): IAction => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

/**
 * Handle edit todo action
 * @param todoId
 * @param todo
 */
export const editTodoAction = (todoId: number, todo: ITodo): IAction => {
  return {
    type: EDIT_TODO,
    payload: todo,
    id: todoId
  };
};

/**
 * Handle select todo action
 * @param todoId
 */
export const selectTodoAction = (todoId: number): IAction => {
  return {
    type: SELECT_TODO,
    payload: undefined,
    id: todoId
  };
};
/**
 * Handle delete todo action
 * @param todoId
 */
export const deleteTodoAction = (todoId: number): IAction => {
  return {
    type: DELETE_TODO,
    payload: undefined,
    id: todoId
  };
};
