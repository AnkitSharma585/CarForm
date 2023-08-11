import CarForm from './Components/CarForm';
import CarList from './Components/CarList';
import CarSearch from './Components/CarSearch';
import CarValue from './Components/CarValue';

function App() {
  return (
    <div className='container mx-auto my-4 flex flex-col items-center justify-center border p-8 gap-4 w-fit'>
      <h1 className='font-bold text-3xl text-gray-600'>Cars List</h1>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}
export default App;
