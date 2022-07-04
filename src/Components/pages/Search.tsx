import { FC, useState } from 'react';
import { compareData } from '../../helpers/utils';
import { GenreFilter } from './search-Components/genreFilter';
import { GradeFilter } from './search-Components/gradeFilter';
import { defaultSearchPageFilter } from './search-Components/helpers/const';
import { PopularityFilter } from './search-Components/popularityFilter';
import { SearchResult } from './search-Components/searchResult';
import { searchStatus } from './search-Components/types/enum';

export const Search: FC = () => {
  const [filtersForSearch, setFiltersForSearch] = useState(defaultSearchPageFilter);
  const [filterState, setfilterState] = useState(searchStatus.FILTER_NOT_COMPLETE);

  const searchStartHandler = () => {
    const genreListIsNotEmpty = !compareData(filtersForSearch.genre, defaultSearchPageFilter.genre);
    if (genreListIsNotEmpty) {
      setfilterState(searchStatus.FILTER_COMPLETE);
    }
  };

  const filterIsValid = filterState === searchStatus.FILTER_COMPLETE;

  return (
    <div className="searchPage">
      {!filterIsValid && (
        <div className="searchContent">
          <GenreFilter pageStateHandler={setFiltersForSearch} searchFilter={filtersForSearch} />
          <GradeFilter pageStateHandler={setFiltersForSearch} searchFilter={filtersForSearch} />
          <PopularityFilter
            pageStateHandler={setFiltersForSearch}
            searchFilter={filtersForSearch}
          />
          <div className="buttonBar">
            <button onClick={searchStartHandler}>Search</button>
          </div>
        </div>
      )}
      {filterIsValid && <SearchResult filters={filtersForSearch} />}
    </div>
  );
};
