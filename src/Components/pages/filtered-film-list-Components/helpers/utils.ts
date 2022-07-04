import { ActionAutorization } from '../../../../store/actions/authorizationChange';
import { IFilmData } from '../../../../types/interface';
import { ConditionsData, userSelector } from '../types/enum';
import { IConditionsSort } from '../types/interface';
import { FILMSP_PER_PAGE } from './const';

export function userIsAuthorized(state: string): boolean {
  return state === ActionAutorization.AUTHORIZATION_PASS;
}

export function filterFilmByUserFilter(
  films: Array<IFilmData>,
  userFilter: userSelector
): Array<IFilmData> {
  try {
    const userFilmList = JSON.parse(localStorage.getItem(userFilter) ?? '[]');
    const isEmptyFilter: boolean = userFilter === userSelector.DISABLE_USER_FILTER;

    if (isEmptyFilter) {
      return films;
    }

    return films.filter((element) => userFilmList.includes(element.id));
  } catch (error) {
    return films;
  }
}

export function addInUserFilmList(e: any, iconID: string): void {
  const filmID: number = Number(e.target.alt);
  const isFavoritesList: boolean = iconID === userSelector.FAVORITES;
  if (isFavoritesList) {
    storageList(userSelector.FAVORITES, filmID);
  } else {
    storageList(userSelector.WATCH_LATER, filmID);
  }
}

function storageList(storage: string, filmID: number): void {
  try {
    const filmListInStorage: Array<number> = JSON.parse(localStorage.getItem(storage) ?? '[]');
    const isFilmOnList = filmListInStorage.includes(filmID);
    if (isFilmOnList) {
      localStorage.setItem(
        storage,
        JSON.stringify(filmListInStorage.filter((element) => element !== filmID))
      );
      return;
    }
    localStorage.setItem(storage, JSON.stringify([...filmListInStorage, filmID]));
  } catch (error) {
    return;
  }
}

export function filmsOnCurrentPage(films: Array<IFilmData>, currentPage: number): Array<IFilmData> {
  return films.filter((element, index) => Math.trunc(index / FILMSP_PER_PAGE) === currentPage);
}

export function sortedFilmList(
  films: Array<IFilmData>,
  sortFilter: IConditionsSort
): Array<IFilmData> {
  const sortedByReleaseDate = films.filter((element) =>
    compareDate(element.release_date, sortFilter.dateRelease)
  );
  const sortedByConditions = sortedByReleaseDate.sort((a, b) => {
    switch (sortFilter.conditions) {
      case ConditionsData.POPULARITY_DOWN:
        return b.popularity - a.popularity;
      case ConditionsData.POPULARITY_UP:
        return a.popularity - b.popularity;
      case ConditionsData.VOTE_AVERAGE_UP:
        return a.vote_average - b.vote_average;
      default:
        return b.vote_average - a.vote_average;
    }
  });
  return sortedByConditions;
}

function compareDate(release: string, date: string): boolean {
  const releaseDate = new Date(release);
  const releaseYear = releaseDate.getFullYear();
  return releaseYear === +date;
}
