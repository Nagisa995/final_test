import { FC } from 'react';
import { Header } from './Header/Header';
import { Filters } from './Filters/Filters';
import { FilmList } from './FilmList/FilmList';

export const App: FC = () => {
  return (
    <>
      <Header />
      <div className="mainContent">
        <Filters />
        <FilmList />
      </div>
    </>
  );
};
