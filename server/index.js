const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();

const { PORT, SERVER_PORT } = process.env;

const app = express();

app.use(bodyParser.json());

massive(SERVER_PORT).then(dbInstance => {
  app.set("db", dbInstance);
});

app.get("/whateverIwant", (req, res) => {
  const dbInstance = req.app.get("db");
  dbInstance.select_all().then(results => {
    res.status(200).send(results);
  });
});

app.listen(PORT, () => console.log("Magic Happens at Port: " + PORT));
