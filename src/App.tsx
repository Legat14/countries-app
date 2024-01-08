import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { ICountry, ILanguage, RequestCategory } from "./types";
import { fetchData } from "./requests";
import { findAllCountriesByLang } from "./utils";
import {
  BtnsCounter,
  ResultContainer,
  TabBtns,
  BtnsContainer,
  ResultsCounter,
} from "./components";

function App() {
  const [currentTab, setCurrentTab] = useState(RequestCategory.COUNTRIES);
  const [countries, setCountries] = useState<ICountry[] | undefined>(undefined);
  const [languages, setLanguages] = useState<ILanguage[] | undefined>(
    undefined
  );
  const [currentCountry, setCurrentCountry] = useState<ICountry | undefined>(
    undefined
  );
  const [currentLang, setCurrentLang] = useState<ILanguage | undefined>(
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

  return (
    <div className={styles["app_container"]}>
      <div className={styles["request_container"]}>
        <TabBtns
          setCurrentTab={setCurrentTab}
          setCurrentCountry={setCurrentCountry}
          setCurrentLang={setCurrentLang}
          setLangsOfCurrentCountry={setLangsOfCurrentCountry}
          setCountriesWithCurrentLang={setCountriesWithCurrentLang}
        />
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
        <ResultsCounter
          currentTab={currentTab}
          currentCountry={currentCountry}
          currentLang={currentLang}
          countriesWithCurrentLang={countriesWithCurrentLang}
          langsOfCurrentCountry={langsOfCurrentCountry}
        />
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
