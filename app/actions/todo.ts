'use server';

import { InMemoryTodoRepository } from '../../src/infrastructure/todo/repositories/InMemoryTodoRepository.js';
import { CreateTodoUseCase } from '../../src/application/todo/use-cases/CreateTodoUseCase.js';
import { TodoController } from '../../src/interface-adapters/controllers/todo/TodoController.js';

const todoRepository = new InMemoryTodoRepository();
const createTodoUseCase = new CreateTodoUseCase(todoRepository);
const todoController = new TodoController(createTodoUseCase);

export async function createTodoAction(title: string) {
  return await todoController.createTodo(title);
}
