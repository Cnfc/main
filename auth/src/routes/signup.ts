import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import os from "os";
import jwt from "jsonwebtoken";

import { validateRequest } from "../middlewares/validateRequest";
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
  validateRequest,
  // errorHandler,
  async (req: Request, res: Response) => {
    const platform = os.platform();
    const version = os.version();

    const settings = [platform, version];
    console.log(settings);

    const { email, password } = req.body;
    console.log(email, password);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in use!");
    }

    const user = User.build({ email, password, version });
    await user.save();

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY_1!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(user);
  }
);

export { router as signup };
