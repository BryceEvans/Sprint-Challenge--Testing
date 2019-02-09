const express = require('express');

const games = require('../games/gamesModel');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
})

server.get('/games', async (req, res) => {
  const rows = await games.getAll();
  res.status(200).json(rows);
})

server.post('/games', async (req, res) => {
  const gameData = req.body;

  if (gameData.name && gameData.genre) {
    const ids = await games.insert(gameData);
    res.status(201).json(ids);
  } else {
    res.status(422).json({ error: "Missing name or genre in body" });
  }
})

module.exports = server;