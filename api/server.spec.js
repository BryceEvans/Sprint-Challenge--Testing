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

describe('/post games', () => {

  afterEach(async () => {
    await db('games').truncate();
  })

  it('responds with a 201 status when body is correct', async () => {
    const body = { name: 'Hero Quest', genre: 'Board', releaseYear: 1990 };
    const response = await request(server).post('/games').send(body);
    expect(response.status).toBe(201);
  })
  it('responds with 422 when body is missing data', async () => {
    const body = {};
    const response = await request(server).post('/games').send(body);
    expect(response.status).toBe(422);
  })
  it('responds with an array containing a new id', async () => {
    const body = { name: 'Hero Quest', genre: 'Board', releaseYear: 1990 };
    const response = await request(server).post('/games').send(body);
    expect(response.body.length).toBe(1);
  })
})