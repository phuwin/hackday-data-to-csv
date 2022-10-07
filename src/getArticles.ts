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

const getArticles = async (headers: {
  'Content-Type': string;
  csrf_token: string;
  Authorization: string;
}) => {
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
    data.data.forEach(article => {
      const {id, attributes, relationships} = article;
      const {title, created} = attributes;
      const {field_tags} = relationships;
      const tags = field_tags.data.map(tag => tag.id);
      const timestamp = +new Date(created);
      articles.push({
        id,
        summary: title,
        tags,
        timestamp,
      });
    });
    url = data.links?.next?.href || '';
  }
  return articles;
};

export default getArticles;
