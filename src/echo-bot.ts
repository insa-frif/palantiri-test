import {Connection, Api} from "palantiri-interfaces";
import * as Bluebird from "bluebird";

// Echoes to messages during 60 seconds
export function echoBot (connection: Connection) {
  console.log("Connecting...");
  Bluebird.resolve(connection.connect())
    .catch((error) => {
      console.error("ConnectionError:");
      console.error(error);
    })
    .then((api: Api) => {
      console.log("Connected, starting to echo message for 60 seconds");

      api.on("message", <Api.events.EventHandler> ((event: Api.events.MessageEvent) => {
        console.log("Received message: " + event.message.body);
        let responseMsg: Api.NewMessage = {body: event.message.body};
        Bluebird.resolve(api.sendMessage(responseMsg, event.message.body))
          .then(() => {
            console.log("Responded to message");
          })
          .catch((error: Error) => {
            console.log("An error happened while trying to respond");
          });
      }));

      setTimeout(() => {
        console.log("Disconnecting");
        connection.disconnect();
      }, 60*1000);
    });
}

export default echoBot;
