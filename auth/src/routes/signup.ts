import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/signup",
  [body("email").isEmail().withMessage("Email must be walid")],
  [
    body("password")
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage("Password must be walid & between 6-20 chatacters"),
  ],
  (req: Request, res: Response) => {
    const { email, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }

    console.log("Creating a user");
    res.send("signup");
  }
);

export { router as signup };
