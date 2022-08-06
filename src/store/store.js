import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import moviesReducer from './features/movies/moviesSlice';
import themeSlice from './features/theme/themeSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, themeSlice);

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    themeSlice: persistedReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});

export const persistor = persistStore(store);
