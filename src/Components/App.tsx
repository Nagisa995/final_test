import { FC } from 'react';
import { Header } from './layout/header';
import { Route, Routes } from 'react-router-dom';
import { FilteredFilmList } from './pages/filteredFilmList';
import { FilmPage } from './pages/filmCard';
import { FILMS } from '../mock/film';
import { generateFilmURL } from '../helpers/utils';
import { Search } from './pages/search';

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
