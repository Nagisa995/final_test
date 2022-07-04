import { ReactNode } from 'react';
import { IFilmData } from '../../../../types/interface';

export interface ISelectElement {
  selectName: string;
  handler: (e: any) => void;
  options: ReactNode;
}

export interface IIcon {
  src: string;
  id: string;
  name: string;
}

export interface IIconUrl {
  favorite: IURLData;
  watchLater: IURLData;
}

export interface IURLData {
  src: string;
  id: string;
}

export interface ISelectFilterInfo {
  value: string;
  displayOnUI: string;
}

export interface IConditionsSort {
  [key: string]: string;
}

export interface ISortFilterParams {
  conditions: Array<IConditionsSort>;
  dateRelease: Array<string>;
}
