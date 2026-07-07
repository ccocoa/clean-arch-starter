'use server';

import { InMemoryTodoRepository } from '../../src/infrastructure/todo/repositories/InMemoryTodoRepository.js';
import { CreateTodoUseCase } from '../../src/application/todo/use-cases/CreateTodoUseCase.js';
import { GetAllTodosUseCase } from '../../src/application/todo/use-cases/GetAllTodosUseCase.js';

const todoRepository = new InMemoryTodoRepository();
const createTodoUseCase = new CreateTodoUseCase(todoRepository);
const getAllTodosUseCase = new GetAllTodosUseCase(todoRepository);

export async function createTodoAction(title: string) {
  return await createTodoUseCase.execute(title);
}

export async function getAllTodosAction() {
  return await getAllTodosUseCase.execute();
}
