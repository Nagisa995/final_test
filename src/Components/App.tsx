import { FC } from 'react';
import { Header } from './layout/Header';
import { Route, Routes } from 'react-router-dom';
import { FilteredFilmList } from './pages/FilteredFilmList';
import { FilmPage } from './pages/FilmCard';
import { FILMS } from '../mock/film';
import { generateFilmURL } from '../helpers/utils';
import { Search } from './pages/Search';

export const App: FC = () => {
  const infoPage = FILMS.map((element) => (
    <Route
      path={generateFilmURL(element.id)}
      element={<FilmPage info={element} />}
      key={element.id}
    />
  ));
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<FilteredFilmList />} />
          {infoPage}
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
};
