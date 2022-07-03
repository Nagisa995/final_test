import { Dispatch } from 'react';
import { IDefaultSearchPage } from '../../../../helpers/const';
import { IFilmData } from '../../../../mock/film';

export interface IFilter {
  pageStateHandler: Dispatch<React.SetStateAction<IDefaultSearchPage>>;
  searchFilter: IDefaultSearchPage;
}

export interface IFilmList {
  filters: IDefaultSearchPage;
}
