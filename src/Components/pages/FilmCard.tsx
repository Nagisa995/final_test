import { FC } from 'react';
import { compilePosterURL, getGenreList } from '../../helpers/utils';
import { IFilmData } from '../../mock/film';

interface IFilmPage {
  info: IFilmData;
}

export const FilmPage: FC<IFilmPage> = ({ info }) => {
  const genreList = getGenreList(info.genre_ids);
  return (
    <div className="pageContent">
      <div className="title">
        <img src={compilePosterURL(info.poster_path)} alt="" />
        <div className="info">
          <h1>{info.title}</h1>
          <div className="details">
            <div>Рейтинг:{info.vote_average}</div>
            <div>{info.overview}</div>
          </div>
        </div>
      </div>
      <ul>
        <li>Дата выхода: {info.release_date}</li>
        <li>Оригинальный язык: {info.original_language}</li>
        <li>Оригинальное название: {info.original_title}</li>
        <li>Жанры: {genreList}</li>
      </ul>
    </div>
  );
};
