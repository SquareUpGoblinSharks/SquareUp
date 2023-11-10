const request = require('supertest');
const assert = require('assert');
const express = require('express');
const server = "http://localhost:8000";

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */

async function cleanup() {
  try {
    const response = await request(server)
      .post('/delete')
      .send({ username: 'test626' })
      .set('Content-Type', 'application/json');
    console.log(`Cleanup response status: ${response.status}`);
  } catch (error) {
    console.error('Cleanup error:', error.message);
  }
}

describe("Route integration", () => {
  afterAll(async () => {
    await cleanup();
  });

  describe("/signup", () => {
    describe("POST", () => {
      it("responds with 200 status and sends user json object", () =>
        request(server)
          .post("/signup")
          .send({
            "username": `test626`,
            "password": `test626`,
            "name": `test626`
          })
          .expect("Content-Type", 'application/json; charset=utf-8')
          .expect(200));
    });
  });
  describe("/login", () => {
    describe("POST", () => {
      it("responds with 200 status and sends user json object", () =>
        request(server)
          .post("/login")
          .send({
            "username": `test626`,
            "password": `test626`,
          })
          .expect("Content-Type", 'application/json; charset=utf-8')
          .expect(200));
    });
  });
});