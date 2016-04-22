import * as interfaces from "palantiri-interfaces";
import * as Bluebird from "bluebird";

// Echoes to messages during 60 seconds
export function echoBot (connection: interfaces.Connection, driver: any) {
  console.log("Connecting...");
  connection.connect()
    .catch((error) => {
      console.error("ConnectionError:");
      console.error(error);
    })
    .then((api: interfaces.ConnectedApi) => {
      console.log("Connected, starting to echo message for 60 seconds");

      api.on("message", (message: interfaces.Message) => {
        console.log("Received message: " + message.body);
        let responseMsg: interfaces.Message = new driver.Message(message.body);
        Bluebird.resolve(api.sendMessage(responseMsg, (<any> message).discussion))
          .then(() => {
            console.log("Responded to message");
          })
          .catch((error: Error) => {
            console.log("An error happened while trying to respond");
          });
      });

      setTimeout(() => {
        console.log("Disconnecting");
        connection.disconnect();
      }, 60*1000);
    });
}

export default echoBot;
