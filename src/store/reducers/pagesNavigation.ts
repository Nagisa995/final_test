import { ActionPage } from '../actions/pageChange';

interface ISwitchPage {
  type: ActionPage;
}

export const currentPage = (state = 0, action: ISwitchPage) => {
  switch (action.type) {
    case ActionPage.NEXT_PAGE:
      return state + 1;
    case ActionPage.PREVIOUS_PAGE:
      return state - 1;
    default:
      return state;
  }
};
