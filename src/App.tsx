import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { Country, Language, RequestCategory } from "./types/types";
import { fetchData } from "./utils";
import { customButton } from "./components/customButton";
import { findAllCountriesByLang } from "./utils";

function App() {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [languages, setLanguages] = useState<Language[] | null>(null);
  const [countriesWithCurrentLang, setCountriesWithCurrentLang] = useState<
    Country[]
  >([]);

  console.log("countries >>>>>> ", countries);
  console.log("languages >>>>>> ", languages);

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

  const langBtns = languages
    ? languages.map((language) => {
        const { code, name } = language;
        return customButton({
          key: code,
          label: `${name} - ${code}`,
          onClick: () =>
            setCountriesWithCurrentLang(
              findAllCountriesByLang({ countries, currentLangCode: code })
            ),
        });
      })
    : null;

  return (
    <div className={styles["app-container"]}>
      <div>
        <span>Countries with chosen language: </span>
        {countriesWithCurrentLang &&
          countriesWithCurrentLang.map((country, index) => {
            return (
              <div key={country.code}>
                {index + 1}
                {" - "}
                {country.code}
                {" - "}
                {country.name}{" "}
                <span className={styles["flag"]}>{country.emoji}</span>
              </div>
            );
          })}
      </div>
      {langBtns}
      {/* <ul>
        {countries &&
          countries.map((country) => {
            return (
              <li key={country.code}>
                {country.code}
                {" - "}
                {country.name}{" "}
                <span className={styles["flag"]}>{country.emoji}</span>
              </li>
            );
          })}
      </ul> */}
    </div>
  );
}

export default App;
