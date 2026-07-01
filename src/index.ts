import { InMemoryTodoRepository } from './infrastructure/todo/repositories/InMemoryTodoRepository.js';
import { CreateTodoUseCase } from './application/todo/use-cases/CreateTodoUseCase.js';
import { TodoController } from './interface-adapters/controllers/todo/TodoController.js';

// Dependency Injection
const todoRepository = new InMemoryTodoRepository();
const createTodoUseCase = new CreateTodoUseCase(todoRepository);
const todoController = new TodoController(createTodoUseCase);

// Example Usage
async function run() {
  console.log('Starting...');
  const todo = await todoController.createTodo('Learn Clean Architecture');
  console.log('Todo created:', todo);
}

run();
