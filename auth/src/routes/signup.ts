import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConenctionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";

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
  // errorHandler,
  (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    console.log("Creating a user...");
    throw new DatabaseConenctionError();

    res.send({});
  }
);

export { router as signup };
