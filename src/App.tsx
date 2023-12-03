import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { request } from "./requests/requests";
import { Country } from "./types/types";

const queryObj = {
  countries: {
    name: undefined,
    code: undefined,
    native: undefined,
    phone: undefined,
    currency: undefined,
    emoji: undefined,
    emojiU: undefined,
    continent: {
      code: undefined,
      name: undefined,
    },
    languages: {
      code: undefined,
      name: undefined,
      native: undefined,
      rtl: undefined,
    },
    states: {
      code: undefined,
      name: undefined,
    },
  },
};

function App() {
  const [countries, setCountries] = useState<Country[] | null>(null);

  useEffect(() => {
    async function fetchCountries() {
      const fetchedCountries = await request(queryObj);
      if (fetchedCountries && "countries" in fetchedCountries) {
        setCountries(fetchedCountries.countries);
      }
    }

    fetchCountries();
  }, []);

  return (
    <div className={styles["app-container"]}>
      <ul>
        {countries &&
          countries.map((countrie) => {
            return (
              <li key={countrie.name}>
                {countrie.name}{" "}
                <span className={styles["flag"]}>{countrie.emoji}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
