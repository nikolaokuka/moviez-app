import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import MoviesGrid from './components/MoviesGrid/MoviesGrid';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Trailer from './components/Trailer/Trailer';

import {getMovies} from './store/features/movies/moviesSlice';

import {GlobalStyle} from './global.style';

const App = () => {
  const {error, loading} = useSelector((state) => state.movies);
  const {theme} = useSelector((state) => state.themeSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies({path: '/movie/popular'}));
  }, [dispatch]);

  return (
    <div className={`App ${theme}`}>
      <div className={`wrapp`}>
        <GlobalStyle />

        <Navbar />

        <main>
          {!error && !loading && <Trailer />}
          {error && <Error />}
          {loading && <Loader />}
          <MoviesGrid />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
