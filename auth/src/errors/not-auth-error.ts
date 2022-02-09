import { CustomError } from "./custom-error";

export class NotAuthError extends CustomError {
  reason = "Not Authorized Error";
  statusCode = 401;

  constructor() {
    super("Not Autorized");
    Object.setPrototypeOf(this, NotAuthError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
