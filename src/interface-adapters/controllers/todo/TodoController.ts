import { CreateTodoUseCase } from '../../../application/todo/use-cases/CreateTodoUseCase';
import type { TodoRepository } from '../../../domain/todo/repositories/TodoRepository';

export class TodoController {
  constructor(private createTodoUseCase: CreateTodoUseCase) {}

  async createTodo(title: string) {
    return await this.createTodoUseCase.execute(title);
  }
}
