import { FC } from 'react';
import { FILMS } from '../../../../mock/film';
import { compilePosterURL, filterFilmByGenre, generateFilmURL } from '../../../../helpers/utils';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { AUTORIZATION_IN_PROGRESS } from '../../../../store/actions/authorizationChange';
import { Link } from 'react-router-dom';
import { IIcon } from '../types/interface';
import {
  addInUserFilmList,
  filmsOnCurrentPage,
  filterFilmByUserFilter,
  sortedFilmList,
  userIsAuthorized,
} from '../helpers/utils';
import { ICONFILMCARDURL } from '../helpers/const';
import { IFilmPage } from '../../../../types/interface';

export const FilmList: FC = () => {
  const { currentPage, sortFilter, genreFilter, authorizationState, userSortFilter } =
    useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const isAuthorizedUser = userIsAuthorized(authorizationState);

  const userFunctional = (e: any) => {
    const targetID: string = e.target.id;
    const isNotIconClick: boolean = !(
      targetID === ICONFILMCARDURL.favorite.id || targetID === ICONFILMCARDURL.watchLater.id
    );

    if (isNotIconClick) {
      return;
    }

    if (!isAuthorizedUser) {
      dispatch(AUTORIZATION_IN_PROGRESS());
      return;
    }

    addInUserFilmList(e, targetID);
  };

  const userFilterFilmList = filterFilmByUserFilter(FILMS, userSortFilter);
  const filteredFilmList = filterFilmByGenre(userFilterFilmList, genreFilter);
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

export const FilmCard: FC<IFilmPage> = ({ info }) => {
  return (
    <li className="filmList_item">
      <img
        className="poster"
        src={compilePosterURL(info.poster_path ?? info.backdrop_path)}
        alt="loading ..."
      />
      <div className="filmList_itemContent">
        <div className="filmInfo" id={info.id.toString()}>
          <span>Рейтинг:{info.vote_average}</span>
          <IconIMG
            src={ICONFILMCARDURL.favorite.src}
            id={ICONFILMCARDURL.favorite.id}
            name={info.id.toString()}
          />
          <IconIMG
            src={ICONFILMCARDURL.watchLater.src}
            id={ICONFILMCARDURL.watchLater.id}
            name={info.id.toString()}
          />
        </div>
        <div className="filmName">{info.title}</div>
        <Link to={generateFilmURL(info.id)} className="filmDetails">
          Подробнее
        </Link>
      </div>
    </li>
  );
};

const IconIMG: FC<IIcon> = ({ src, id, name }) => {
  return <img className="icon" src={src} alt={name} id={id} />;
};
