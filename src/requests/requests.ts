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

  const data = await response.json();

  console.log("data >>>>>> ", data);

  return data;
}
