'use server';

import { InMemoryTodoRepository } from '../../src/infrastructure/todo/repositories/InMemoryTodoRepository';
import { CreateTodoUseCase } from '../../src/application/todo/use-cases/CreateTodoUseCase';

const todoRepository = new InMemoryTodoRepository();
const createTodoUseCase = new CreateTodoUseCase(todoRepository);

export async function createTodoAction(title: string) {
  return await createTodoUseCase.execute(title);
}
