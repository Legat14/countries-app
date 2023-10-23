import { ResponseData } from "../types/types";
import { convertObjIntoGraphQlRequst } from "../utils";
import { combineErrorMessage } from "./helpers";

export async function request(obj: object) {
  const requestUrl = process.env.REACT_APP_REQUEST_URL;
  const query = convertObjIntoGraphQlRequst(obj);

  try {
    const response = await fetch(requestUrl!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ operationName: "Query", query, variables: {} }),
    });
    const responseJSON: ResponseData = await response.json();

    if ('errors' in responseJSON) {
      const allErrors = combineErrorMessage(responseJSON);
      console.error(allErrors);
      throw new Error(allErrors);
    }

    return responseJSON.data;

  } catch (error) {
    console.error(error);
    throw error;
  };
}
