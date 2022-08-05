import MovieCard from '../MovieCard/MovieCard';
import {MoviesGridContainer} from './MoviesGrid.styles';

const MoviesGrid = ({movies, selectMovie}) => {
  return (
    <MoviesGridContainer>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          selectMovie={selectMovie}
        />
      ))}
    </MoviesGridContainer>
  );
};

export default MoviesGrid;
