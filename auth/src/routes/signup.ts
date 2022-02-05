import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConenctionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";
import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/users";

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
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in use!");
    }

    const user = User.build({ email, password });
    await user.save();

    res.status(200).send(user);
  }
);

export { router as signup };
