import { FC } from 'react';
import { FilterSelect } from './Components/FilterSelect';
import { FilterGenre } from './Components/FilterGenre';
import { Navigation } from './Components/Navigation';
import { useDispatch } from 'react-redux';
import { RESET_CHANGE } from '../../store/actions/sortChange';
import { RESET_GENRE_FILTER } from '../../store/actions/genreChange';
import { DEFAULTGENREFILTER } from '../../helpers/const';

export const Filters: FC = () => {
  const dispatch = useDispatch();

  const resetFilters = () => {
    dispatch(RESET_CHANGE(''));
    dispatch(RESET_GENRE_FILTER(DEFAULTGENREFILTER))
  };
  return (
    <div className="functional">
      <h1>Фильтры:</h1>
      <button onClick={resetFilters}>Сбросить все фильтры</button>
      <FilterSelect />
      <FilterGenre />
      <Navigation />
    </div>
  );
};
