import { FC } from 'react';
import { Header } from './Header/Header';
import { Filters } from './Filters/Filters';
import { FilmList } from './FilmList/FilmList';
import { AuthorizationWindow } from './AuthorizationWindow/AuthorizationWindow';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ActionAutorization } from '../store/actions/authorizationChange';

export const App: FC = () => {
  const authorizationState = useTypedSelector(state=>state.authorizationState);

  const authorizationInProgress:boolean = authorizationState === ActionAutorization.AUTHORIZATION_IN_PROGRESS;
  return (
    <>
      <Header />
      <div className="mainContent">
        <Filters />
        <FilmList />
        {authorizationInProgress&&<AuthorizationWindow/>}
      </div>
    </>
  );
};
