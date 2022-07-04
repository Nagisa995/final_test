import { DEFAULTSORTFILTERS } from '../../Components/pages/filtered-film-list-Components/helpers/const';
import { ActionSort } from '../actions/sortChange';

interface ISwitchSortFilters {
  type: ActionSort;
  payload: string;
}

export function sortFilter(state = DEFAULTSORTFILTERS, action: ISwitchSortFilters) {
  switch (action.type) {
    case ActionSort.CONDITIONS_CHANGE:
      return { ...state, conditions: action.payload };
    case ActionSort.DATE_RELEASE_CHANGE:
      return { ...state, dateRelease: action.payload };
    case ActionSort.RESET_CHANGE:
      return DEFAULTSORTFILTERS;
    default:
      return state;
  }
}
