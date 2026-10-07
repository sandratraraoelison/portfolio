import type { ReactNode } from "react";
import type { TodoItem } from "./types";

interface TodoItemProps {
  todo: TodoItem;
}

export const TodoItemComponent = ({ todo }: TodoItemProps): ReactNode => (
  <div className="todo-item">
    <input type="checkbox" defaultChecked={todo.completed} />
    <span>{todo.title}</span>
  </div>
);
