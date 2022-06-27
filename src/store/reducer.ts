import { combineReducers } from 'redux';
import { currentPage } from './reducers/pagesNavigation';
import { sortFilter } from './reducers/sortFilters';
import { genreFilter } from './reducers/genreFilter';

export const appReducer = combineReducers({ currentPage, sortFilter, genreFilter });

export type StoreState = ReturnType<typeof appReducer>;
