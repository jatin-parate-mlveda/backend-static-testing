import { connect } from 'mongoose';
import { getLogger } from './getLogger';

const logger = getLogger('connectToDb');

const {
  env: { DB_URL },
} = process;

export const connectToDb = async () => {
  try {
    await connect(DB_URL);
    logger.debug('Connected To DB');
  } catch (err) {
    logger.error(err);
    throw err;
  }
};
