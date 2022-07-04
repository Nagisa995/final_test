import { secondSearchParametr, thirdSearchParametr } from '../types/enum';
import { IDefaultSearchPage } from '../types/interface';

export const defaultSearchPageFilter: IDefaultSearchPage = {
  genre: [],
  grade: secondSearchParametr.HIGH_GRADE,
  popularity: thirdSearchParametr.POPULAR,
};
