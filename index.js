require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3002;
const routes = require("./routes/routes");
const dbConnection = require("./dbConnection");

dbConnection();

app.use(cors());
routes(app);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
