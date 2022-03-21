import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest, requireAuth } from "@stticketcore/common";

import { Ticket } from "../models/ticket";

const router = express.Router();

router.get(
  "/api/tickets",
  // requireAuth,

  async (req: Request, res: Response) => {
    const tickets = await Ticket.find({});

    // return tickets;
    res.send(tickets);
  }
);

export { router as indexTicketRouter };
