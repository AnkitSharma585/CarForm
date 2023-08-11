import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(({ cars: { searchTerm } }) => searchTerm);

  const handleSearchChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className='mt-4'>
      <label>Search for cars: </label>
      <input
        className='p-1 m-2 bg-gray-50 border border-gray-500 rounded'
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}
export default CarSearch;
