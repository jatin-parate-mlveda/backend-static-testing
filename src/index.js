import 'dotenv/config';
import './global/configure-logger.js';
import { createServer } from 'http';
import { app } from './app/index.js';
import { getLogger } from './global/getLogger.js';
import { setupProcessEvents } from './global/setup-process-events.js';
import { connectToDb } from './global/connect-to-db.js';

const logger = getLogger('index.js');
logger.debug(`Running with env: "${process.env.NODE_ENV}"`);

const server = createServer(app);

const port = parseInt(process.env.PORT || '3000', 10);

connectToDb().then(() => {
  server.listen(port, () => {
    setupProcessEvents(server);
    // send ready signal after app has established db connections and started listening
    if (process?.send) {
      process.send('ready');
    }
    logger.debug(`Started listening on port: ${port}`);
  });
});
