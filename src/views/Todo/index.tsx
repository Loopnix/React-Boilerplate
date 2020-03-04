import React, { FC } from "react";
import TodoForm from "./Crud/todoForm";
import TodoList from "./Crud/todoList";
import { useSelector } from "react-redux";
import { ITodoReducerState } from "../../store/interface/todo/Todo";
import { IRootReducerState } from "../../common/interface/store/reducer/Reducer";

/**
 *  Handle Todo app
 * @constructor
 */
const TodoApp: FC = () => {
  /**
   * Get todoReducer state
   */
  const toDoReducer: ITodoReducerState = useSelector(
    (state: IRootReducerState) => state.todoReducer
  );

  return (
    <div>
      <TodoForm currentTodo={toDoReducer.selectedTodo} />
      <TodoList todoList={toDoReducer.todoList} />
    </div>
  );
};

export default TodoApp;
