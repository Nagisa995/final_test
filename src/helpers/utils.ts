import Cookies from 'js-cookie';
import { ActionAutorization } from '../store/actions/authorizationChange';
import { IFilmData } from '../types/interface';
import { cookieAuthorization, DEFAULTGENREFILTER, POSTERBASEURL } from './const';
import { GENREFILTERS } from './genreFilter';

export function filterFilmByGenre(
  films: Array<IFilmData>,
  genreFilter: Array<number>
): Array<IFilmData> {
  const isEmptyFilter: boolean = compareData(genreFilter, DEFAULTGENREFILTER);

  if (isEmptyFilter) {
    return films;
  }

  return films.filter((element) => compareGenre(element.genre_ids, genreFilter));
}

export function compareData(checkedValue: Array<number>, comparedValue: Array<number>) {
  const compareResult: boolean = JSON.stringify(checkedValue) === JSON.stringify(comparedValue);
  return compareResult;
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

export function userAuthorizationState(): ActionAutorization {
  const isUserAuthorized: boolean = Boolean(Cookies.get(cookieAuthorization.cookieName));
  return isUserAuthorized
    ? ActionAutorization.AUTHORIZATION_PASS
    : ActionAutorization.NOT_AUTHORIZED;
}

export function getGenreList(genreIDList: Array<number>) {
  const genreList = GENREFILTERS.filter((element) => genreIDList.includes(element.id)).map(
    (element) => {
      return element.name;
    }
  );
  return genreList.toString();
}

export function generateFilmURL(id: number): string {
  return `details/${id}`;
}

export function compilePosterURL(urlPart: string): string {
  return POSTERBASEURL + urlPart;
}
