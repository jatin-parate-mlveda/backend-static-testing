import log4js from 'log4js';

const { configure } = log4js;

const appenders = {};
const appendersList = ['dateFile'];
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
  pm2: true,
  pm2InstanceVar: 'INSTANCE_ID',
  categories: {
    default: {
      appenders: appendersList,
      level: logLevel,
    },
  },
});
