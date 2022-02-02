import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class DatabaseConenctionError extends CustomError {
  reason = "Error connecting to Database";
  statusCode = 500;

  constructor() {
    super("Error connecting to Database");

    //
    Object.setPrototypeOf(this, DatabaseConenctionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
