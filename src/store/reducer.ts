import { combineReducers } from 'redux';
import { currentPage } from './reducers/pagesNavigation';
import { sortFilter } from './reducers/sortFilters';
import { genreFilter } from './reducers/genreFilter';
import { authorizationState } from './reducers/authorizationState';

export const appReducer = combineReducers({ currentPage, sortFilter, genreFilter, authorizationState });

export type StoreState = ReturnType<typeof appReducer>;
