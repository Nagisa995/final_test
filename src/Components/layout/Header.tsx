import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  AUTORIZATION_IN_PROGRESS,
  ActionAutorization,
  NOT_AUTHORIZED,
} from '../../store/actions/authorizationChange';

export const Header: FC = () => {
  const authorizationState = useTypedSelector((state) => state.authorizationState);
  const dispatch = useDispatch();

  const userNotAuthorized: boolean = authorizationState === ActionAutorization.NOT_AUTHORIZED;
  return (
    <>
      <header className="header">
        <Link to="/">
          <span className="title">Home</span>
        </Link>

        {(userNotAuthorized && (
          <Button text="Вход" handler={() => dispatch(AUTORIZATION_IN_PROGRESS())} />
        )) || <Button text="Выход" handler={() => dispatch(NOT_AUTHORIZED())} />}
      </header>
      <Outlet />
    </>
  );
};

interface IButton {
  text: string;
  handler: () => void;
}

const Button: FC<IButton> = ({ text, handler }) => {
  return (
    <button className="authorization" onClick={handler}>
      {text}
    </button>
  );
};