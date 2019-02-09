const request = require('supertest');

const server = require('./server');
const db = require('../data/dbConfig');

afterEach(async () => {
  await db('games').truncate();
})

describe('get / route handler', () => {
  it('responds with 200 status', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  })
  it('responds with json', async () => {
    const response = await request(server).get('/');
    expect(response.type).toMatch(/json/i);
  })
  it('sends the correct response object', async () => {
    const response = await request(server).get('/');
    expect(response.body).toEqual({ api: 'running' });
  })
})

describe('/get games', () => {
  it('responds with 200', async () => {
    const response = await request(server).get('/games');
    expect(response.status).toBe(200);
  })
  it('responds with json', async () => {
    const response = await request(server).get('/games');
    expect(response.type).toMatch(/json/i);
  })
  it('sends cprrect response object', async () => {
    const response = await request(server).get('/games');
    expect(response.body).toEqual([]);
  })
})