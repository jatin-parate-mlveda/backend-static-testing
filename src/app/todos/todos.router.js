import { Router } from 'express';
import { getAllHandler, createHandler } from './todos.controller';

export const todosRouter = Router();

todosRouter.route('/').get(getAllHandler).post(createHandler);
