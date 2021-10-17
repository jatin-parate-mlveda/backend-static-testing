import './global/configure-logger';
import { createServer } from 'http';
import { app } from './app';
import { getLogger } from './global/getLogger';

const logger = getLogger('index.js');

const server = createServer(app);

const port = parseInt(process.env.PORT || '3000', 10);

server.listen(port, () => {
  logger.debug(`Started listening on port: ${port}`);
});
