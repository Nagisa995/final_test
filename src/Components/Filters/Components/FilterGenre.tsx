import { FC } from 'react';
import { GENREFILTERS, IGenreFilter } from '../../../mock/genreFilter';

export const FilterGenre: FC = () => {
  const filters = GENREFILTERS.map((element) => <GenreCard key={element.id} info={element} />);

  return <ul className="filterGуnres">{filters}</ul>;
};

interface IGenreCard {
  info: IGenreFilter;
}

export const GenreCard: FC<IGenreCard> = ({ info }) => {
  return (
    <li id={info.id.toString()}>
      <input type="checkbox" value="боевик" />
      {info.name}
    </li>
  );
};
