import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import {appendCsv} from './createCsv';
import getArticles from './getArticles';
import getAuthHeaders from './getAuthHeaders';

const main = async () => {
  try {
    const headers = await getAuthHeaders();
    getArticles(headers, articles => {
      appendCsv(
        ['ITEM_ID', 'TAGS', 'SUMMARY', 'CREATION_TIMESTAMP'],
        [
          ...articles.map(article => [
            article.id,
            article.tags.join('|'),
            article.summary.trim(),
            article.timestamp,
          ]),
        ],
        'articles.csv'
      );
    });

    console.log('done');
  } catch (err) {
    console.error(err);
  }
};

main();
