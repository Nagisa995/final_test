import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ActionAutorization } from '../../store/actions/authorizationChange';
import { Filters } from './filtered-film-list-Components/Filters/Filters';
import { FilmList } from './filtered-film-list-Components/FilmList/FilmList';
import { AuthorizationWindow } from '../AuthorizationWindow/AuthorizationWindow';

export const FilteredFilmList: FC = () => {
  const authorizationState = useTypedSelector((state) => state.authorizationState);

  const authorizationInProgress: boolean =
    authorizationState === ActionAutorization.AUTHORIZATION_IN_PROGRESS;
  return (
    <div className="mainContent">
      <Filters />
      <FilmList />
      {authorizationInProgress && <AuthorizationWindow />}
    </div>
  );
};
