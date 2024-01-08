import styles from "./ResultContainer.module.scss";
import { IResultContainer, RequestCategory } from "../../types";

export function ResultContainer({
  currentTab,
  countriesWithCurrentLang,
  langsOfCurrentCountry,
}: IResultContainer) {
  let results = null;
  if (langsOfCurrentCountry && currentTab === RequestCategory.COUNTRIES) {
    results = langsOfCurrentCountry.map((language, index) => {
      const { code, name } = language;
      return (
        <div key={code}>{`${
          index + 1
        } - ${name} (${code?.toUpperCase()})`}</div>
      );
    });
  } else if (
    countriesWithCurrentLang &&
    currentTab === RequestCategory.LANGUAGES
  ) {
    results = countriesWithCurrentLang.map((country, index) => {
      const { code, name, emoji } = country;
      return (
        <div key={code}>
          {`${index + 1} - ${name} (${code?.toUpperCase()}) `}
          <span className={styles["flag"]}>{emoji}</span>
        </div>
      );
    });
  }
  return <div className={styles["results_list"]}>{results}</div>;
}
