import styles from "./BtnsContainer.module.scss";
import { Fragment } from "react";
import { IBtnsContainer, RequestCategory } from "../../types";
import { CustomButton } from "../CustomButton";

export function BtnsContainer({
  currentTab,
  languages,
  countries,
  setCurrentCountry,
  setLangsOfCurrentCountry,
  setCurrentLang,
  setCountriesWithCurrentLang,
  findAllCountriesByLang,
}: IBtnsContainer) {
  let btns = null;
  let currentLetter = "";
  if (countries && currentTab === RequestCategory.COUNTRIES) {
    btns = countries.map((country) => {
      const { code, name, emoji, languages } = country;
      let needToRenderNewCategory = false;
      if (name && currentLetter !== name[0]) {
        currentLetter = name[0].toUpperCase();
        needToRenderNewCategory = true;
      }
      return (
        <Fragment key={code}>
          {needToRenderNewCategory ? (
            <p className={styles["category"]}>{`-${currentLetter}-`}</p>
          ) : null}
          {CustomButton({
            key: code,
            label: (
              <span>
                {`${name} (${code?.toUpperCase()}) `}
                <span className={styles["flag"]}>{emoji}</span>
              </span>
            ),
            onClick: () => {
              setCurrentCountry(country);
              setLangsOfCurrentCountry(languages);
            },
          })}
        </Fragment>
      );
    });
  } else if (languages && currentTab === RequestCategory.LANGUAGES) {
    btns = languages.map((language) => {
      const { code, name } = language;
      let needToRenderNewCategory = false;
      if (name && currentLetter !== name[0]) {
        currentLetter = name[0].toUpperCase();
        needToRenderNewCategory = true;
      }
      return (
        <Fragment key={code}>
          {needToRenderNewCategory ? (
            <p className={styles["category"]}>{`-${currentLetter}-`}</p>
          ) : null}
          {CustomButton({
            key: code,
            label: `${name} (${code?.toUpperCase()})`,
            onClick: () => {
              setCurrentLang(language);
              setCountriesWithCurrentLang(
                findAllCountriesByLang({ countries, currentLangCode: code })
              );
            },
          })}
        </Fragment>
      );
    });
  }
  return <div className={styles["btns_list"]}>{btns}</div>;
}
