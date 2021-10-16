const { resolve } = require('path');
const { config } = require('dotenv');

const { error } = config({ path: resolve(`.env.${process.env.NODE_ENV}`) });

if (error) {
  throw error;
}

require('@babel/register')({
  sourceMaps: false,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
});

require('./index');
