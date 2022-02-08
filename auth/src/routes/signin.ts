import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import { RequestValidationError } from "../errors/request-validation-error";
import { validateRequest } from "../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email")
      .isEmail()
      .withMessage("Email must be walid")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    const { email, password } = req.body;

    // find User

    // Not Found User

    // res.send("signin");
  }
);

export { router as signin };
