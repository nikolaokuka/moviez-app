import {useEffect, useState, useReducer} from 'react';

import Navbar from './components/Navbar/Navbar';
import MoviesGrid from './components/MoviesGrid/MoviesGrid';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Trailer from './components/Trailer/Trailer';

import {getMovies, getMovie} from './utils/api';
import {moviesReducer, moviesInitialState} from './reducers/moviesReducer';

import {GlobalStyle} from './global.style';

const App = () => {
  const [state, dispatch] = useReducer(moviesReducer, moviesInitialState);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    fetchMovies(); // eslint-disable-next-line
  }, []);

  const fetchMovies = async (endpoint = '/movie/popular', searchInput) => {
    dispatch({type: 'fetching'});

    try {
      const movies = await getMovies(endpoint, searchInput);
      dispatch({type: 'success', payload: movies});
      await selectMovie(movies[0]);
    } catch (error) {
      console.warn(error);
      dispatch({type: 'failure', payload: 'Something went wrong!'});
    }
  };

  const selectMovie = async (selected) => {
    const movie = await getMovie(selected.id);
    dispatch({type: 'selectMovie', payload: movie});
    setPlay(false);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  const searchMovies = (searchInput) => {
    fetchMovies('/search/movie', searchInput);
  };

  return (
    <div className='App'>
      <GlobalStyle />

      <Navbar searchMovies={searchMovies} />

      <main>
        {!state.error && !state.loading &&
          <Trailer
            isPlay={play}
            isVideosExist={state.selectedMovie.videos}
            movie={state.selectedMovie}
            setPlay={setPlay}
          />
        }
        {state.error && <Error errorMessage={state.error} />}
        {state.loading && <Loader />}
        <MoviesGrid movies={state.movies} selectMovie={selectMovie} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
