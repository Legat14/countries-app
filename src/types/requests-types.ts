import { Dispatch } from "react";
import { COUNTRIES_LIST_OBJ, LANGUAGES_LIST_OBJ } from "../constants";

export interface Continent {
  code?: string;
  name?: string;
}

export interface Language {
  code?: string;
  name?: string;
  native?: string;
  rtl?: number;
}

export interface State {
  code?: string;
  name?: string;
}

export interface Country {
  code?: string;
  continent?: Continent[];
  currency?: string;
  emoji?: string;
  emojiU?: string;
  languages?: Language[];
  name?: string;
  native?: string;
  phone?: string;
  states?: State[];
}

export interface Location {
  line: number;
  column: number;
}

export interface Error {
  locations: Location[];
  message: string;
}

export enum RequestCategory {
  COUNTRIES = "countries",
  LANGUAGES = "languages",
}

export interface OkResponse {
  data: { [key: string]: Country[] | Language[] };
}

export interface ErrorResponse {
  errors: Error[];
}

export type ResponseData = OkResponse | ErrorResponse;

export type RequestObj = typeof COUNTRIES_LIST_OBJ | typeof LANGUAGES_LIST_OBJ;

export interface FetchData {
  requestCategory: RequestCategory;
  setState: Dispatch<React.SetStateAction<any>>;
}
