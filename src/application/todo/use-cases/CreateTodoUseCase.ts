import type { Todo } from '../../domain/todo/entities/Todo.js';
import type { TodoRepository } from '../../domain/todo/repositories/TodoRepository.js';

export class CreateTodoUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute(title: string): Promise<Todo> {
    const todo: Todo = {
      id: Math.random().toString(36).substring(7),
      title,
      completed: false,
    };
    return this.todoRepository.create(todo);
  }
}
