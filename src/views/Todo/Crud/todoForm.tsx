import React, { FC, useEffect, useState } from "react";
import { ITodoProps } from "../Interface/props/TodoFormProps";
import { ITodo } from "../../../store/interface/todo/Todo";
import { useDispatch } from "react-redux";
import {
  addTodoAction,
  editTodoAction
} from "../../../store/actions/todo/todoActions";
import { todoFormInitialState } from "../InitialState/todoFormInitialState";

const TodoForm: FC<ITodoProps> = props => {
  /**
   * Handle state for todoItem
   */
  const [todoItem, setTodoItem] = useState<ITodo>({
    ...todoFormInitialState.todoItem
  });

  /**
   * Dispatch action
   */
  const dispatch = useDispatch();

  /**
   * Destructured all props here
   */
  const { currentTodo } = props;

  useEffect(() => {
    /**
     * Call setTodoItem when currentTodo change
     * It is basically called in edit mode
     */
    if (currentTodo) setTodoItem(currentTodo);
  }, [currentTodo]);

  /**
   *  It will clear form
   */
  const clearForm = () => {
    setTodoItem({ ...todoFormInitialState.todoItem });
  };

  /**
   * Handle save
   * It is dispatch action according for create or edit
   */
  const handleSave = () => {
    if (!currentTodo) {
      dispatch(addTodoAction({ ...todoItem, id: +new Date() }));
      clearForm();
    } else {
      dispatch(editTodoAction(currentTodo.id, todoItem));
      clearForm();
    }
  };

  /**
   * Destructure todoItem state
   */
  const { title, desc } = todoItem;

  /**
   * Render content on page
   */
  return (
    <React.Fragment>
      <h1>Todo Form</h1>
      <input
        type="text"
        value={title}
        onChange={e => setTodoItem({ ...todoItem, title: e.target.value })}
      />
      <input
        type="text"
        value={desc}
        onChange={e => setTodoItem({ ...todoItem, desc: e.target.value })}
      />
      <button onClick={handleSave}>Save</button>
    </React.Fragment>
  );
};

export default TodoForm;
