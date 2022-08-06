// const dialogflow = require("dialogflow");

// const dialogflowConfig = require("./config");
// const projectId = "asistente-platzi-9cfc9";
// const configuration = {
//   credentials: {
//     private_key:
//       "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCV+5TiTfjBr42W\nqrvazO4UoO1+LunfeS7uyjo6gcoAVBR3YQU1iw1dRg2+ZTU85iDbYvbM1pMJHWo5\nDPuaVW31us3/uT1JP0oZ0fkk1/OyARe6WYNaNfoBqlOaykFVYJBobH3gLK+QRepI\nHAXxfRSue2eGtrVyMKjt+vWBBpW1LLcSaJlVwmTwWZiuW5QvP7PqjjyLxuzj3Zrn\nDO/AipMGkIH7mO3HkysbNew2BjhS8jD7hN1UfmE0kdNFUAHmWvchDHTSZfrhpAA0\nwwle6Y78HPbn4i33h88vS2DJe5ZQ0mK9JNnxLMZjTCjW4RuRWRBZQNv4NQViNjxJ\nCA8ooeEDAgMBAAECggEAFzoymQeVRj2vUk2XsS96kZRIo3mVe6fzVkTYVrZB9+IN\nl11dpqilxbOzLjDTWV6UaRV+/kMe21MEX9h8YK7pTByFiZyA+saD7dLAYG3XTlJv\n/8qcFoz0bmyX7Ql0q8m8I4flyKFzAQdq3IcGfpst6EWxR0IlgI07pDtw6O4BomCR\nOkxYLqD4K2igB+vIDZ8Vc3hAr+yRk3V501z1VYigODlcYfoA/8w17XqfyWj60AgL\ngb0vPnBUdOkO2TXBudfuzFX+o1MYV9hZahMIaIKgRzmJMgR5ZXsAvUN6tRUeQe5l\n6SxKWGCpcbWeaHIh2R6mhWoxII00oAEXjvq/VvlUwQKBgQDEA+X6J9MN/3nvnvzV\nbTnAkN0bh8JZsarS0NKpUYz/jwt5tBavxLG6MdpdQuUA98S23OrRV4CKTb9Puh29\nVwNH6WLlkAXmmS7o2VihKJD5obPst5AGNPNp+Geb7+U7CfK7C3Zz5W3nFylIfAsL\nLbHkJaOpkVRZf0C7/H8RKRO+QQKBgQDD4W9gkHBvgtgIL+ZYHZ3ne0va4QCDm42d\nYDl5wyxLjCmfLfX3MLfOEU83ul8YVOnQynp+TtnF+JQxsEi0iNf28dNHapZeCU6U\n+BoMHBaOHjH+J/SK6ZogxyWNEWKDzw+VJAyrNyqquTYOMiNTtyqHsjPW9nAlxWEw\nVyvmIb2WQwKBgQC1DHi+P0yFEGUbO/mCVLnUMLnZtOKBoEYNJM5/kBCw9/n8dqfB\nv+b8+REdtSz6YOA0mwbVR4I1vKwpQto3SYiBQoOTUBzzKqgWcLKZYHPP71jWG5KO\n+Ref2M4yTTmo935Y37SQRejmWxFJnzFAKPu3pEBv3glQBObQ+96OBifzQQKBgFY4\n9X3cFqH/RnjUHODMqKUscMd4I3HLFxsfMC2Y6/aVS/z1jj+xAjeDBwvQzes39XQi\nrKjMrK+oLBNzNY3Cbs4UxJu7H1VlY2HPlCegdY05XWgyzkIXcfDbuHvQGz1J9+H+\nbFUxg2aDAHhfOY2wIth4aLlG4Ta/G3jb5kb2sy1hAoGAFKmwkEfQ+SxcrHMp0jox\nAXY+VuSqxBJQuCjiYbW6mEJ1rY4ht0pSZqlXOVPd0k526veZo/Jao/2WJtfK2Vpg\nx1GyOw+Or1HPD8LlEl1s5c9jT4VMMvcijaK0pSXLidY+q33zgzEOXC9LisqLpg6T\naCKdSt/EFcHpENOoh20DZ4s=\n-----END PRIVATE KEY-----\n",
//     client_email:
//       "asistente-platzi@asistente-platzi-9cfc9.iam.gserviceaccount.com",
//   },
// };

// const sessionId = "987654";
// const languageCode = "es-ES";
// const sessionClient = new dialogflow.SessionsClient(configuration);

// const sessionPath = sessionClient.sessionPath(projectId, sessionId);

// async function talkToChatbot(message) {
//   console.log("message " + message);
//   const botRequest = {
//     session: sessionPath,
//     queryInput: {
//       text: {
//         text: message,
//         languageCode,
//       },
//     },
//   };

//   const response = await sessionClient
//     .detectIntent(botRequest)
//     .then((responses) => {
//       console.log(JSON.stringify(responses));
//       const requiredResponse = responses[0].queryResult;
//       return requiredResponse;
//     })
//     .catch((error) => {
//       console.log("ERROR: " + error);
//     });

//   return response;
// }

// module.exports = talkToChatbot;
