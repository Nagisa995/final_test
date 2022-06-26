import { IFilmData } from '../mock/film';
import { FILMSP_PER_PAGE, IConditionsSort, POSTERBASEURL } from './const';

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
      case 'popularity down':
        return b.popularity - a.popularity;
      case 'popularity up':
        return a.popularity - b.popularity;
      case 'vote_average down':
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
