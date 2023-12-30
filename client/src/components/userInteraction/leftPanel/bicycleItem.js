import { useEffect, useState } from 'react';
import classes from './bicycleItem.module.scss';
import { useDispatch } from 'react-redux';
import { fetchBicycles } from '../../slices/BicycleSlice';
import request from '../../../services/request';
export const correctPrice = (price) => {
  if (price % 1) {
    return price;
  } else {
    return price.toFixed(2);
  }
};

export default function BicycleItem({ bicycle }) {
  const [select, setSelect] = useState(null);

  const { id, color, name, price, type, status } = bicycle;

  useEffect(() => {
    setSelect(status);
  }, [status]);

  const dispatch = useDispatch();

  const newPrice = correctPrice(price);

  async function handleDelete(id) {
    await request(`http://localhost:8000/v1/bicycle/${id}`, 'DELETE');

    dispatch(fetchBicycles());
  }

  async function selectHandler(e, id) {
    setSelect(e.target.value);
    await request(
      `http://localhost:8000/v1/bicycle/${id}`,
      'PUT',
      JSON.stringify({ status: e.target.value })
    );

    dispatch(fetchBicycles());
  }

  let borderBox;

  switch (select) {
    case 'Available':
      borderBox = { border: '2px solid #6FCF97' };
      break;
    case 'Busy':
      borderBox = { border: '2px solid #F2994A' };
      break;
    case 'Unavailable':
      borderBox = { border: '2px solid #EB5757' };
      break;
    default:
      borderBox = { border: '2px solid transparent' };
  }

  return (
    <div key={id} className={classes.bicycle_item} style={borderBox}>
      <div className={classes.item_information}>
        <p className={classes.name}>
          <span>{name}</span> - {type} ({color})
        </p>
        <p className={classes.id}>ID: {id}</p>
        <label className={classes.selectWrapper}>
          <span>Status:</span>
          <select
            onChange={(e) => selectHandler(e, id)}
            name="status"
            id="status"
            value={`${select ? select : ''}`}
          >
            <option value=""></option>
            <option value="Available">Available</option>
            <option value="Busy">Busy</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </label>
      </div>
      <div className={classes.item_price}>
        <span>{newPrice}UAH/hr.</span>
      </div>
      <div onClick={() => handleDelete(id)} className={classes.close}>
        &times;
      </div>
    </div>
  );
}
