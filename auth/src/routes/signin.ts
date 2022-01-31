import express from "express";

const router = express.Router();

router.get("/api/users/signin", (req, res) => {
  const { email, password } = req.body;

  res.send("signin");
});

export { router as signin };
