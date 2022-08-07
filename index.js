require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3002;
const { v4: uuidv4 } = require("uuid");
const playController = require("./controllers/playController");

let playName = "";

const { WebhookClient } = require("dialogflow-fulfillment");

const dbInitialSetup = require("./dbInitialSetup");

dbInitialSetup();

app.use(cors());

app.get("/plays", playController.getPlays);
app.get("/play/:id", playController.getPlayById);

app.post("/webhook", express.json(), async (request, response) => {
  const agent = new WebhookClient({ request, response });

  async function getTickets(agent) {
    const Play = require("./models/playModel");
    const plays = await Play.find();
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

  async function yes(agent) {
    agent.add("¿En qué te puedo ayudar?");
  }

  async function no(agent) {
    agent.add("Está bien. Gracias por comunicarte. Hasta la próxima");
  }

  async function comprarTicket(agent) {
    agent.add("¿Cuántas entradas deseas comprar?");
    playName = agent.parameters.playName;
  }

  async function getNumber(agent) {
    const tickets = [];
    const Play = require("./models/playModel");
    const play = await Play.findOne({
      name: playName,
    });
    console.log(play);
    for (i = 0; i < agent.parameters.number; i++) {
      tickets.push(uuidv4());
    }
    if (agent.parameters.number <= play.tickets && play.tickets > 0) {
      play.tickets = play.tickets - agent.parameters.number;
      play.save();
      agent.add(
        "Muchas gracias por su compra. Con el siguiente código podrá ingresar a la función"
      );
      for (ticket of tickets) {
        agent.add(`
      ${ticket}`);
      }
      agent.add("¿Desea algo más?");
    } else if (agent.parameters.number > play.tickets && play.tickets > 0) {
      agent.add(
        `Lo sentimos, el número de entradas solicitado supera la cantidad disponible. En este momento quedan ${play.tickets} entradas para ${play.name}`
      );
    } else {
      agent.add(
        "Lo sentimos, no quedan entradas disponibles para esta función"
      );
    }
  }

  let intentMap = new Map();
  intentMap.set("Get tickets", getTickets);
  intentMap.set("Get information", getInformation);
  intentMap.set("Get play name", getPlayName);
  intentMap.set("Get play name - yes", yes);
  intentMap.set("Get play name - no", no);
  intentMap.set("Get information - yes", getInformationYes);
  intentMap.set("comprar ticket", comprarTicket);
  intentMap.set("Get tickets number", getNumber);
  intentMap.set("Get tickets number - yes", yes);
  intentMap.set("Get tickets number - no", no);
  agent.handleRequest(intentMap);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
