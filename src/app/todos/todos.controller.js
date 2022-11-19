import HttpErrors from 'http-errors';
import { Error as MongooseError } from 'mongoose';
import { getLogger } from '../../global/getLogger.js';
import { getAll, create } from './todos.service.js';

const { InternalServerError } = HttpErrors;

const logger = getLogger('todosController');

export const getAllHandler = async (req, res, next) => {
  try {
    res.json(await getAll());
  } catch (err) {
    logger.error(err);
    next(new InternalServerError());
  }
};

export const createHandler = async (req, res, next) => {
  try {
    await create(req.body);
    res.status(201).send();
  } catch (err) {
    if (err instanceof MongooseError.ValidationError) {
      next(err);
      return;
    }

    logger.error(err);
    next(new InternalServerError());
  }
};
