import {useSelector} from 'react-redux';

import MovieCard from '../MovieCard/MovieCard';

import {MoviesGridContainer} from './MoviesGrid.styles';

const MoviesGrid = () => {
  const {movies} = useSelector((state) => state.movies);

  return (
    <MoviesGridContainer>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </MoviesGridContainer>
  );
};

export default MoviesGrid;
