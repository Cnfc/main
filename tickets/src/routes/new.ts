import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest, requireAuth } from "@stticketcore/common";

// import { User } from "../models/users";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  async (req: Request, res: Response) => {
    res.status(200).send({});
  }
);

export { router as createTicketRouter };
