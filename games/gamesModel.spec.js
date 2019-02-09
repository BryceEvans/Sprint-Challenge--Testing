const games = require('./gamesModel');
const db = require('../data/dbConfig');

describe('the game model', () => {
  
  afterEach(async () => {
    await db('games').truncate();
  })

  it('should insert new games', async () => {
    const ids = await games.insert({ name: "Hero Quest", genre: "Board", releaseYear: 1990 });

    expect(ids.length).toBe(1);
    expect(ids[0]).toBe(1);
  })
})