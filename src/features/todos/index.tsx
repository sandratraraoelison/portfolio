/**
 * Exemple de fonctionnalité isolée (feature)
 * Structure: services, composants et types localisés
 */

import type { ReactNode } from 'react'

// Types locaux à la feature
export interface TodoItem {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

// Interface pour la réponse API
export interface TodoApiResponse {
  items: TodoItem[]
  total: number
}

// Composant localiser à la feature (optionnel)
interface TodoItemProps {
  todo: TodoItem
}

export const TodoItemComponent = ({ todo }: TodoItemProps): ReactNode => {
  return (
    <div className="todo-item">
      <input type="checkbox" defaultChecked={todo.completed} />
      <span>{todo.title}</span>
    </div>
  )
}

// Service localisé à la feature
export const todoService = {
  getTodos: async () => {
    // À implémenter avec apiService
    return [] as TodoItem[]
  },

  createTodo: async (title: string) => {
    void title
    // À implémenter
    return {} as TodoItem
  },

  deleteTodo: async (id: string) => {
    void id
    // À implémenter
    return true
  },
}
