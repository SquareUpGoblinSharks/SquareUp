const request = require("supertest");

const server = "http://localhost:8000";

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */

// describe("Route integration", () => {
//   describe("/", () => {
//     describe("GET", () => {
//       // Note that we return the evaluation of `request` here! It evaluates to
//       // a promise, so Jest knows not to say this test passes until that
//       // promise resolves. See https://jestjs.io/docs/en/asynchronous
//       it("responds with 200 status and text/html content type", () =>
//         request(server)
//           .get("/")
//           .expect("Content-Type", /text\/html/)
//           .expect(200));
//     });
//   });

//   describe("/markets", () => {
//     describe("GET", () => {
//       it("responds with 200 status and application/json content type", () =>
//         request(server)
//           .get("/markets")
//           .expect("Content-Type", /application\/json/)
//           .expect(200));

//       // For this test, you'll need to inspect the body of the response and
//       // ensure it contains the markets list. Check the markets.dev.json file
//       // in the dev database to get an idea of what shape you're expecting.
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
