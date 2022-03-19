import request from "supertest";
import { app } from "../../app";

it("Post request on /api/tickets", async () => {
  const res = await request(app).post("/api/tickets").send({});
  expect(res.status).not.toEqual(404);
});

it("If user signin ok", async () => {
  await request(app).post("/api/tickets").send({}).expect(401);
});

it("Return a status 401 if user is signed in", async () => {
  const res = await request(app).post("/api/tickets").send({});
  expect(res.status).not.toEqual(401);
});

// it("Return Error if invalid price provided", async () => {
//   return request(app)
//     .post("/api/tickets")
//     .send({
//       title: "alskdflaskjfd",
//       price: 25,
//     })
//     .expect(400);
// });

// it("Create A valid ticket with valid paraments", async () => {
//   return request(app)
//     .post("/api/tickets")
//     .send({
//       title: "alskdflaskjfd",
//       price: 25,
//     })
//     .expect(400);
// });
