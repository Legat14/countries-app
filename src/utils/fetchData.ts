import { Dispatch } from "react";
import { request } from "../requests";
import { RequestCategory, RequestObj } from "../types";
import { COUNTRIES_LIST_OBJ, LANGUAGES_LIST_OBJ } from "../constants";
import { sortListByName } from "./sortListByName";

interface FetchData {
  requestCategory: RequestCategory;
  setState: Dispatch<React.SetStateAction<any>>;
}

export async function fetchData({ requestCategory, setState }: FetchData) {
  let requestObj: RequestObj = COUNTRIES_LIST_OBJ;
  if (requestCategory === RequestCategory.LANGUAGES) {
    requestObj = LANGUAGES_LIST_OBJ;
  }

  const fetchedData = await request(requestObj);
  if (fetchedData && requestCategory in fetchedData) {
    const sortedData = sortListByName(fetchedData[requestCategory]);
    setState(sortedData);
  }
}
