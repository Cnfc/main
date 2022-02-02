import { ValidationError } from "express-validator";

export class DatabaseConenctionError extends Error {
  reason = "Error connecting to Database";
  statusCode = 500;

  constructor() {
    super();

    //
    Object.setPrototypeOf(this, DatabaseConenctionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
