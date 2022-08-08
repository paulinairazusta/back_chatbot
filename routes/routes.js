const botRoutes = require("./botRoutes");
const dbRoutes = require("./dbRoutes");
const playRoutes = require("./playRoutes");

module.exports = (app) => {
  app.use(botRoutes);
  app.use(dbRoutes);
  app.use(playRoutes);
};
