import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { Country, Language, RequestCategory } from "./types/types";
import { fetchData } from "./utils";

function App() {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [languages, setLanguages] = useState<Language[] | null>(null);

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

  return (
    <div className={styles["app-container"]}>
      <ul>
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
      </ul>
    </div>
  );
}

export default App;
