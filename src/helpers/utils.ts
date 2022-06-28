import Cookies from 'js-cookie';
import { IFilmData } from '../mock/film';
import { ActionAutorization } from '../store/actions/authorizationChange';
import {
  ConditionsData,
  cookieAuthorization,
  DEFAULTGENREFILTER,
  FILMSP_PER_PAGE,
  IConditionsSort,
  POSTERBASEURL,
  USER_DATA,
} from './const';

export function compilePosterURL(urlPart: string): string {
  return POSTERBASEURL + urlPart;
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

export function filterFilmByGenre(
  films: Array<IFilmData>,
  genreFilter: Array<number>
): Array<IFilmData> {
  const isEmptyFilter: boolean = JSON.stringify(genreFilter) === JSON.stringify(DEFAULTGENREFILTER);

  if (isEmptyFilter) {
    return films;
  }

  return films.filter((element) => compareGenre(element.genre_ids, genreFilter));
}

function compareGenre(filmGenreList: Array<number>, genreFilter: Array<number>): boolean {
  for (let genre of genreFilter) {
    const genreNotInFilmGenreList: boolean = !filmGenreList.includes(genre);
    if (genreNotInFilmGenreList) {
      return false;
    }
  }
  return true;
}

export function userVerification(name: string, password: string): boolean {
  const verificationPass: boolean =
    name === USER_DATA.userName && password === USER_DATA.userPassword;
  return verificationPass;
}

export function userAuthorizationState(): ActionAutorization {
  const isUserAuthorized: boolean = Boolean(Cookies.get(cookieAuthorization.cookieName));
  return isUserAuthorized
    ? ActionAutorization.AUTHORIZATION_PASS
    : ActionAutorization.NOT_AUTHORIZED;
}

export function userIsAuthorized(state: string): boolean {
  return state === ActionAutorization.AUTHORIZATION_PASS;
}
