import axios from 'axios';
import qs from 'qs';

export type Article = {
  id: string;
  summary: string;
  tags: string[];
  timestamp: number;
};

type JsonApi = {
  data: {
    id: string;
    attributes: {
      title: string;
      created: string;
    };
    relationships: {
      field_tags: {
        data: {
          id: string;
        }[];
      };
    };
  }[];
  links: {
    next?: {
      href: string;
    };
  };
};

const getArticles = async (
  headers: {
    'Content-Type': string;
    csrf_token: string;
    Authorization: string;
  },
  callback?: (articles: Article[]) => void
) => {
  const articles: Article[] = [];
  const sortParam = qs.stringify({
    sort: {
      created: {
        path: 'created',
        direction: 'DESC',
      },
    },
  });
  let url = `${process.env.API_HOST}/jsonapi/node/seiska_article?${sortParam}`;
  while (url) {
    const response = await axios.get<JsonApi>(url, {headers});
    const {data} = response;
    const currentArticles = [] as Article[];
    data.data.forEach(article => {
      const {id, attributes, relationships} = article;
      const {title, created} = attributes;
      const {field_tags} = relationships;
      const tags = field_tags.data.map(tag => tag.id);
      const timestamp = +new Date(created) / 1000;
      const item = {
        id,
        summary: title,
        tags,
        timestamp,
      };
      articles.push(item);
      currentArticles.push(item);
    });
    console.log(`Fetched ${articles.length} articles`);
    // if (articles.length > 220) break;
    url = data.links?.next?.href || '';
    if (callback && typeof callback === 'function') callback(currentArticles);
  }
  return articles;
};

export default getArticles;
