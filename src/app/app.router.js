import { Router } from 'express';

export const appRouter = Router();

appRouter.get('/', (_req, res) => {
  res.json({
    message: 'Hello, world!',
  });
});
