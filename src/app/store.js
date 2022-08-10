import {configureStore} from '@reduxjs/toolkit';
import navReducer from '../features/navigation/navSlice';

const store = configureStore({
  reducer: {
    navigation: navReducer,
  },
});

export {store};
