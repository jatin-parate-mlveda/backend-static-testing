import { connect } from 'mongoose';
import { getLogger } from './getLogger.js';

const logger = getLogger('connectToDb');

const {
  env: { DB_URL },
} = process;

export const connectToDb = async () => {
  try {
    await connect(DB_URL, { appName: process.env.APP_NAME });
    logger.debug('Connected To DB');
  } catch (err) {
    logger.error(err);
    throw err;
  }
};
