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

module.exports = server;