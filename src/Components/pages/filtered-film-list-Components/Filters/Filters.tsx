import { FC } from 'react';
import { FilterSelect } from './Components/filterSelect';
import { FilterGenre } from './Components/filterGenre';
import { Navigation } from './Components/navigation';
import { useDispatch } from 'react-redux';
import { RESET_CHANGE } from '../../../../store/actions/sortChange';
import { RESET_GENRE_FILTER } from '../../../../store/actions/genreChange';
import { RESET_USER_FILTER_CHANGE } from '../../../../store/actions/userFilterChange';
import { DEFAULTGENREFILTER } from '../../../../helpers/const';

export const Filters: FC = () => {
  const dispatch = useDispatch();

  const resetFilters = () => {
    dispatch(RESET_CHANGE(''));
    dispatch(RESET_GENRE_FILTER(DEFAULTGENREFILTER));
    dispatch(RESET_USER_FILTER_CHANGE(''));
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
