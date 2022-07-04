import { FC } from 'react';
import { Filters } from './filtered-film-list-Components/Filters/filters';
import { FilmList } from './filtered-film-list-Components/FilmList/filmList';

export const FilteredFilmList: FC = () => {
  return (
    <div className="mainContent">
      <Filters />
      <FilmList />
    </div>
  );
};
