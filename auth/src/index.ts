import express from "express";
import "express-async-errors";
import mongoose from "mongoose";

import { json } from "body-parser";
import { currentUser } from "./routes/current-user";
import { signin } from "./routes/signin";
import { signup } from "./routes/signup";
import { signout } from "./routes/signout";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

app.use(currentUser);
app.use(signin);
app.use(signup);
app.use(signout);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  const options = {};

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", options);
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
