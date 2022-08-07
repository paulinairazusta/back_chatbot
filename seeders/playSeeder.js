const Play = require("../models/playModel");

const plays = [
  {
    name: "El Prisionero de la 2da Avenida",
    image:
      "https://www.teatroelgalpon.org.uy/wp-content/uploads/2022/06/El-prisionero-de-la-2da-Avenida-TICKANTEL-700x390-1.jpg",
    tickets: 10,
    ticketsPrice: 200,
    date: "Sábados",
    time: 20,
  },
  {
    name: "Tristeza y alegría en la vida de las jirafas",
    image:
      "https://www.teatroelgalpon.org.uy/wp-content/uploads/2022/05/Tristeza-y-alegria-en-la-vida-de-las-jirafas-1024x512-1.jpg",
    tickets: 10,
    ticketsPrice: 220,
    date: "Viernes",
    time: 20,
  },
  {
    name: "Lluvia constante",
    image:
      "https://www.teatroelgalpon.org.uy/wp-content/uploads/2022/04/tickantel-lluvia-setiembre.png",
    tickets: 10,
    ticketsPrice: 200,
    date: "Sábados",
    time: 22,
  },
  {
    name: "El ardor",
    image:
      "https://www.teatroelgalpon.org.uy/wp-content/uploads/2022/06/1300-X-1033.jpg",
    tickets: 10,
    ticketsPrice: 250,
    date: "Domingos",
    time: 19,
  },
  {
    name: "Matilda, the musical",
    image:
      "https://www.teatroelgalpon.org.uy/wp-content/uploads/2022/07/Matilda-1300-x-1033px.jpg",
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
    const image = plays[i].image;
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
      image,
    });
    await play.save();
  }
  console.log("Plays have been created!");
};
