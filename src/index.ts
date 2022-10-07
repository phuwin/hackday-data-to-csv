import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import createCsv from './createCsv';

createCsv(
  ['name', 'age'],
  [
    ['John', '20'],
    ['Jane', '21'],
    ['Jane', '21'],
  ],
  'test.csv'
);
