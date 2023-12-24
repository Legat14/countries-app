import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { Country, Language, RequestCategory } from "./types/types";
import { fetchData } from "./utils";
import { customButton } from "./components/customButton";
import { findAllCountriesByLang } from "./utils";

function App() {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [languages, setLanguages] = useState<Language[] | null>(null);
  const [currentLang, setCurrentLang] = useState<Language | null>(null);
  const [countriesWithCurrentLang, setCountriesWithCurrentLang] = useState<
    Country[]
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

  const langBtnsTitle = `Total languages quantity: ${languages?.length}`;

  const langBtns = languages
    ? languages.map((language) => {
        const { code, name } = language;
        return customButton({
          key: code,
          label: `${name} - ${code}`,
          onClick: () => {
            setCurrentLang(language);
            setCountriesWithCurrentLang(
              findAllCountriesByLang({ countries, currentLangCode: code })
            );
          },
        });
      })
    : null;

  const resultTitle = currentLang
    ? `There ${countriesWithCurrentLang.length > 1 ? "are" : "is"} ${
        countriesWithCurrentLang.length
      } ${
        countriesWithCurrentLang.length > 1 ? "countries" : "country"
      } in the World, speaking on ${currentLang.name} language: `
    : "Choose a language";

  const result =
    countriesWithCurrentLang &&
    countriesWithCurrentLang.map((country, index) => {
      return (
        <div key={country.code}>
          {index + 1}
          {" - "}
          {country.code}
          {" - "}
          {country.name} <span className={styles["flag"]}>{country.emoji}</span>
        </div>
      );
    });

  return (
    <div className={styles["app-container"]}>
      <div className={styles["langs-container"]}>
        <span>{langBtnsTitle}</span>
        <div className={styles["langs-list"]}>{langBtns}</div>
      </div>
      <div className={styles["results-container"]}>
        <span>{resultTitle}</span>
        <div className={styles["results-list"]}>{result}</div>
      </div>
    </div>
  );
}

export default App;
