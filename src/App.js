import {useEffect, useState} from 'react';

import Navbar from './components/Navbar/Navbar';

import {GlobalStyle} from './global.style';
import MoviesGrid from './components/MoviesGrid/MoviesGrid';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import PlayerBackdrop from './components/PlayerBackdrop/PlayerBackdrop';

import {getMovies} from './utils/api';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    getMovies('/movie/popular')
      .then((movies) => {
        setMovies(movies);
        setLoading(false);
        setError(null);
        setSelected(movies[0]);
      })
      .catch((error) => {
        console.warn(error.message);
        setError('Something went wrong!');
        setLoading(false);
        setMovies(null);
      });
  }, []);

  const searchMovies = (searchInput) => {
    getMovies('/search/movie', searchInput)
      .then((movies) => {
        setMovies(movies);
        setLoading(false);
        setError(null);
        setSelected(movies[0]);
      })
      .catch((error) => {
        console.warn(error.message);
        setError('Something went wrong!');
        setLoading(false);
        setMovies(null);
      });

    setSelected(movies[0]);
  };

  const selectMovie = (movie) => {
    console.log(movie);
    setSelected(movie);
  };

  return (
    <div className='App'>
      <GlobalStyle />

      <Navbar searchMovies={searchMovies} />

      <main>
        <PlayerBackdrop movie={selected} />
        {error && <Error errorMessage={error} />}
        {loading && <Loader />}
        <MoviesGrid movies={movies} selectMovie={selectMovie} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
