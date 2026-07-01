'use server';

import { TodoController } from '../interface-adapters/controllers/todo/TodoController.js';
import { CreateTodoUseCase } from '../application/todo/use-cases/CreateTodoUseCase.js';
import { InMemoryTodoRepository } from '../infrastructure/todo/repositories/InMemoryTodoRepository.js';

const todoRepository = new InMemoryTodoRepository();
const createTodoUseCase = new CreateTodoUseCase(todoRepository);
const todoController = new TodoController(createTodoUseCase);

export async function createTodoAction(title: string) {
  return await todoController.createTodo(title);
}
