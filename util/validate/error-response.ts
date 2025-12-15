import { ErrorResponse } from "@/class/error-response";

export default function validateErrorResponse(
  data: any
): data is ErrorResponse {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.status === "number" &&
    typeof data.message === "string"
  );
}
