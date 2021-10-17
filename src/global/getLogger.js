import { getLogger as createLogger } from 'log4js';

export const getLogger = name => {
  const logger = createLogger(name);

  logger.level =
    process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'local'
      ? 'all'
      : 'info';

  return logger;
};
