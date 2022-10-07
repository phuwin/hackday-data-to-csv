import * as fs from 'fs';
import * as path from 'path';

type Headers = string[];
type Data = string[][];

const createCsv = (headers: Headers, data: Data, filename: string) => {
  const filepath = path.join(process.cwd(), filename);
  const stream = fs.createWriteStream(filepath);
  stream.write(`${headers.join(',')}\n`);
  data.forEach(item => stream.write(`${item.join(',')}\n`));
  stream.end();
};

export default createCsv;
