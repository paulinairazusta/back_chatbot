const Play = require("../models/playModel");

const plays = [
  {
    name: "El Prisionero de la 2da Avenida",
    image:
      "https://www.teatroelgalpon.org.uy/wp-content/uploads/2022/06/El-prisionero-de-la-2da-Avenida-TICKANTEL-700x390-1.jpg",
    review: `¿Por qué una comedia escrita y estrenada en Broadway en el año 1971 se ha convertido en su obra más vigente, que más risas obtiene y también, con el tiempo, la que más entradas ha vendido en todo el mundo?
      La respuesta podría estar en que reflexiona, entre risas, sobre la sociedad de consumo, la imperiosa necesidad del éxito económico como logro personal y el miedo a perderlo.¿Se puede hacer una gran comedia sobre temas tan serios, a veces tan dramáticos?
      Neil Simon lo demuestra. Tal vez porque esos temas se han convertido en más y más preocupantes para el hombre de nuestro tiempo  y aquí, el autor se ha convertido sin proponérselo en una especie de profeta moderno.`,
    tickets: 10,
    ticketsPrice: 200,
    date: "Sábados",
    time: 20,
  },
  {
    name: "Tristeza y alegría en la vida de las jirafas",
    image:
      "https://www.teatroelgalpon.org.uy/wp-content/uploads/2022/05/Tristeza-y-alegria-en-la-vida-de-las-jirafas-1024x512-1.jpg",
    review: `Tristeza y alegría en la vida de las jirafas”  nos recuerda lo agridulce que puede ser la vida en el momento de crecer.
      Entre la realidad y la fantasía, los diferentes personajes que irán apareciendo van a permitir a la protagonista avanzar en su viaje y lo más importante, aprender sobre la vida.
      Un periplo que con humor nos permite criticar el consumismo, el capitalismo y la condición humana.`,
    tickets: 10,
    ticketsPrice: 220,
    date: "Viernes",
    time: 20,
  },
  {
    name: "Lluvia constante",
    image:
      "https://www.teatroelgalpon.org.uy/wp-content/uploads/2022/04/tickantel-lluvia-setiembre.png",
    review: `El Mudo y Gabriel son dos policías y amigos bastante diferentes.
El mudo está soltero y no le gusta rodearse de gente, prefiere la soledad, mientras que Gabriel, casado, pasa las horas junto a sus hijos.
En lo único en que coinciden, es que ambos tienen serios problemas que se ocultan el uno al otro. El Mudo lucha en silencio contra el alcoholismo y está enamorado de Natalia, la mujer de su compañero, a la que Gabriel engaña con prostitutas.
Su amistad y su carrera se pondrán a prueba cuando un trepidante caso mal resuelto en el pasado, atormente sus vidas.`,
    tickets: 10,
    ticketsPrice: 200,
    date: "Sábados",
    time: 22,
  },
  {
    name: "El ardor",
    image:
      "https://www.teatroelgalpon.org.uy/wp-content/uploads/2022/06/1300-X-1033.jpg",
    review: `Hace un calor insoportable en el departamento donde viven Rita, una maestra de apoyo escolar, Marco, un escritor de artículos en blogs y Manu, su hijo adolescente en pleno despertar sexual.
      Ellos planeaban un viaje a una casa en El Tigre para paliar el verano, justo cuando reciben la visita de Antonio, un primo del Paraná, que revolverá viejas tensiones familiares.
      Esta obra recibió los Premios Estrella de Mar 2018 a Mejor Comedia Dramática, Mejor Autor, Alfredo Staffolani y Actor Revelación, Santiago Magariños.`,
    tickets: 10,
    ticketsPrice: 250,
    date: "Domingos",
    time: 19,
  },
  {
    name: "Matilda, the musical",
    image:
      "https://www.teatroelgalpon.org.uy/wp-content/uploads/2022/07/Matilda-1300-x-1033px.jpg",
    review: `Matilda The Musical es un espectáculo de comedia musical en inglés de los estudiantes de Secundaria del Colegio Brendan’s School. Recomendada para toda la familia. Duración 1 hora.`,
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
    const review = plays[i].review;
    const tickets = plays[i].tickets;
    const ticketsPrice = plays[i].ticketsPrice;
    const date = plays[i].date;
    const time = plays[i].time;

    const play = new Play({
      name,
      image,
      review,
      tickets,
      ticketsPrice,
      date,
      time,
    });
    await play.save();
  }
  console.log("Plays have been created!");
};
