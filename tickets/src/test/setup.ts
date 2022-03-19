import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import { app } from "../app";
import jwt from "jsonwebtoken";
declare global {
  namespace NodeJS {
    interface Global {
      signin(): string[];
    }
  }
}

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY_1 = "sadasd";
  process.env.NODE_TLS_REJECT_UNATHORIZED = "0";

  mongo = await MongoMemoryServer.create();
  const mongoUri = await mongo.getUri();

  const options = {
    // useNewParser: true,
    // useUnifiesTopology: true
  };

  await mongoose.connect(mongoUri, options);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = () => {
  const payload = {
    id: "asdasdf213",
    email: "test@test.com",
  };

  const token = jwt.sign(payload, process.env.JWT_KEY_1!);

  const session = {
    jwt: token,
  };

  const sessionJSON = JSON.stringify(session);
  const base64 = Buffer.from(sessionJSON).toString("base64");

  return [`express:sess=${base64}`];

  // const password = "password";

  // const response = await request(app)
  //   .post("/api/users/signup")
  //   .send({
  //     email,
  //     password,
  //   })
  //   .expect(201);

  // const cookie = response.get("Set-Cookie");

  // return cookie;
};
