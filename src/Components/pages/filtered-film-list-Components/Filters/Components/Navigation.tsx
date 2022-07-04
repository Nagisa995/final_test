import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { NEXT_PAGE, PREVIOUS_PAGE } from '../../../../../store/actions/pageChange';
import { FILMS } from '../../../../../mock/film';
import { FILMSP_PER_PAGE } from '../../helpers/const';

export const Navigation: FC = () => {
  const dispacth = useDispatch();
  const currentPage = useTypedSelector((store) => store.currentPage);
  const endPage: number = Math.ceil(FILMS.length / FILMSP_PER_PAGE);

  const isStarterPage: boolean = currentPage === 0;
  const isEndPage: boolean = (currentPage+1) === endPage;
  return (
    <div className="switchBlock">
      {isStarterPage ? (
        <button disabled>Назад</button>
      ) : (
        <button onClick={() => dispacth(PREVIOUS_PAGE())}>Назад</button>
      )}
      {isEndPage? <button disabled>Вперед</button>:<button onClick={() => dispacth(NEXT_PAGE())}>Вперед</button>}
      
      <span>{currentPage + 1} of {endPage}</span>
    </div>
  );
};