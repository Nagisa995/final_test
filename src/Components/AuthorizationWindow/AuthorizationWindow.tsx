import { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userVerification } from '../../helpers/utils';
import { AUTHORIZATION_PASS } from '../../store/actions/authorizationChange';

export const AuthorizationWindow: FC = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();

  const verification = (e: FormEvent) => {
    e.preventDefault();
    const verificationSuccess = userVerification(userName, userPassword);
    if (verificationSuccess) {
      dispatch(AUTHORIZATION_PASS());
    } else {
      alert('Неверно указаны логин или пароль, попробуйте еще раз!');
      setUserName('');
      setUserPassword('');
    }
  };

  return (
    <div className="authorization">
      <form className="formWindow" onSubmit={verification}>
        <span>Имя пользователя:</span>
        <input
          type="text"
          placeholder="Введите имя пользователя"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <span>Пароль:</span>
        <input
          type="password"
          placeholder="Введите пароль"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
        />
        <button type="submit">Авторизоваться</button>
      </form>
    </div>
  );
};
