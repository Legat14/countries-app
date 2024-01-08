import { IResultsCounter, RequestCategory } from "../types";

export function ResultsCounter({
  currentTab,
  currentCountry,
  currentLang,
  countriesWithCurrentLang,
  langsOfCurrentCountry,
}: IResultsCounter) {
  let CounterText = (
    <h3>{`Choose a ${
      currentTab === RequestCategory.COUNTRIES ? "country" : "language"
    }`}</h3>
  );
  if (
    langsOfCurrentCountry &&
    currentCountry &&
    currentTab === RequestCategory.COUNTRIES
  ) {
    const totalLangs = langsOfCurrentCountry.length;
    CounterText = (
      <h3>
        There {totalLangs > 1 ? "are" : "is"} <b>{totalLangs}</b> languages
        spoken in <b>{currentCountry.name}</b>
      </h3>
    );
  } else if (
    currentLang &&
    countriesWithCurrentLang &&
    currentTab === RequestCategory.LANGUAGES
  ) {
    const totalCountries = countriesWithCurrentLang.length;
    CounterText = (
      <h3>
        There {totalCountries > 1 ? "are" : "is"} <b>{totalCountries}</b>{" "}
        countries where <b>{currentLang.name}</b> is spoken
      </h3>
    );
  }

  return CounterText;
}
