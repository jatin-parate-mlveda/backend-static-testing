import { getLogger } from './getLogger';

const logger = getLogger('process-events');

/**
 *
 * @param {import('http').Server} server
 */
const killProcess = (server, isError = false) => {
  if (isError) {
    logger.error('KillProcess');
  } else {
    logger.info('KillProcess');
  }
  if (server) {
    server.close(err => {
      if (err) {
        logger.error(err);
      }
      process.exit(isError || err ? 1 : 0);
    });
  } else {
    process.exit(isError ? 1 : 0);
  }
};

/**
 *
 * @param {import('http').Server} server
 */
export const setupProcessEvents = server => {
  process.on('SIGTERM', () => killProcess(server)); // program terminated
  process.on('SIGINT', () => killProcess(server)); // terminated by user or pm2

  process.on('uncaughtException', err => {
    logger.error(err);
    killProcess(server, true);
  });
};
