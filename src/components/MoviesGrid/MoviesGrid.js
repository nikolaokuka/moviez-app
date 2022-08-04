import {MoviesGridContainer} from './MoviesGrid.styles';

const MoviesGrid = ({movies}) => {
  return (
    <MoviesGridContainer>
      <pre>{JSON.stringify(movies, null, 2)}</pre>
    </MoviesGridContainer>
  );
};

export default MoviesGrid;
