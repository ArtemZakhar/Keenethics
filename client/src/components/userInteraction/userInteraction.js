import BicycleAddForm from './rightPanel/form/bicycleAddForm';
import BicycleList from './leftPanel/bicycleList';
import Statistics from './rightPanel/statistics/statistics';
import classes from './userInteraction.module.scss';

export default function UserInteraction() {


  return (
    <div className={classes.wrapper}>
      <BicycleList /* changeStatus={handleStatus} */ />
      <div className={classes.rightPanel}>
        <BicycleAddForm />
        <Statistics /* status={status} */ />
      </div>
    </div>
  );
}
