import {configureStore} from '@reduxjs/toolkit';

import moviesReducer from './features/movies/moviesSlice';
import themeSlice from './features/theme/themeSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    themeSlice
  }
});

export default store;
