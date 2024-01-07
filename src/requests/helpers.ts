import { IErrorResponse } from "../types";

export function combineErrorMessage(response: IErrorResponse) {
  return response.errors.reduce((acc, error, index) => {
    return (
      acc +
      `Error ${index + 1}: ${error.message}, located on: ${error.locations}`
    );
  }, "");
}
