import MovieCard from '../MovieCard/MovieCard';
import {MoviesGridContainer} from './MoviesGrid.styles';

const MoviesGrid = ({movies}) => {
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
