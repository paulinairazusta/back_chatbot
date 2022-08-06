const Play = require("../models/playModel");

const plays = [
  {
    name: "El Prisionero de la 2da Avenida",
    tickets: 10,
    ticketsPrice: 200,
    date: "Sábados",
    time: 20,
  },
  {
    name: "Tristeza y alegría en la vida de las jirafas",
    tickets: 10,
    ticketsPrice: 220,
    date: "Viernes",
    time: 20,
  },
  {
    name: "Lluvia constante",
    tickets: 10,
    ticketsPrice: 200,
    date: "Sábados",
    time: 22,
  },
  {
    name: "El ardor",
    tickets: 10,
    ticketsPrice: 250,
    date: "Domingos",
    time: 19,
  },
  {
    name: "Matilda, the musical",
    ticketsPrice: 300,
    tickets: 10,
    date: "Viernes",
    time: 22,
  },
];
module.exports = async () => {
  // await User.deleteMany({});

  for (let i = 0; i < plays.length; i++) {
    const name = plays[i].name;
    const tickets = plays[i].tickets;
    const ticketsPrice = plays[i].ticketsPrice;
    const date = plays[i].date;
    const time = plays[i].time;

    const play = new Play({
      name,
      tickets,
      ticketsPrice,
      date,
      time,
    });
    await play.save();
  }
  console.log("Plays have been created!");
};
