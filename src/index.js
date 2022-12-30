require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const app = express();
const routes = require("./api-routes");
const PORT = 3100;
const HOSTNAME = "localhost";

app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION_STRING);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error!"));
db.on("open", () => {
  console.log("MongoDB is connected successfully!");
});

app.use("/", (req, res, next) => {
  let log = {
    method: req.method,
    url: req.url,
    headers: req.headers,
    query: req.query,
    timestamp: Date.now(),
  };
  console.log(log);
  fs.appendFile(
    path.join(__dirname, "../logs/logs.log"),
    `${JSON.stringify(log)}\n`,
    "utf-8",
    (err) => {
      if (err) throw err;
    }
  );
  next();
});

app.use("/", routes);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running at: http://${HOSTNAME}:${PORT}`);
});
