import { ICountry, ILanguage } from "../types";

export function sortListByName(list: ICountry[] | ILanguage[]) {
  return list.sort((a, b) => {
    if (a.name && b.name && a.name < b.name) {
      return -1;
    }
    return 1;
  });
}
