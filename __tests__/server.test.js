'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing my HTTP server', () => {

  it('Should be able to run properly', async () => {

    let response = await request.get('/');

    expect(response.status).toEqual(200);
  });

  it('should read from food data', async () => {
    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body.count).toBeDefined();
    expect(response.body.results).toBeDefined();
  });
});