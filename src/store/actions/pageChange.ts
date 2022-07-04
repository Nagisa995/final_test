interface IActionPage {
  type: string;
}

export enum ActionPage {
  NEXT_PAGE = 'NEXT_PAGE',
  PREVIOUS_PAGE = 'PREVIOUS_PAGE',
}

const createAction = (type: string) => {
  return (): IActionPage => {
    return {
      type,
    };
  };
};

export const NEXT_PAGE = createAction(ActionPage.NEXT_PAGE);

export const PREVIOUS_PAGE = createAction(ActionPage.PREVIOUS_PAGE);
