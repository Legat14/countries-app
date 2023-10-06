import { useEffect, useState } from "react";
import { request } from "./requests/requests";
import { Country } from "./types/types";

function App() {
  const [countries, setCountries] = useState<Country[] | null>(null);

  useEffect(() => {
    async function fetchCountries() {
      const fetchedCountries = await request();
      setCountries(fetchedCountries);
    }

    fetchCountries();
  }, []);

  return (
    <div className="App">
      <ul>
        {countries &&
          countries.map((countrie) => {
            return <li key={countrie.name}>{countrie.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
