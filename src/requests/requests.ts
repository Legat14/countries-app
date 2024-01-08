import axios from "axios";
import { convertObjIntoGraphQlRequest } from "../utils";
import { combineErrorMessage } from "./helpers";
import { RequestObj, ResponseData } from "../types";

export async function request(obj: RequestObj) {
  const requestUrl = process.env.REACT_APP_REQUEST_URL;
  const query = convertObjIntoGraphQlRequest(obj);

  try {
    const response = await axios.post(requestUrl!, {
      operationName: "Query",
      query,
      variables: {},
    });
    const responseJSON: ResponseData = response.data;

    if ("errors" in responseJSON) {
      const allErrors = combineErrorMessage(responseJSON);
      console.error(allErrors);
      throw new Error(allErrors);
    }

    return responseJSON.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
