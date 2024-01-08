import { ITabBtns, RequestCategory } from "../../types";

export function TabBtns({
  setCurrentTab,
  setCurrentCountry,
  setCurrentLang,
  setLangsOfCurrentCountry,
  setCountriesWithCurrentLang,
}: ITabBtns) {
  function handleSelectTab(tab: RequestCategory) {
    setCurrentTab(tab);
    if (tab === RequestCategory.COUNTRIES) {
      setCurrentLang(undefined);
      setCountriesWithCurrentLang([]);
    } else {
      setCurrentCountry(undefined);
      setLangsOfCurrentCountry([]);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => handleSelectTab(RequestCategory.COUNTRIES)}
      >
        Countries
      </button>
      <button
        type="button"
        onClick={() => handleSelectTab(RequestCategory.LANGUAGES)}
      >
        Languages
      </button>
    </>
  );
}
