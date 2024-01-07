import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { ICountry, ILanguage, RequestCategory } from "./types";
import { fetchData } from "./requests";
import { findAllCountriesByLang } from "./utils";
import { BtnsContainer, BtnsCounter, ResultContainer } from "./components";

function App() {
  const [currentTab, setCurrentTab] = useState(RequestCategory.COUNTRIES);
  const [countries, setCountries] = useState<ICountry[] | undefined>(undefined);
  const [languages, setLanguages] = useState<ILanguage[] | undefined>(
    undefined
  );
  const [currentLang, setCurrentLang] = useState<ILanguage | undefined>(
    undefined
  );
  const [currentCountry, setCurrentCountry] = useState<ICountry | undefined>(
    undefined
  );
  const [countriesWithCurrentLang, setCountriesWithCurrentLang] = useState<
    ICountry[]
  >([]);
  const [langsOfCurrentCountry, setLangsOfCurrentCountry] = useState<
    ILanguage[] | undefined
  >([]);

  useEffect(() => {
    fetchData({
      requestCategory: RequestCategory.COUNTRIES,
      setState: setCountries,
    });
    fetchData({
      requestCategory: RequestCategory.LANGUAGES,
      setState: setLanguages,
    });
  }, []);

  const resultTitle = currentLang
    ? `There ${countriesWithCurrentLang.length > 1 ? "are" : "is"} ${
        countriesWithCurrentLang.length
      } ${
        countriesWithCurrentLang.length > 1 ? "countries" : "country"
      } in the World, speaking on ${currentLang.name} language: `
    : "Choose a language";

  return (
    <div className={styles["app_container"]}>
      <div className={styles["request_container"]}>
        <button
          type="button"
          onClick={() => setCurrentTab(RequestCategory.COUNTRIES)}
        >
          Countries
        </button>
        <button
          type="button"
          onClick={() => setCurrentTab(RequestCategory.LANGUAGES)}
        >
          Languages
        </button>
        <div className={styles["btns_container"]}>
          <BtnsCounter
            currentTab={currentTab}
            countries={countries}
            languages={languages}
          />
          <BtnsContainer
            currentTab={currentTab}
            countries={countries}
            languages={languages}
            setCurrentCountry={setCurrentCountry}
            setLangsOfCurrentCountry={setLangsOfCurrentCountry}
            setCurrentLang={setCurrentLang}
            setCountriesWithCurrentLang={setCountriesWithCurrentLang}
            findAllCountriesByLang={findAllCountriesByLang}
          />
        </div>
      </div>
      <div className={styles["results_container"]}>
        <span>{resultTitle}</span>
        <ResultContainer
          currentTab={currentTab}
          countriesWithCurrentLang={countriesWithCurrentLang}
          langsOfCurrentCountry={langsOfCurrentCountry}
        />
      </div>
    </div>
  );
}

export default App;
