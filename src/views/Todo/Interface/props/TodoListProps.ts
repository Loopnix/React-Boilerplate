import { ITodo } from "../../../../store/interface/todo/Todo";

export interface ITodoListProps {
  /**
   *  TodoList from todoReducer state
   */
  todoList: ITodo[];
}
