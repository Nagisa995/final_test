import { FC } from 'react';

interface IRadio {
  nameRadio: string;
  value: string;
  nameUI: string;
  selected: boolean;
}

export const RadioButton: FC<IRadio> = ({ nameRadio, value, nameUI, selected }) => {
  return (
    <div>
      <input type="radio" name={nameRadio} value={value} id={value} defaultChecked={selected} />
      <label htmlFor={value}>{nameUI}</label>
    </div>
  );
};
