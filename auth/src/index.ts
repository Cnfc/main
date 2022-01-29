import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.get("/api/users/currentuser", (req, res) => {
  res.send("CurrentUser");
});

app.post("/api/users/signup", (req, res) => {
  res.send("signup");
});

app.post("/api/users/signin", (req, res) => {
  res.send("SignIN");
});

app.post("/api/users/signout", (req, res) => {
  res.send("user signout");
});

app.listen(3000, () => {
  console.log("Listening on Port:3000, Auth Server ");
});
