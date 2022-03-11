import request from "supertest";
import { app } from "../../app";

it("Post request on /api/tickets", async () => {
  const res = await request(app).post("/api/tickets").send({});
  expect(res.status).not.toEqual(404);
});

it("If user signin", async () => {
  return request(app)
    .post("/api/tickets")
    .send({
      title: "alskdflaskjfd",
      price: 25,
    })
    .expect(400);
});
it("Return Error if invalid title provided", async () => {
  return request(app)
    .post("/api/tickets")
    .send({
      title: "alskdflaskjfd",
      price: 25,
    })
    .expect(400);
});

it("Return Error if invalid price provided", async () => {
  return request(app)
    .post("/api/tickets")
    .send({
      title: "alskdflaskjfd",
      price: 25,
    })
    .expect(400);
});

it("Create A valid ticket with valid paraments", async () => {
  return request(app)
    .post("/api/tickets")
    .send({
      title: "alskdflaskjfd",
      price: 25,
    })
    .expect(400);
});
