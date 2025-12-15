export type ErrorCode = 400 | 401 | 403 | 404 | 409 | 410 | 500;

export class ErrorResponse extends Error {
  status: ErrorCode;
  message: string;

  constructor(status: ErrorCode, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export function isErrorResponse(data: any): data is ErrorResponse {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.status === "number" &&
    typeof data.message === "string"
  );
}
