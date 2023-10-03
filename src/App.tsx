import { useEffect, useState } from "react";
import "./App.css";
import { request } from "./requests/requests";

function App() {
  const [data, setData] = useState<{ name: string }[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { data } = await request();
      setData(data.countries);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <ul>
        {data &&
          data.map((countrie) => {
            return <li key={countrie.name}>{countrie.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
