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
    const langsLength = langsOfCurrentCountry.length;
    CounterText = (
      <h3>
        There {langsLength > 1 ? "are" : "is"} <b>{langsLength}</b> languages in
        the <b>{currentCountry.name}</b>
      </h3>
    );
  } else if (
    currentLang &&
    countriesWithCurrentLang &&
    currentTab === RequestCategory.LANGUAGES
  ) {
    const countriesLength = countriesWithCurrentLang.length;
    CounterText = (
      <h3>
        There {countriesLength > 1 ? "are" : "is"} <b>{countriesLength}</b>{" "}
        countries where <b>{currentLang.name}</b> is spoken
      </h3>
    );
  }

  return CounterText;
}
