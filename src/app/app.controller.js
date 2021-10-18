import { Error as MongooseError } from 'mongoose';
import { HttpError, NotFound } from 'http-errors';
import { getLogger } from '../global/getLogger';

const logger = getLogger('appController');

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

export const notifyFrontEndError = async (req, res, next) => {
  try {
    // Can add code to send slack notification also
    logger.error('Got error from frontend', req.body);
    res.status(200).send();
  } catch (err) {
    logger.error(err, 'notifyFrontEndError');
    next(err);
  }
};
