import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  console.log("currentUser");
  res.send("currentuser");
});

export { router as currentUser };
