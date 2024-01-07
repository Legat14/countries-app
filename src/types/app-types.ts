import { Dispatch } from "react";
import { ICountry, ILanguage, RequestCategory } from "./requests-types";

export interface ICustomBtn {
  key?: string | number;
  label?: string | JSX.Element;
  onClick?: () => void;
}

export interface IBtnsCounter {
  currentTab: RequestCategory;
  countries?: ICountry[];
  languages?: ILanguage[];
}

export interface IFindAllCountriesByLang {
  countries: ICountry[] | undefined;
  currentLangCode?: string;
}

export interface IBtnsContainer {
  currentTab: RequestCategory;
  countries?: ICountry[];
  languages?: ILanguage[];
  setCurrentCountry: Dispatch<React.SetStateAction<ICountry | undefined>>;
  setLangsOfCurrentCountry: Dispatch<
    React.SetStateAction<ILanguage[] | undefined>
  >;
  setCurrentLang: Dispatch<React.SetStateAction<ILanguage | undefined>>;
  setCountriesWithCurrentLang: Dispatch<React.SetStateAction<ICountry[]>>;
  findAllCountriesByLang: ({
    countries,
    currentLangCode,
  }: IFindAllCountriesByLang) => ICountry[];
}

export interface IResultContainer {
  currentTab: RequestCategory;
  countriesWithCurrentLang?: ICountry[];
  langsOfCurrentCountry?: ILanguage[];
}
