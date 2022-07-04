import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  AUTORIZATION_IN_PROGRESS,
  ActionAutorization,
  NOT_AUTHORIZED,
} from '../../store/actions/authorizationChange';
import { AuthorizationWindow } from '../AuthorizationWindow/authorizationWindow';
import { IButton } from './interface';

export const Header: FC = () => {
  const authorizationState = useTypedSelector((state) => state.authorizationState);
  const dispatch = useDispatch();

  const authorizationInProgress: boolean =
    authorizationState === ActionAutorization.AUTHORIZATION_IN_PROGRESS;

  const userNotAuthorized: boolean = authorizationState === ActionAutorization.NOT_AUTHORIZED;
  return (
    <>
      <header className="header">
        <Link to="/">
          <span>Home</span>
        </Link>

        <Link to="/search">
          <span className="search">Search</span>
        </Link>

        {(userNotAuthorized && (
          <Button text="Вход" handler={() => dispatch(AUTORIZATION_IN_PROGRESS())} />
        )) || <Button text="Выход" handler={() => dispatch(NOT_AUTHORIZED())} />}

        {authorizationInProgress && <AuthorizationWindow />}
      </header>
      <Outlet />
    </>
  );
};

const Button: FC<IButton> = ({ text, handler }) => {
  return (
    <button className="authorizationButton" onClick={handler}>
      {text}
    </button>
  );
};
