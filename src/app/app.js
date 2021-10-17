import express from 'express';
import cors from 'cors';
import { NotFound, HttpError } from 'http-errors';
import { appRouter } from './app.router';

export const app = express();

app.use(cors({ origin: '*' }));

app.use(appRouter);

// Page not found!
app.use((_req, _res, next) => next(NotFound('Page not found!')));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  const code = err instanceof HttpError ? err.status : 500;
  res.status(code).json({
    code,
    message: err.message,
  });
});
