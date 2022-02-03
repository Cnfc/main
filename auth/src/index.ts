import express from "express";
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

app.listen(3000, () => {
  console.log("Listening on Port:3000, Auth Server ");
});
