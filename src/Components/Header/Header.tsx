import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="header">
      <span className="title">Home</span>
      <button className="authorization">Login</button>
    </header>
  );
};