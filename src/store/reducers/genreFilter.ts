import { DEFAULTGENREFILTER } from '../../helpers/const';
import { ActionGenre } from '../actions/genreChange';

interface ISwitchGenreFilters {
  type: ActionGenre;
  payload: number;
}

export function genreFilter(state = DEFAULTGENREFILTER, action: ISwitchGenreFilters) {
  switch (action.type) {
    case ActionGenre.GENRE_FILTER_CHANGE:
      if (state.includes(action.payload)) {
        return state.filter((id) => id !== action.payload);
      } else {
        return [...state, action.payload];
      }
    case ActionGenre.RESET_GENRE_FILTER:
      return action.payload;
    default:
      return state;
  }
}
