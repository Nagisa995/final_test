import { FC } from 'react';
import { FilterSelect } from './Components/FilterSelect';
import { FilterGenre } from './Components/FilterGenre';
import { Navigation } from './Components/Navigation';
import { useDispatch } from 'react-redux';
import { RESET_CHANGE } from '../../store/actions/sortChange';

export const Filters: FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="functional">
      <h1>Фильтры:</h1>
      <button onClick={() => dispatch(RESET_CHANGE(''))}>Сбросить все фильтры</button>
      <FilterSelect />
      <FilterGenre />
      <Navigation />
    </div>
  );
};
