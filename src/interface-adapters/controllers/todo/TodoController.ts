import { CreateTodoUseCase } from '../../../application/todo/use-cases/CreateTodoUseCase.js';
import { TodoRepository } from '../../../domain/todo/repositories/TodoRepository.js';

export class TodoController {
  constructor(private createTodoUseCase: CreateTodoUseCase) {}

  async createTodo(title: string) {
    return await this.createTodoUseCase.execute(title);
  }
}
