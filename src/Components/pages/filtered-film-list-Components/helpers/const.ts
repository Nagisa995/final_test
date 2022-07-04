import { ConditionsData, userSelector } from '../types/enum';
import { IConditionsSort, IIconUrl, ISelectFilterInfo, ISortFilterParams } from '../types/interface';

export const ICONFILMCARDURL: IIconUrl = {
  favorite: {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mkCYRz0Q8nG1uNzJGTjSjfupNaX-1164h6gR8hXE5Sp_i06HTqOjm7ZG4dme4o7qKQA&usqp=CAU',
    id: userSelector.FAVORITES,
  },
  watchLater: {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKC_HA16TPtg80sHMVks36WaxO8Lv07Md2thrji2sCQoq_tqp9auEVxwHCLXKyzMIsHg&usqp=CAU',
    id: userSelector.WATCH_LATER,
  },
};

export const USER_SELECTORS: Array<ISelectFilterInfo> = [
  {
    value: userSelector.DISABLE_USER_FILTER,
    displayOnUI: 'Все фильмы',
  },
  {
    value: userSelector.FAVORITES,
    displayOnUI: 'Избранные',
  },
  {
    value: userSelector.WATCH_LATER,
    displayOnUI: 'Смотреть позже',
  },
];

export const SORTFILTERSDATA: ISortFilterParams = {
  conditions: [
    {
      value: ConditionsData.POPULARITY_DOWN,
      displayOnUI: 'Популярные по убыванию',
    },
    {
      value: ConditionsData.POPULARITY_UP,
      displayOnUI: 'Популярные по возрастанию',
    },
    {
      value: ConditionsData.VOTE_AVERAGE_DOWN,
      displayOnUI: 'Рейтинг по убыванию',
    },
    {
      value: ConditionsData.VOTE_AVERAGE_UP,
      displayOnUI: 'Рейтинг по возрастанию',
    },
  ],
  dateRelease: ['2020', '2019', '2018', '2017'],
};

export const DEFAULTSORTFILTERS: IConditionsSort = {
  conditions: ConditionsData.POPULARITY_DOWN,
  dateRelease: '2020',
};
export const FILMSP_PER_PAGE: number = 10;
