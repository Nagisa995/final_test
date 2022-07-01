import { FC, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { IConditionsSort, SORTFILTERSDATA, USER_SELECTORS } from '../../../../../helpers/const';
import { userIsAuthorized } from '../../../../../helpers/utils';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { CONDITIONS_CHANGE, DATE_RELEASE_CHANGE } from '../../../../../store/actions/sortChange';
import { USER_FILTER_CHANGE } from '../../../../../store/actions/userFilterChange';

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

  const conditionsHandler = (e: any) => {
    const value = e.target.value;
    dispatch(CONDITIONS_CHANGE(value));
  };

  const dateReleaseHandler = (e: any) => {
    const value = e.target.value;
    dispatch(DATE_RELEASE_CHANGE(value));
  };

  const userFilterHandler = (e: any) => {
    const value = e.target.value;
    dispatch(USER_FILTER_CHANGE(value));
  };

  return (
    <div className="filterSelect">
      <SelectElement
        selectName="Сортировать по:"
        handler={conditionsHandler}
        options={conditionsFilter}
      />
      <SelectElement
        selectName="Год релиза:"
        handler={dateReleaseHandler}
        options={dateReleaseFilter}
      />
      {isAuthorizedUser && (
        <SelectElement
          selectName="Пользовательский список:"
          handler={userFilterHandler}
          options={userFilter}
        />
      )}
    </div>
  );
};

interface ISelectElement {
  selectName: string;
  handler: (e: any) => void;
  options: ReactNode;
}

const SelectElement: FC<ISelectElement> = ({ selectName, handler, options }) => {
  return (
    <>
      <span>{selectName}</span>
      <select size={1} onChange={handler}>
        {options}
      </select>
    </>
  );
};

const OptionElement: FC<IConditionsSort> = ({ displayOnUI, value }) => {
  return <option value={value}>{displayOnUI}</option>;
};
