import { resolve } from 'path';
import { config } from 'dotenv';

const { error } = config({
  path: resolve(`.env.${process.env.NODE_ENV}`),
});

if (error) {
  throw error;
}
