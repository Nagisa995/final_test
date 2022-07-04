import { Dispatch } from 'react';
import { secondSearchParametr, thirdSearchParametr } from './enum';

export interface IFilter {
  pageStateHandler: Dispatch<React.SetStateAction<IDefaultSearchPage>>;
  searchFilter: IDefaultSearchPage;
}

export interface IFilmList {
  filters: IDefaultSearchPage;
}

export interface IDefaultSearchPage {
  genre: Array<number>;
  grade: secondSearchParametr;
  popularity: thirdSearchParametr;
}

export interface IRadio {
  nameRadio: string;
  value: string;
  nameUI: string;
  selected: boolean;
}
