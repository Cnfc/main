import express, { Request, Response } from "express";
import { body } from "express-validator";

import { validateRequest } from "../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email must be walid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    const { email, password } = req.body;

    // find User

    // Not Found User

    res.send("signin");
  }
);

export { router as signin };
