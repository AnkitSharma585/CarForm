import { useSelector, useDispatch } from 'react-redux';
import { removeCars } from '../store';

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleClick = (car) => {
    dispatch(removeCars(car));
  };

  const renderCars = cars.map((car) => {
    return (
      <div className='flex items-center justify-end m-4 gap-4'>
        <span className='font-bold text-xl'>{car.name}</span> - ₹{car.cost}
        <button
          onClick={() => handleClick(car.id)}
          className='px-2 py-1 bg-red-600 text-white rounded-full'
        >
          Delete
        </button>
      </div>
    );
  });
  return <div>{renderCars}</div>;
}
export default CarList;
