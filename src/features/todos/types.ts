export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoApiResponse {
  items: TodoItem[];
  total: number;
}
