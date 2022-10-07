import axios from 'axios';
import qs from 'qs';

const getTags = async (headers: {
  'Content-Type': string;
  csrf_token: string;
  Authorization: string;
}) => {
  const tags: {[key: string]: string} = {};
  const sortParam = qs.stringify({
    sort: {
      changed: {
        path: 'changed',
        direction: 'DESC',
      },
    },
  });
  let url = `${process.env.API_HOST}/jsonapi/taxonomy_term/tags?${sortParam}`;
  let index = 0;
  while (url && index < 10) {
    const response = await axios.get(url, {headers});
    const {data} = response;
    data.data.forEach((tag: {id: string; attributes: {name: string}}) => {
      tags[tag.id] = tag.attributes.name;
    });
    url = data.links?.next?.href;
    index++;
  }
  return tags;
};

export default getTags;
