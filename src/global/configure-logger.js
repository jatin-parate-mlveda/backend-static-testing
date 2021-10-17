import { configure } from 'log4js';

const appenders = {};
const appendersList = [];
let logLevel = 'info';

if (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'test') {
  appenders.console = {
    type: 'console',
  };

  appendersList.push('console');

  logLevel = 'all';
}

appenders.dateFile = {
  type: 'dateFile',
  filename: 'logs/app.log',
  compress: true,
};

configure({
  appenders,
  categories: {
    default: {
      appenders: appendersList,
      level: logLevel,
    },
    file: {
      appenders: ['dateFile'],
      level: 'info',
    },
  },
});
