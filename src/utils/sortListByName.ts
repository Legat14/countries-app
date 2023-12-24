import { Country, Language } from "../types";

export function sortListByName(list: Country[] | Language[]) {
  return list.sort((a, b) => {
    if (a.name && b.name && a.name < b.name) {
      return -1;
    }
    return 1;
  });
}
