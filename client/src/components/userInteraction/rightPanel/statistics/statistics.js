import { useSelector } from 'react-redux';
import { selectAll } from '../../../slices/BicycleSlice';

import classes from './statistics.module.scss';
import { correctPrice } from '../../leftPanel/bicycleItem';

export default function Statistics({ status }) {
  const bicycles = useSelector(selectAll);

  let avarageCost;
  try {
    avarageCost = bicycles.map((item) => item.price).reduce((sum, curr) => sum + curr);
  } catch (e) {}
  return (
    <div className={classes.wrapper}>
      <h3>Statistics</h3>
      <p>
        Total Bikes: <span>{bicycles.length}</span>
      </p>
      <p>
        Available Bikes:{' '}
        <span>{bicycles.filter((item) => item.status === 'Available').length}</span>
      </p>
      <p>
        Booked Bikes: <span>{bicycles.filter((item) => item.status === 'Busy').length}</span>
      </p>
      <p>
        Average bike cost: <span>{avarageCost ? correctPrice(avarageCost) : 'Caclulating...'}</span>{' '}
        UAH/hr.
      </p>
    </div>
  );
}
