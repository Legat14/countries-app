import { ResponseData } from "../types/types";

export async function request() {
  const requestUrl = "https://countries.trevorblades.com/graphql";
  const query = `query Query {
    countries {
      code
      continent {
        code
        name
      }
      currency
      emoji
      emojiU
      languages {
        code
        name
        native
        rtl
      }
      name
      native
      phone
      states {
        code
        name
      }
    }
  }`;

  const response = await fetch(requestUrl, {
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
