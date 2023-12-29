import { Fragment, useEffect } from 'react';
import { fetchBicycles, selectAll } from '../../slices/BicycleSlice';
import { useDispatch, useSelector } from 'react-redux';

import classes from '../userInteraction.module.scss';
import BicycleItem from './bicycleItem';

export default function BicycleList() {
  const bicycles = useSelector(selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBicycles());
    //eslint-disable-next-line
  }, []);
  function viewCards(arr) {
    const listOfCards = arr.map((bicycle, i) => {
      return (
        <Fragment key={i}>
          <BicycleItem bicycle={bicycle} />
        </Fragment>
      );
    });
    return listOfCards;
  }

  const elements = viewCards(bicycles);
  return <div className={classes.leftPanel}>{elements}</div>;
}
