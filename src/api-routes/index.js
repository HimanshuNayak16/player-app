const routes = require("express").Router();
const PlayerRoutes = require("./players.routes");

routes.get("/", (req, res) => {
  res.send({ msg: "Hello from server!" });
});

routes.use("/players", PlayerRoutes);

module.exports = routes;
