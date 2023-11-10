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
});

//       it('markets from "DB" json are in body of response', async () => {
//         request(server)
//           .put("/markets")
//           .send([{ location: "test", card: 2 }])
//           .expect(200, {
//             location: "test",
//             cards: 3,
//           });
//       });
//     });

//     describe("PUT", () => {
//       it("responds with 200 status and application/json content type", () => {
//         request(server)
//           .put("/")
//           .expect("Content-Type", /application\/json/)
//           .expect(200);
//       });

//       it("responds with the updated market list", async () => {
//         const updatedMarketList = [
//           {
//             location: "costco",
//             cards: 3,
//           },
//         ];
//         const response = await request(server)
//           .put("/markets")
//           .send(updatedMarketList);

//         expect(response.status).toBe(200);
//         expect(response.text).toBe(JSON.stringify(updatedMarketList));
//       });

//       it("responds to invalid request with 400 status and error message in body", async () => {
//         const response = await request(server).put("/kjsdhfjkshdf");
//         if (response.status === 400) expect(response.text).toBe("Bad Request");
//         // expect(response.status).toBe(400)
//         // expect(response.text).toBe(err)
//       });
//     });
//   });
// });
