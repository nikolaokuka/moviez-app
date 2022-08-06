import {useEffect, useState} from 'react';

import Navbar from './components/Navbar/Navbar';

import {GlobalStyle} from './global.style';
import MoviesGrid from './components/MoviesGrid/MoviesGrid';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import PlayerBackdrop from './components/PlayerBackdrop/PlayerBackdrop';
import Player from './components/Player/Player';

import {getMovies, getMovie} from './utils/api';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState({});
  const [play, setPlay] = useState(false);

  useEffect(() => {
    fetchMovies(); // eslint-disable-next-line
  }, []);

  const fetchMovies = async (endpoint = '/movie/popular', searchInput) => {
    try {
      const movies = await getMovies(endpoint, searchInput);
      setMovies(movies);
      setLoading(false);
      setError(null);
      await selectMovie(movies[0]);
    } catch (error) {
      console.log(error.message);
      setError('Something went wrong!');
      setLoading(false);
      setMovies([]);
    }
  };

  const selectMovie = async (selected) => {
    const movie = await getMovie(selected.id);
    setSelected(movie);
    setPlay(false);
  };

  const searchMovies = (searchInput) => {
    fetchMovies('/search/movie', searchInput);
  };

  return (
    <div className='App'>
      <GlobalStyle />

      <Navbar searchMovies={searchMovies} />

      <main>
        {play && selected.videos
          ? <Player movie={selected} setPlay={setPlay} />
          : <PlayerBackdrop movie={selected} setPlay={setPlay} />
        }
        {error && <Error errorMessage={error} />}
        {loading && <Loader />}
        <MoviesGrid movies={movies} selectMovie={selectMovie} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
