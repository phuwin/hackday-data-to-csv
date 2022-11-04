import * as fs from 'fs';
import * as path from 'path';

type Headers = string[];
type Data = (string | number)[][];

const createCsv = (headers: Headers, data: Data, filename: string) => {
  const filepath = path.join(process.cwd(), filename);
  const stream = fs.createWriteStream(filepath);
  stream.write(`${headers.join(',')}\n`);
  data.forEach(item => stream.write(`${item.join(',')}\n`));
  stream.end();
};

export const appendCsv = (headers: Headers, data: Data, filename: string) => {
  const filepath = path.join(process.cwd(), filename);
  // check if file exists
  if (!fs.existsSync(filepath)) {
    fs.appendFileSync(filepath, `${headers.join(',')}\n`);
  } else {
    const appendString = data.map(item => `${item.join(',')}\n`).join('');
    fs.appendFileSync(filepath, appendString);
  }
};

export default createCsv;
