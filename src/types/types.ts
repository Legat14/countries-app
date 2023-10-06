export interface Continent {
  code?: string;
  name?: string;
}

export interface Language {
  code?: string;
  name?: string;
  native?: string;
  rtl?: boolean;
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

export interface ResponseData {
  data: { countries: Country[] };
}
