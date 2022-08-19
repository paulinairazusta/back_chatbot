const express = require("express");
const botRouter = express.Router();
const { WebhookClient } = require("dialogflow-fulfillment");
const { v4: uuidv4 } = require("uuid");
const Play = require("../models/playModel");

let playName = "";

botRouter.post("/webhook", express.json(), async (request, response) => {
  const agent = new WebhookClient({ request, response });

  function welcome(agent) {
    agent.add(
      "¡Bienvenido/a! Soy el asistente del teatro El Telón. Puedo ayudarte a sacar entradas o brindarte información sobre nuestras obras en cartelera. ¿Qué deseas?"
    );
  }

  async function showPlaysBuy(agent) {
    const plays = await Play.find();
    agent.add(`Muy bien. Estas son nuestras obras en cartelera actualmente:
    -${plays[0].name}
    -${plays[1].name}
    -${plays[2].name}
    -${plays[3].name}
    -${plays[4].name}
    ¿Qué obra deseas ver?`);
  }

  async function showPlaysInformation(agent) {
    const plays = await Play.find();
    agent.add(`Estas son nuestras obras en cartelera actualmente:
    -${plays[0].name}
    -${plays[1].name}
    -${plays[2].name}
    -${plays[3].name}
    -${plays[4].name}
    ¿Deseas consultar sobre alguna en particular?`);
  }

  function askForInformationYes(agent) {
    agent.add("Muy bien ¿Sobre cuál de ellas?");
  }

  async function showSinglePlay(agent) {
    const play = await Play.findOne({ name: agent.parameters.playName });
    playName = play.name;

    agent.add(
      `Las funciones de "${
        play.name
      }" son los ${play.date.toLowerCase()} a las ${
        play.time
      }h y el costo de las entradas es $${play.ticketsPrice}`
    );
    agent.add("¿Deseas algo más?");
  }

  async function offerHelp(agent) {
    agent.add("¿En qué te puedo ayudar?");
  }

  async function sayGoodbye(agent) {
    agent.add("Está bien. Gracias por comunicarte. Hasta la próxima");
  }

  async function askForNumber(agent) {
    const play = await Play.findOne({ name: agent.parameters.playName });
    if (play.tickets === 0) {
      agent.add(
        "Lo sentimos, no quedan entradas disponibles para esta función. ¿Deseas algo más?"
      );
    } else {
      agent.add("¿Cuántas entradas deseas comprar?");
    }

    playName = agent.parameters.playName;
  }

  async function showTicket(agent) {
    const tickets = [];
    const Play = require("../models/playModel");
    const play = await Play.findOne({
      name: playName,
    });
    for (i = 0; i < agent.parameters.number; i++) {
      tickets.push(uuidv4());
    }
    if (agent.parameters.number <= play.tickets && play.tickets > 0) {
      play.tickets = play.tickets - agent.parameters.number;
      play.save();
      agent.add(
        "Muchas gracias por tu compra. Con el siguiente código podrás ingresar a la función"
      );
      for (ticket of tickets) {
        agent.add(`
      ${ticket}`);
      }
      agent.add("¿Deseas algo más?");
    } else if (agent.parameters.number > play.tickets && play.tickets > 0) {
      agent.add(
        `Lo sentimos, el número de entradas solicitado supera la cantidad disponible. En este momento quedan ${play.tickets} entradas para ${play.name}`
      );
    } else {
      agent.add(
        "Lo sentimos, no quedan entradas disponibles para esta función. ¿Deseas algo más?"
      );
    }
  }

  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", welcome);
  intentMap.set("Buy tickets", showPlaysBuy);
  intentMap.set("Ask for information", showPlaysInformation);
  intentMap.set("Ask for information - yes", askForInformationYes);
  intentMap.set("Select play - information", showSinglePlay);
  intentMap.set("Select play - information - yes", offerHelp);
  intentMap.set("Select play - information - no", sayGoodbye);
  intentMap.set("Select play - buy", askForNumber);
  intentMap.set("Select play - buy - yes", offerHelp);
  intentMap.set("Select tickets number", showTicket);
  intentMap.set("Select tickets number - yes", offerHelp);
  intentMap.set("Select tickets number - no", sayGoodbye);
  agent.handleRequest(intentMap);
});

module.exports = botRouter;
