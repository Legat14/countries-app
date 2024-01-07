import { IBtnsCounter, RequestCategory } from "../types";

export function BtnsCounter({
  currentTab,
  countries,
  languages,
}: IBtnsCounter) {
  let CounterText = <h3>{`No ${currentTab} found`}</h3>;
  if (countries && currentTab === RequestCategory.COUNTRIES) {
    CounterText = (
      <h3>
        Total countries number: <b>{countries.length}</b>
      </h3>
    );
  } else if (languages && currentTab === RequestCategory.LANGUAGES) {
    CounterText = (
      <h3>
        Total languages number: <b>{languages.length}</b>
      </h3>
    );
  }

  return CounterText;
}
