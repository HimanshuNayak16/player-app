const Players = require("../models/players.models");

const getPlayers = (req, res) => {
  Players.find({}).exec((err, playerList) => {
    if (err) {
      return res.status(500).send({ msg: "Internal Server Error" });
    }
    res.status(200).send({ playerList: playerList }); //sends the response and ends the request
  });
  // res.json(null); //sends the response and ends the request but it also parses null & undefined
};

const createPlayer = (req, res) => {
  const player = new Players(req.body);
  player.save((err, createdPlayer) => {
    if (err) {
      return res.status(500).send({ msg: "Internal Server Error" });
    }
    res.status(201).send({ result: createdPlayer });
  });
};

const createBulkPlayers = (req, res) => {
  res.send(playerList);
};

const updatePlayer = (req, res) => {
  Players.findByIdAndUpdate(
    req.params.playerId,
    req.body,
    { new: true },
    (err, updatedPlayer) => {
      if (err) {
        return res.status(500).send({ msg: "Internal Server Error" });
      }
      res.status(200).send({ result: updatedPlayer });
    }
  );
};

const deletePlayer = (req, res) => {
  // Users.findByIdAndDelete(req.params.userId, () => { })
  Players.deleteOne({ _id: req.params.userId }, (err, deletedPlayer) => {
    if (err) {
      return res.status(500).send({ msg: "Internal Server Error" });
    }
    if (deletePlayer.deletedCount === 1) {
      res.status(200).send({ result: deletedPlayer });
    } else {
      res.status(400).send({ msg: "player nor found with the sent playerId" });
    }
  });
};

module.exports = {
  getPlayers,
  createPlayer,
  createBulkPlayers,
  updatePlayer,
  deletePlayer,
};
