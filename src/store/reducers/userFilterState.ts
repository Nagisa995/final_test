import { userSelector } from '../../Components/pages/filtered-film-list-Components/types/enum';
import { UserSort } from '../actions/userFilterChange';

interface ISwitchUserSortFilters {
  type: UserSort;
  payload: string;
}

export function userSortFilter(
  state = userSelector.DISABLE_USER_FILTER,
  action: ISwitchUserSortFilters
) {
  switch (action.type) {
    case UserSort.USER_FILTER_CHANGE:
      return action.payload;
    case UserSort.RESET_USER_FILTER_CHANGE:
      return userSelector.DISABLE_USER_FILTER;
    default:
      return state;
  }
}
