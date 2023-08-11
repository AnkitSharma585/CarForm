import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCars(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCars(state, action) {
      const data = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = data;
    },
  },
});

export const carsReducer = carsSlice.reducer;
export const { changeSearchTerm, addCars, removeCars } = carsSlice.actions;
