import { ValidationError } from "express-validator";

export class DatabaseConenctionError extends Error {
  reason = "Error connecting to Database";

  constructor() {
    super();

    //
    Object.setPrototypeOf(this, DatabaseConenctionError.prototype);
  }
}
