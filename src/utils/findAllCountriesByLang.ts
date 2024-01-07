import { IFindAllCountriesByLang } from "../types";

export function findAllCountriesByLang({
  countries,
  currentLangCode,
}: IFindAllCountriesByLang) {
  if (!countries || !currentLangCode) return [];

  const countriesWithCurrentLang = countries.filter((country) => {
    const { languages } = country;
    const countriesThatHasCurrentLang = languages?.filter((language) => {
      return language.code === currentLangCode;
    });
    return (
      countriesThatHasCurrentLang && countriesThatHasCurrentLang.length > 0
    );
  });
  return countriesWithCurrentLang;
}
