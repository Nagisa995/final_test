import { FC } from 'react';
import { FILMS, IFilmData } from '../../mock/film';
import {
  compilePosterURL,
  filmsOnCurrentPage,
  filterFilmByGenre,
  sortedFilmList,
  userIsAuthorized,
} from '../../helpers/utils';
import { ICONFILMCARDURL } from '../../helpers/const';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { AUTORIZATION_IN_PROGRESS } from '../../store/actions/authorizationChange';

export const FilmList: FC = () => {
  const { currentPage, sortFilter, genreFilter, authorizationState } = useTypedSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const isAuthorizedUser = userIsAuthorized(authorizationState);

  const userFunctional = (e: any) => {
    const isNotIconClick: boolean = !(
      e.target.id === ICONFILMCARDURL.favorite.id || e.target.id === ICONFILMCARDURL.watchLater.id
    );

    if (isNotIconClick) {
      return;
    }

    isAuthorizedUser
      ? (e: any) => {
          console.log(e);
        }
      : dispatch(AUTORIZATION_IN_PROGRESS());
  };

  const filteredFilmList = filterFilmByGenre(FILMS, genreFilter);
  const resortedFilmList = sortedFilmList(filteredFilmList, sortFilter);
  const filmListOnCurrentPage = filmsOnCurrentPage(resortedFilmList, currentPage);

  const films = filmListOnCurrentPage.map((element) => (
    <FilmCard key={element.id} info={element} />
  ));
  return (
    <div className="filmList">
      <ul className="filmList_content" onClick={userFunctional}>
        {films}
      </ul>
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
          <IconIMG src={ICONFILMCARDURL.favorite.src} id={ICONFILMCARDURL.favorite.id} />
          <IconIMG src={ICONFILMCARDURL.watchLater.src} id={ICONFILMCARDURL.watchLater.id} />
        </div>
        <div className="filmName">{info.title}</div>
        <div className="filmDetails">Подробнее</div>
      </div>
    </li>
  );
};

interface IIcon {
  src: string;
  id: string;
}

const IconIMG: FC<IIcon> = ({ src, id }) => {
  return <img className="icon" src={src} alt="" id={id} />;
};
