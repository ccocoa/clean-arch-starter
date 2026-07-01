import type { Todo } from '../../../domain/todo/entities/Todo.js';
import type { TodoRepository } from '../../../domain/todo/repositories/TodoRepository.js';

export class InMemoryTodoRepository implements TodoRepository {
  private todos: Todo[] = [];

  async create(todo: Todo): Promise<Todo> {
    this.todos.push(todo);
    return todo;
  }
}
