import { FC } from 'react';
import { IConditionsSort, ISelectElement } from '../../types/interface';

export const SelectElement: FC<ISelectElement> = ({ selectName, handler, options }) => {
  return (
    <>
      <span>{selectName}</span>
      <select size={1} onChange={handler}>
        {options}
      </select>
    </>
  );
};

export const OptionElement: FC<IConditionsSort> = ({ displayOnUI, value }) => {
  return <option value={value}>{displayOnUI}</option>;
};
