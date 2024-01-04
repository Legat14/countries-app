import { Country } from "./requests-types";

export interface CustomButton {
  key?: string | number;
  label?: string;
  onClick?: () => void;
}

export interface FindAllCountriesByLang {
  countries: Country[] | null;
  currentLangCode?: string;
}
