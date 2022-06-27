export const POSTERBASEURL: string = 'https://image.tmdb.org/t/p/w300';

export const FILMSP_PER_PAGE: number = 10;

interface IIconUrl {
  favorite: string;
  watchLater: string;
}

export const ICONFILMCARDURL: IIconUrl = {
  favorite:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mkCYRz0Q8nG1uNzJGTjSjfupNaX-1164h6gR8hXE5Sp_i06HTqOjm7ZG4dme4o7qKQA&usqp=CAU',
  watchLater:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKC_HA16TPtg80sHMVks36WaxO8Lv07Md2thrji2sCQoq_tqp9auEVxwHCLXKyzMIsHg&usqp=CAU',
};

interface ISortFilterParams {
  conditions: Array<IConditionsSort>;
  dateRelease: Array<string>;
}

export interface IConditionsSort {
  [key: string]: string;
}

export enum ConditionsData {
  POPULARITY_DOWN = 'POPULARITY_DOWN',
  POPULARITY_UP = 'POPULARITY_UP',
  VOTE_AVERAGE_DOWN = 'VOTE_AVERAGE_DOWN',
  VOTE_AVERAGE_UP = 'VOTE_AVERAGE_UP',
}

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

export const DEFAULTGENREFILTER: Array<number> = [];
