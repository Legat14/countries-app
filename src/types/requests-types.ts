import { Dispatch } from "react";
import { COUNTRIES_LIST_OBJ, LANGUAGES_LIST_OBJ } from "../constants";

export interface IContinent {
  code?: string;
  name?: string;
}

export interface ILanguage {
  code?: string;
  name?: string;
  native?: string;
  rtl?: number;
}

export interface IState {
  code?: string;
  name?: string;
}

export interface ICountry {
  code?: string;
  continent?: IContinent[];
  currency?: string;
  emoji?: string;
  emojiU?: string;
  languages?: ILanguage[];
  name?: string;
  native?: string;
  phone?: string;
  states?: IState[];
}

export interface ILocation {
  line: number;
  column: number;
}

export interface IError {
  locations: ILocation[];
  message: string;
}

export enum RequestCategory {
  COUNTRIES = "countries",
  LANGUAGES = "languages",
}

export interface IOkResponse {
  data: { [key: string]: ICountry[] | ILanguage[] };
}

export interface IErrorResponse {
  errors: IError[];
}

export type ResponseData = IOkResponse | IErrorResponse;

export type RequestObj = typeof COUNTRIES_LIST_OBJ | typeof LANGUAGES_LIST_OBJ;

export interface IFetchData {
  requestCategory: RequestCategory;
  setState: Dispatch<React.SetStateAction<any>>;
}
