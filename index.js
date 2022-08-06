require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3002;

const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");

const dbInitialSetup = require("./dbInitialSetup");
const { AgentsClient } = require("dialogflow/src/v2");
dbInitialSetup();

app.use(cors());

app.post("/webhook", express.json(), async (request, response) => {
  const agent = new WebhookClient({ request, response });

  async function getTickets(agent) {
    const Play = require("./models/playModel");
    const plays = await Play.find();
    console.log(plays);
    agent.add(`Muy bien. Estas son nuestras obras en cartelera actualmente:
    -${plays[0].name}
    -${plays[1].name}
    -${plays[2].name}
    -${plays[3].name}
    -${plays[4].name}
    ¿Qué obra deseas ver?`);
  }

  async function getInformation(agent) {
    const Play = require("./models/playModel");
    const plays = await Play.find();
    agent.add(`Estas son nuestras obras en cartelera actualmente:
    -${plays[0].name}
    -${plays[1].name}
    -${plays[2].name}
    -${plays[3].name}
    -${plays[4].name}
    ¿Deseas consultar sobre alguna en particular?`);
  }

  function getInformationYes(agent) {
    agent.add("Muy bien ¿Sobre cuál de ellas?");
  }

  async function getPlayName(agent) {
    const Play = require("./models/playModel");
    const play = await Play.findOne({ name: agent.parameters.playName });
    agent.add(
      `Las funciones de "${
        play.name
      }" son los ${play.date.toLowerCase()} a las ${
        play.time
      }h y el costo de las entradas es $${play.ticketsPrice}`
    );
    agent.add("¿Deseas algo más?");
  }

  async function getPlayNameYes(agent) {
    agent.add("¿En qué te puedo ayudar?");
  }

  async function getPlayNameNo(agent) {
    agent.add("Está bien. Gracias por comunicarte. Hasta la próxima");
  }

  let intentMap = new Map();
  intentMap.set("Get tickets", getTickets);
  intentMap.set("Get information", getInformation);
  intentMap.set("Get play name", getPlayName);
  intentMap.set("Get play name - yes", getPlayNameYes);
  intentMap.set("Get play name - no", getPlayNameNo);
  intentMap.set("Get information - yes", getInformationYes);
  agent.handleRequest(intentMap);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
