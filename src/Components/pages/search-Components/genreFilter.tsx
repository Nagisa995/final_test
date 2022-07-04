import { FC } from 'react';
import { GENREFILTERS } from '../../../helpers/genreFilter';
import { GenreCard } from '../filtered-film-list-Components/Filters/Components/filterGenre';
import { IFilter } from './types/interface';

export const GenreFilter: FC<IFilter> = ({ searchFilter, pageStateHandler }) => {
  const genreHandler = (e: any) => {
    const genreID = Number(e.target.value);

    if (searchFilter.genre.includes(genreID)) {
      pageStateHandler({
        ...searchFilter,
        genre: searchFilter.genre.filter((id) => id !== genreID),
      });
    } else {
      pageStateHandler({ ...searchFilter, genre: [...searchFilter.genre, genreID] });
    }
  };

  const genreSelect = GENREFILTERS.map((element) => <GenreCard info={element} key={element.id} />);
  return (
    <>
      <span>Выберите жанры для подбора:</span>
      <ul onChange={genreHandler}>{genreSelect}</ul>
    </>
  );
};
