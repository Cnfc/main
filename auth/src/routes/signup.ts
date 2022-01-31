import express from "express";

const router = express.Router();

router.get("/api/users/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || typeof email !== "string") {
    res.status(400).send("Provide a valid email & Pass");
  }
  console.log(email, password);
  res.send("signup");
});

export { router as signup };
