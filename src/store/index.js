import { configureStore } from '@reduxjs/toolkit';
import {
  carsReducer,
  addCars,
  removeCars,
  changeSearchTerm,
} from './slices/carsSlice';
import { formReducer, changeCost, changeName } from './slices/formSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, addCars, removeCars, changeSearchTerm, changeCost, changeName };
