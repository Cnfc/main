import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  if (!req.session?.jwt) {
    return res.send("You ara not auth");
  }

  req.session = null;

  res.send({});
});

export { router as signout };
