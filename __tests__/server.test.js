'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing my HTTP server', () => {

  it('Should be able to run properly', async () => {

    let response = await request.get('/');

    expect(response.status).toEqual(200);
  });
});