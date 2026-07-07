import type { Todo } from '../entities/Todo.js';

export interface TodoRepository {
  create(todo: Todo): Promise<Todo>;
  findAll(): Promise<Todo[]>;
}
