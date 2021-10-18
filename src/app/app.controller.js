import { Error as MongooseError } from 'mongoose';
import { HttpError, NotFound } from 'http-errors';

// eslint-disable-next-line no-unused-vars
export const globalErrorHandler = (err, _req, res, _next) => {
  if (err instanceof MongooseError.ValidationError) {
    res.status(400).json(err);
    return;
  }

  const code = err instanceof HttpError ? err.status : 500;
  res.status(code).json({
    code,
    message: err.message,
  });
};

export const globalNotFoundHandler = (_req, _res, next) =>
  next(NotFound('Page not found!'));
