import { combineReducers } from "redux";
import { currentPage } from "./reducers/pagesNavigation";
import { sortFilter } from "./reducers/sortFilters";

export const appReducer = combineReducers({currentPage, sortFilter});

export type StoreState = ReturnType<typeof appReducer>