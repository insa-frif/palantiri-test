export {echoBot} from "./echo-bot";

import readConfig from "./helpers/read-config";

export namespace helpers {
  let readConfig = readConfig;
}
