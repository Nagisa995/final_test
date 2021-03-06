import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { GENREFILTERS } from '../../../../../helpers/genreFilter';
import { GENRE_FILTER_CHANGE } from '../../../../../store/actions/genreChange';
import { IGenreCard } from '../../../../../types/interface';

export const FilterGenre: FC = () => {
  const dispatch = useDispatch();
  const filters = GENREFILTERS.map((element) => <GenreCard key={element.id} info={element} />);

  const changeHandler = (e: any) => {
    const value: number = Number(e.target.value);
    dispatch(GENRE_FILTER_CHANGE(value));
  };

  return (
    <ul className="filterGуnres" onChange={changeHandler}>
      {filters}
    </ul>
  );
};

export const GenreCard: FC<IGenreCard> = ({ info }) => {
  return (
    <li>
      <input type="checkbox" value={info.id} />
      {info.name}
    </li>
  );
};
