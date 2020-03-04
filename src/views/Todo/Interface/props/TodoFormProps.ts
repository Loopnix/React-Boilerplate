import { ITodo } from "store/interface/todo/Todo";

export interface ITodoProps {
  /**
   *  Current todo (selected todo during edit)
   */
  currentTodo?: ITodo;
}
