import { FC, useState } from 'react';
import { compilePosterURL, generateFilmURL, getGenreList } from '../../../helpers/utils';
import { FILMS } from '../../../mock/film';
import { filterFilmList } from './helpers/utils';
import { IFilmList } from './types/interface';
import { Link } from 'react-router-dom';
import { IFilmPage } from '../../../types/interface';

export const SearchResult: FC<IFilmList> = ({ filters }) => {
  const [currentFilmCard, setCurrentFilmCard] = useState(0);
  const filmList = filterFilmList(FILMS, filters);

  const filmListIsEmpty = currentFilmCard >= filmList.length;

  return (
    <div className="searchResult">
      {(filmListIsEmpty && <EndOfSearchResult />) || (
        <>
          <FilmCard info={filmList[currentFilmCard]} />
          <div className="actionBar">
            <button onClick={() => setCurrentFilmCard(currentFilmCard + 1)}>Не подходит</button>
            <button>
              <Link to={`/${generateFilmURL(filmList[currentFilmCard].id)}`}>Подходит</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const FilmCard: FC<IFilmPage> = ({ info }) => {
  const genreList = getGenreList(info.genre_ids);
  return (
    <div className="filmCard">
      <img src={compilePosterURL(info.poster_path ?? info.backdrop_path)} alt="" />
      <div className="info">
        <div className="title">{info.title}</div>
        <div>Жанры: {genreList}</div>
        <div className="overview">Описание: {info.overview}</div>
      </div>
    </div>
  );
};

const EndOfSearchResult: FC = () => {
  return <div>Подходящих результатов не осталось.</div>;
};
