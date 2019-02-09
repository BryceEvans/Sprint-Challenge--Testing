const express = require('express');

const games = require('../games/gamesModel');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
})

module.exports = server;