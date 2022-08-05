import {useEffect, useState} from 'react';

import Navbar from './components/Navbar/Navbar';

import {GlobalStyle} from './global.style';
import MoviesGrid from './components/MoviesGrid/MoviesGrid';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';

import {getMovies} from './utils/api';

const App = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies('/movie/popular')
      .then((movies) => {
        setMovies(movies);
        setLoading(false);
      })
      .catch((error) => {
        console.warn(error.message);
        setError('Something went wrong!');
        setLoading(false);
      });
  }, []);

  const searchMovies = (searchInput) => {
    getMovies('/search/movie', searchInput)
      .then((movies) => {
        setMovies(movies);
        setLoading(false);
      })
      .catch((error) => {
        console.warn(error.message);
        setError('Something went wrong!');
        setLoading(false);
      });
  };

  return (
    <div className='App'>
      <GlobalStyle />

      <Navbar searchMovies={searchMovies} />

      <main>
        {error && <Error errorMessage={error} />}
        {loading && <Loader />}
        {movies && <MoviesGrid movies={movies} />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
