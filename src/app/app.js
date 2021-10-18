import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { appRouter } from './app.router';
import { getLogger } from '../global/getLogger';
import { globalErrorHandler, globalNotFoundHandler } from './app.controller';

export const app = express();
const requestLogger = getLogger('request');

app.use(cors({ origin: '*' }));
app.use(json());

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
app.use(globalNotFoundHandler);

// eslint-disable-next-line no-unused-vars
app.use(globalErrorHandler);
