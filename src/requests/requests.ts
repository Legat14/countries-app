import { ResponseData } from "../types/types";
import { convertObjIntoGraphQlRequst } from "../utils";

export async function request(obj: object) {
  const requestUrl = process.env.REACT_APP_REQUEST_URL;
  const query = convertObjIntoGraphQlRequst(obj);
  // const query = `query Query {
  //   countries {
  //     code
  //     continent {
  //       code
  //       name
  //     }
  //     currency
  //     emoji
  //     emojiU
  //     languages {
  //       code
  //       name
  //       native
  //       rtl
  //     }
  //     name
  //     native
  //     phone
  //     states {
  //       code
  //       name
  //     }
  //   }
  // }`;

  console.log('query >>>>>> ', query);

  const response = await fetch(requestUrl!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ operationName: "Query", query, variables: {} }),
  });

  const responceJSON: ResponseData = await response.json();

  console.log("responceJSON >>>>>> ", responceJSON);

  return responceJSON.data.countries;
}
