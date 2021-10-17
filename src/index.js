import './global/configure-logger';
import { createServer } from 'http';
import { app } from './app';
import { getLogger } from './global/getLogger';
import { setupProcessEvents } from './global/setup-process-events';

const logger = getLogger('index.js');

const server = createServer(app);

const port = parseInt(process.env.PORT || '3000', 10);

server.listen(port, () => {
  setupProcessEvents(server);
  // send ready signal after app has established db connections and started listening
  if (process?.send) {
    process.send('ready');
  }
  logger.debug(`Started listening on port: ${port}`);
});
