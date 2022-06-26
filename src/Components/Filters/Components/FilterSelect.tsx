import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IConditionsSort, SORTFILTERSDATA } from '../../../helpers/const';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CONDITIONS_CHANGE, DATE_RELEASE_CHANGE } from '../../../store/actions/sortChange';

export const FilterSelect: FC = () => {
  const currentSortFilter = useTypedSelector((state) => state.sortFilter);
  const dispatch = useDispatch();

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

  const conditionsHandler = (e: any) => {
    const value = e.target.value;
    dispatch(CONDITIONS_CHANGE(value));
  };

  const dateReleaseHandler = (e: any) => {
    const value = e.target.value;
    dispatch(DATE_RELEASE_CHANGE(value));
  };

  return (
    <div className="filterSelect">
      <span>Сортировать по:</span>
      <select size={1} onChange={conditionsHandler}>
        {conditionsFilter}
      </select>
      <span>Год релиза:</span>
      <select size={1} onChange={dateReleaseHandler}>
        {dateReleaseFilter}
      </select>
    </div>
  );
};

const OptionElement: FC<IConditionsSort> = ({ displayOnUI, value }) => {
  return <option value={value}>{displayOnUI}</option>;
};
