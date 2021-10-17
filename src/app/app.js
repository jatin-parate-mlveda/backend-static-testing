import express from 'express';
import cors from 'cors';
import { NotFound, HttpError } from 'http-errors';
import morgan from 'morgan';
import { appRouter } from './app.router';
import { getLogger } from '../global/getLogger';

export const app = express();
const requestLogger = getLogger('request');

app.use(cors({ origin: '*' }));

const {
  env: { NODE_ENV },
} = process;

if (NODE_ENV === 'local' || NODE_ENV === 'test') {
  app.use(
    morgan('tiny', {
      stream: {
        write: str => requestLogger.debug(str),
      },
    }),
  );
}

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
