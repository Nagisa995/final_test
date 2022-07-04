import { FC } from 'react';
import { RadioButton } from './radioButton';
import { secondSearchParametr } from './types/enum';
import { IFilter } from './types/interface';

export const GradeFilter: FC<IFilter> = ({ searchFilter, pageStateHandler }) => {
  const changeHandler = (e: any) => {
    const selectedGrade = e.target.id;
    pageStateHandler({ ...searchFilter, grade: selectedGrade });
  };
  return (
    <>
      <div className="gradeFilter" onChange={changeHandler}>
        <span>C какой оценкой подбираем фильмы:</span>
        <RadioButton
          nameRadio="grade"
          value={secondSearchParametr.HIGH_GRADE}
          nameUI="Высокая оценка"
          selected={searchFilter.grade === secondSearchParametr.HIGH_GRADE}
        />
        <RadioButton
          nameRadio="grade"
          value={secondSearchParametr.LOW_GRADE}
          nameUI="Низкая оценка"
          selected={searchFilter.grade === secondSearchParametr.LOW_GRADE}
        />
      </div>
    </>
  );
};
