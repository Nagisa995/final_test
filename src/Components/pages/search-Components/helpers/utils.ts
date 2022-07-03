import {
  IDefaultSearchPage,
  secondSearchParametr,
  thirdSearchParametr,
} from '../../../../helpers/const';
import { filterFilmByGenre } from '../../../../helpers/utils';
import { IFilmData } from '../../../../mock/film';

export function compareGrade(value: number, filter: string): boolean {
  if (filter === secondSearchParametr.HIGH_GRADE) {
    return value >= 5;
  }
  return value < 5;
}

export function comparePopularity(value: IFilmData, filter: string): boolean {
  if (filter === thirdSearchParametr.POPULAR) {
    return value.popularity > 100 && value.vote_count > 200;
  }
  return value.popularity < 100 || value.vote_count < 200;
}

export function filterFilmList(list: Array<IFilmData>, filters: IDefaultSearchPage) {
  const listFilteredByGenre = filterFilmByGenre(list, filters.genre);
  const listFilteredByGrade = listFilteredByGenre.filter((element) =>
    compareGrade(element.vote_average, filters.grade)
  );
  const filteredFilmList = listFilteredByGrade.filter((element) =>
    comparePopularity(element, filters.popularity)
  );

  return filteredFilmList;
}
