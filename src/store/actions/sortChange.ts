interface IActionSort {
  type: string;
  payload: string;
}

export enum ActionSort {
  CONDITIONS_CHANGE = 'CONDITIONS_CHANGE',
  DATE_RELEASE_CHANGE = 'DATE_RELEASE_CHANGE',
  RESET_CHANGE = 'RESET_CHANGE',
}

const createAction = (type: string) => {
  return (payload:string): IActionSort => {
    return {
      type,
      payload
    };
  };
};

export const CONDITIONS_CHANGE = createAction(ActionSort.CONDITIONS_CHANGE);

export const DATE_RELEASE_CHANGE = createAction(ActionSort.DATE_RELEASE_CHANGE);

export const RESET_CHANGE = createAction(ActionSort.RESET_CHANGE);