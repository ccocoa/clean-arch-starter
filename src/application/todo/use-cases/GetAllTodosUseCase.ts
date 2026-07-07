import type { Todo } from '../../domain/todo/entities/Todo.js';
import type { TodoRepository } from '../../domain/todo/repositories/TodoRepository.js';

export class GetAllTodosUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }
}
