import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  reason = "Not Found";
  statusCode = 404;

  constructor() {
    super("Route not found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
