import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  validateRequest,
  requireAuth,
  NotFoundError,
} from "@stticketcore/common";

import { Ticket } from "../models/ticket";

const router = express.Router();

router.post(
  "/api/tickets/:id",
  // requireAuth,

  // validateRequest,
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      throw new NotFoundError();
    }

    res.send(ticket);
  }
);

export { router as showTicketRouter };
