import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { CONDITIONS_CHANGE, DATE_RELEASE_CHANGE } from '../../../../../store/actions/sortChange';
import { USER_FILTER_CHANGE } from '../../../../../store/actions/userFilterChange';
import { SORTFILTERSDATA, USER_SELECTORS } from '../../helpers/const';
import { userIsAuthorized } from '../../helpers/utils';
import { OptionElement, SelectElement } from './select';

export const FilterSelect: FC = () => {
  const authorizationState = useTypedSelector((state) => state.authorizationState);
  const dispatch = useDispatch();
  const isAuthorizedUser: boolean = userIsAuthorized(authorizationState);

  const conditionsFilter = SORTFILTERSDATA.conditions.map((element) => (
    <OptionElement
      key={element.displayOnUI}
      displayOnUI={element.displayOnUI}
      value={element.value}
    />
  ));

  const dateReleaseFilter = SORTFILTERSDATA.dateRelease.map((element) => (
    <OptionElement key={element} displayOnUI={element} value={element} />
  ));

  const userFilter = USER_SELECTORS.map((element) => (
    <OptionElement
      key={element.displayOnUI}
      displayOnUI={element.displayOnUI}
      value={element.value}
    />
  ));

  return (
    <div className="filterSelect">
      <SelectElement
        selectName="Сортировать по:"
        handler={(e) => dispatch(CONDITIONS_CHANGE(e.target.value))}
        options={conditionsFilter}
      />
      <SelectElement
        selectName="Год релиза:"
        handler={(e) => dispatch(DATE_RELEASE_CHANGE(e.target.value))}
        options={dateReleaseFilter}
      />
      {isAuthorizedUser && (
        <SelectElement
          selectName="Пользовательский список:"
          handler={(e) => dispatch(USER_FILTER_CHANGE(e.target.value))}
          options={userFilter}
        />
      )}
    </div>
  );
};
