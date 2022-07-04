import { FC } from 'react';
import { RadioButton } from './radioButton';
import { thirdSearchParametr } from './types/enum';
import { IFilter } from './types/interface';

export const PopularityFilter: FC<IFilter> = ({ searchFilter, pageStateHandler }) => {
  const changeHandler = (e: any) => {
    const selectedPopularity = e.target.id;
    pageStateHandler({ ...searchFilter, popularity: selectedPopularity });
  };
  return (
    <>
      <div className="popularityFilter" onChange={changeHandler}>
        <span>Популярность фильма:</span>
        <RadioButton
          nameRadio="popularity"
          value={thirdSearchParametr.POPULAR}
          nameUI="Популярный"
          selected={searchFilter.popularity === thirdSearchParametr.POPULAR}
        />
        <RadioButton
          nameRadio="popularity"
          value={thirdSearchParametr.UNKNOWN}
          nameUI="Малоизвестный"
          selected={searchFilter.popularity === thirdSearchParametr.UNKNOWN}
        />
      </div>
    </>
  );
};
