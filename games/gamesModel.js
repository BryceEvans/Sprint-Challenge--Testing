const db = require('../data/dbConfig');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
}

async function insert(gameData) {
  return db('games').insert(gameData);
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('games');
}

function findById(id) {
  return null;
}