import { FindAllCountriesByLang } from "../types";

export function findAllCountriesByLang({
  countries,
  currentLangCode,
}: FindAllCountriesByLang) {
  if (!countries || !currentLangCode) return [];

  const countriesWithCurrentLang = countries.filter((country) => {
    const { languages } = country;
    const hasCurrentLang = languages?.filter((language) => {
      return language.code === currentLangCode;
    });
    return hasCurrentLang && hasCurrentLang.length > 0;
  });
  return countriesWithCurrentLang;
}
