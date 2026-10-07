import type { TodoItem } from "./types";

export const todoService = {
  getTodos: async () => [] as TodoItem[],
  createTodo: async () => ({} as TodoItem),
  deleteTodo: async () => true,
};
