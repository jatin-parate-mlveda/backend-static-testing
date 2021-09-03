import * as fs from 'fs';
import { promisify } from 'util';
import sum from './sum';

console.log(sum(1, 2));

promisify(fs.readdir)('.').then(result => {
  console.log(result);
});
