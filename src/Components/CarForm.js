import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeCost, addCars } from '../store';
import { useRef } from 'react';

function CarForm() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const { name, cost } = useSelector(({ form: { name, cost } }) => {
    return { name, cost };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    dispatch(addCars({ name: capName, cost }));
    inputRef.current.focus();
  };

  const handleNameInput = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleCostInput = (e) => {
    const value = parseInt(e.target.value);
    dispatch(changeCost(value));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          className='p-1 m-2 bg-gray-50 border border-gray-500'
          value={name}
          ref={inputRef}
          onChange={handleNameInput}
        />
        <label>Cost: </label>
        <input
          type='number'
          className='p-1 m-2 bg-gray-50 border border-gray-500'
          value={cost || ''}
          onChange={handleCostInput}
        />
        <button className='px-3 py-1.5 bg-blue-600 text-white'>
          Add to list
        </button>
      </form>
    </div>
  );
}
export default CarForm;
