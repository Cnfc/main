import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { json } from "body-parser";
import { errorHandler } from "@stticketcore/common";
import { NotFoundError } from "@stticketcore/common";

import { currentUser } from "./routes/current-user";
import { signin } from "./routes/signin";
import { signup } from "./routes/signup";
import { signout } from "./routes/signout";

const app = express();

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);
app.use(signup);
app.use(signin);
app.use(signout);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
