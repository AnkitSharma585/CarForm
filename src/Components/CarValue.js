import { useSelector } from 'react-redux';

function CarValue() {
  const totalValue = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, car) => acc + car.cost, 0);
  });
  return (
    <div className='mt-4'>
      <h4 className='text-2xl font-bold text-gray-700'>
        Total value: ₹{totalValue}
      </h4>
    </div>
  );
}
export default CarValue;
