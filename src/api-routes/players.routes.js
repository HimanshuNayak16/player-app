const PlayerRoutes = require("express").Router();
const PlayerControllers = require("../controllers/players.controllers");

PlayerRoutes.post("/", PlayerControllers.createPlayer);

PlayerRoutes.get("/", PlayerControllers.getPlayers);

PlayerRoutes.post("/bulk", PlayerControllers.createBulkPlayers);

PlayerRoutes.put("/:playerId", PlayerControllers.updatePlayer);

PlayerRoutes.delete("/:playerId", PlayerControllers.deletePlayer);

module.exports = PlayerRoutes;
