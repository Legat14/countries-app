function wrapRequest(query: string) {
  return `query Query { ${query} }`;
}

export function unwrapObjectIntoString(obj: object) {
  const query: string = Object.entries(obj).reduce((acc, [key, value]) => {
    if (
      value !== null &&
      typeof value === "object" &&
      Object.values(value).length !== 0
    ) {
      return `${acc} ${key} { ${unwrapObjectIntoString(value)} }`;
    } else {
      return `${acc} ${key}`;
    }
  }, "");
  return query;
}

export function convertObjIntoGraphQlRequest(obj: object) {
  return wrapRequest(unwrapObjectIntoString(obj));
}
