import request from "supertest";
import { app } from "../../app";

it("returns a 201 an successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});

it("returns a 400 with invalid email signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "testasd.com",
      password: "password",
    })
    .expect(400);
});

it("returns a 400 with invalid password signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "testasd.com",
      password: "pad",
    })
    .expect(400);
});

it("returns a 400 with missing email & password signup", async () => {
  return request(app).post("/api/users/signup").send({}).expect(400);
});

it("set a cookie after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com.com",
      password: "pad",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
