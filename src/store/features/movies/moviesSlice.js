import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {apiKey, apiUrl} from '../../../utils/api';

export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async (options, thunkAPI) => {
    const {path, query} = options;
    try {
      const {data: {results}} = await axios.get(`${apiUrl}${path}`, {
        params: {
          api_key: apiKey,
          query: query
        }
      });
      thunkAPI.dispatch(getMovie(results[0].id));
      return results;
    } catch (error) {
      console.warn(error.message);
      throw new Error(error);
    }
  }
);

export const getMovie = createAsyncThunk(
  'movie/getMovie',
  async (movieId) => {
    const {data} = await axios.get(`${apiUrl}/movie/${movieId}`, {
      params: {
        api_key: apiKey,
        append_to_response: 'videos'
      }
    });
    return data;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    error: '',
    loading: false,
    selectedMovie: {},
    playing: false
  },
  reducers: {
    setPlaying: (state, action) => {
      state.playing = action.payload;
    }
  },
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.loading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.error = '';
      state.loading = false;
      state.selectedMovie = state.movies[0];
    },
    [getMovies.rejected]: (state) => {
      state.error = 'Something went wrong!';
      state.loading = false;
      state.movies = [];
    },
    [getMovie.fulfilled]: (state, action) => {
      state.selectedMovie = action.payload;
    }
  },
});

export const {setPlaying} = moviesSlice.actions;

export default moviesSlice.reducer;
