import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import createCsv from './createCsv';
import getArticles from './getArticles';
import getAuthHeaders from './getAuthHeaders';
import getTags from './getTags';

const main = async () => {
  try {
    // console.log(axios);
    const headers = await getAuthHeaders();
    // getTags(headers);
    const articles = await getArticles(headers);
    // const [tags, articles] = await Promise.all([
    //   getTags(headers),
    //   getArticles(headers),
    // ]);
    createCsv(
      ['ITEM_ID', 'TAGS', 'SUMMARY', 'TIMESTAMP'],
      [
        ...articles.map(article => [
          article.id,
          article.tags.join('|'),
          article.summary,
          article.timestamp,
        ]),
      ],
      'articles.csv'
    );
  } catch (err) {
    console.error(err);
  }
};

main();
// createCsv(
//   ['name', 'age'],
//   [
//     ['John', '20'],
//     ['Jane', '21'],
//     ['Jane', '21'],
//   ],
//   'test.csv'
// );
