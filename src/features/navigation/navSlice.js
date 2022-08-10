import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

const navSlice = createSlice({
  name: 'navigation',
  initialState: initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

const selectOrigin = state => state.navigation.origin;
const selectDestination = state => state.navigation.destination;
const selectTravelTimeInformation = state =>
  state.navigation.travelTimeInformation;

export const {setOrigin, setDestination, setTravelTimeInformation} =
  navSlice.actions;
export {navSlice, selectOrigin, selectDestination, selectTravelTimeInformation};
export default navSlice.reducer;
