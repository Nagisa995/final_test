import { FC } from 'react';
import { FILMS, IFilmData } from '../../mock/film';
import { compilePosterURL, filmsOnCurrentPage, filterFilmByGenre, sortedFilmList } from '../../helpers/utils';
import { ICONFILMCARDURL } from '../../helpers/const';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const FilmList: FC = () => {
  const { currentPage, sortFilter, genreFilter } = useTypedSelector((state) => state);

  const filteredFilmList = filterFilmByGenre(FILMS, genreFilter);
  const resortedFilmList = sortedFilmList(filteredFilmList, sortFilter);
  const filmListOnCurrentPage = filmsOnCurrentPage(resortedFilmList, currentPage);

  const films = filmListOnCurrentPage.map((element) => (
    <FilmCard key={element.id} info={element} />
  ));
  return (
    <div className="filmList">
      <ul className="filmList_content">{films}</ul>
    </div>
  );
};

interface IFilmCard {
  info: IFilmData;
}
export const FilmCard: FC<IFilmCard> = ({ info }) => {
  return (
    <li className="filmList_item" id={info.id.toString()}>
      <img
        className="poster"
        src={compilePosterURL(info.poster_path ?? info.backdrop_path)}
        alt="loading ..."
      />
      <div className="filmList_itemContent">
        <div className="filmInfo">
          <span>Рейтинг:{info.vote_average}</span>
          <img className="icon" src={ICONFILMCARDURL.favorite} alt="" />
          <img className="icon" src={ICONFILMCARDURL.watchLater} alt="" />
        </div>
        <div className="filmName">{info.title}</div>
        <div className="filmDetails">Подробнее</div>
      </div>
    </li>
  );
};
