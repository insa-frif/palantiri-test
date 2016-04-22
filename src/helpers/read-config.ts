import * as Bluebird from "bluebird";
import {readFile} from "fs";

let readFileAsync = Bluebird.promisify(readFile);

export function readConfig (path: string) {
  return readFileAsync(path)
    .then((content: Buffer) => {
      return JSON.parse(content.toString("utf8"));
    });
}

export default readConfig;
