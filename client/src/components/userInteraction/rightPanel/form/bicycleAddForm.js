import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBicycles } from '../../../slices/BicycleSlice';
import classes from './bicycleAddForm.module.scss';
import request from '../../../../services/request';

export default function BicycleAddForm() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const nameRef = useRef(null);
  const typeRef = useRef(null);
  const colorRef = useRef(null);
  const wheelRef = useRef(null);
  const priceRef = useRef(null);
  const idRef = useRef(null);
  const descriptionRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
      setMessage('');
      setRefEmpty();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [showMessage]);

  function setRefEmpty() {
    nameRef.current.value = '';
    typeRef.current.value = '';
    colorRef.current.value = '';
    wheelRef.current.value = '';
    priceRef.current.value = '';
    idRef.current.value = '';
    descriptionRef.current.value = '';
  }

  async function submitHandler(e) {
    e.preventDefault();

    const nameInput = nameRef.current.value;
    const typeInput = typeRef.current.value;
    const colorInput = colorRef.current.value;
    const wheelInput = wheelRef.current.value;
    const priceInput = priceRef.current.value;
    const idInput = idRef.current.value;
    const descriptionInput = descriptionRef.current.value;

    const formData = {
      name: nameInput,
      type: typeInput,
      color: colorInput,
      wheel_size: wheelInput,
      price: priceInput,
      id: idInput,
      description: descriptionInput,
    };

    const response = await request(
      'http://localhost:8000/v1/bicycle',
      'POST',
      JSON.stringify(formData)
    );

    setMessage(response.message);
    setShowMessage(true);
    dispatch(fetchBicycles());
  }

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.information}>
          <div className={classes.input}>
            <input ref={nameRef} minLength={5} type="text" required id="name" placeholder="Name" />
          </div>
          <div className={classes.input}>
            <input ref={typeRef} minLength={5} type="text" required id="type" placeholder="Type" />
          </div>
        </div>
        <div className={classes.information}>
          <div className={classes.input}>
            <input
              ref={colorRef}
              minLength={5}
              type="text"
              required
              id="color"
              placeholder="Color"
            />
          </div>
          <div className={classes.input}>
            <input ref={wheelRef} type="number" required id="wheel_size" placeholder="Wheel size" />
          </div>
        </div>
        <div className={classes.information}>
          <div className={classes.input}>
            <input ref={priceRef} type="number" required id="price" placeholder="Price" />
          </div>
          <div className={classes.input}>
            <input
              minLength={5}
              ref={idRef}
              type="number"
              required
              id="idN"
              placeholder="ID (slug): ХХХХХХХХХХХХХ"
            />
          </div>
        </div>

        <div className={`${classes.information} ${classes.description}`}>
          <textarea ref={descriptionRef} id="description" rows="4" placeholder="Description" />
        </div>
        <div className={classes.buttons}>
          <button type="submit">save</button>
          <button onClick={setRefEmpty}>clear</button>
        </div>
      </form>
      <p className={classes.messages}>{message}</p>
    </div>
  );
}
