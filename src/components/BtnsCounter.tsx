import { IBtnsCounter, RequestCategory } from "../types";

export function BtnsCounter({
  currentTab,
  countries,
  languages,
}: IBtnsCounter) {
  let CounterText = <h3>{`No ${currentTab} found`}</h3>;
  if (countries && currentTab === RequestCategory.COUNTRIES) {
    const totalCountries = countries.length;
    CounterText = (
      <h3>
        There {totalCountries > 1 ? "are" : "is"}{" "}
        <b>{`${totalCountries} countries`}</b> in the list
      </h3>
    );
  } else if (languages && currentTab === RequestCategory.LANGUAGES) {
    const totalLangs = languages.length;
    CounterText = (
      <h3>
        There {totalLangs > 1 ? "are" : "is"} <b>{`${totalLangs} languages`}</b>{" "}
        in the list
      </h3>
    );
  }

  return CounterText;
}
