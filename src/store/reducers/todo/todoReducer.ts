/**
 * It is todo reducer where todo related all action are handle and manage state for todo
 */
import { ITodo, ITodoReducerState } from "../../interface/todo/Todo";
import { initialTodoState } from "./InitialTodoState";
import { IAction } from "../../../common/interface/store/action/Action";
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SELECT_TODO
} from "../../actionTypes/todo/todoActionTypes";

/**
 *
 * Todo reducer which handle all action related todo
 *
 * @param state
 * @param action
 */
export default (
  state: ITodoReducerState = initialTodoState,
  action: IAction
): ITodoReducerState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        selectedTodo: undefined
      };
    case SELECT_TODO:
      const selectedTodo = state.todoList.find(
        (todo: ITodo) => todo.id === action.id
      );
      return { ...state, selectedTodo };
    case EDIT_TODO:
      const editIndex = state.todoList.findIndex(
        (todo: ITodo) => todo.id === action.id
      );
      const newEditTodoList = [...state.todoList];
      newEditTodoList[editIndex] = action.payload;
      return { ...state, todoList: newEditTodoList, selectedTodo: undefined };
    case DELETE_TODO:
      const newDeleteTodoList = [...state.todoList];
      const deleteIndex = state.todoList.findIndex(
        (todo: ITodo) => todo.id === action.id
      );
      newDeleteTodoList.splice(deleteIndex, 1);
      return { ...state, todoList: newDeleteTodoList };
    default:
      return state;
  }
};
