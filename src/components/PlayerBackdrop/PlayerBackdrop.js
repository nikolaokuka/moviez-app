import {useSelector, useDispatch} from 'react-redux';

import {setPlaying} from '../../store/features/movies/moviesSlice';

import {PlayerBackdropContainer, ButtonPlay, Title, Tagline} from './PlayerBackdrop.styles';

const PlayerBackdrop = () => {
  const {selectedMovie} = useSelector((state) => state.moviesSlice);
  const dispatch = useDispatch();

  const startPlaying = () => {
    dispatch(setPlaying(true));
  };

  return (
    <PlayerBackdropContainer path={selectedMovie.backdrop_path}>
      <ButtonPlay
        type='button'
        onClick={startPlaying}
      >
        Play Trailer
      </ButtonPlay>
      <Title>{selectedMovie.title}</Title>
      <Tagline>{selectedMovie.tagline}</Tagline>
    </PlayerBackdropContainer>
  );
};

export default PlayerBackdrop;
