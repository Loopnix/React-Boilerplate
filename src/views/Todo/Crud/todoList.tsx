import React, { FC } from "react";
import { ITodoListProps } from "../Interface/props/TodoListProps";
import { ITodo } from "store/interface/todo/Todo";
import { useDispatch } from "react-redux";
import {
  deleteTodoAction,
  selectTodoAction
} from "../../../store/actions/todo/todoActions";

const TodoList: FC<ITodoListProps> = props => {
  /**
   * Destructure all props here
   */
  const { todoList } = props;

  /**
   * Created dispatch for to dispatch actions
   */
  const dispatch = useDispatch();

  /**
   * Dispatch action for todo based on actionType
   * @param actionType
   * @param todoId
   */
  const selectedTodo = (actionType: string, todoId: number) => {
    if (actionType.toLowerCase() === "delete") {
      dispatch(deleteTodoAction(todoId));
    } else {
      dispatch(selectTodoAction(todoId));
    }
  };

  /***
   *  Return todoList
   */
  const getTodoList = () => {
    return todoList.map((todo: ITodo, index: number) => (
      <tr key={`toDoList_${index}`}>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.desc}</td>
        <td>
          <div onClick={() => selectedTodo("edit", todo.id)}>Edit</div>
          <div onClick={() => selectedTodo("delete", todo.id)}>Delete</div>
        </td>
      </tr>
    ));
  };

  return (
    <React.Fragment>
      <h1>TodoList</h1>
      <table>
        <thead>
          <td>ID</td>
          <td>Title</td>
          <td>Description</td>
          <td>action</td>
        </thead>
        <tbody>{getTodoList()}</tbody>
      </table>
    </React.Fragment>
  );
};

export default TodoList;
