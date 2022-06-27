interface IActionGenre {
  type: string;
  payload: number | Array<number>;
}

export enum ActionGenre {
  GENRE_FILTER_CHANGE = 'GENRE_FILTER_CHANGE',
  RESET_GENRE_FILTER = 'RESET_GENRE_FILTER',
}

const createAction = (type: string) => {
  return (payload: number | Array<number>): IActionGenre => {
    return {
      type,
      payload,
    };
  };
};

export const GENRE_FILTER_CHANGE = createAction(ActionGenre.GENRE_FILTER_CHANGE);

export const RESET_GENRE_FILTER = createAction(ActionGenre.RESET_GENRE_FILTER);
