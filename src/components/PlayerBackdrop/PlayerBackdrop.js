import {PlayerBackdropContainer, ButtonPlay, Title, Tagline} from './PlayerBackdrop.styles';

const PlayerBackdrop = ({movie, setPlay}) => {
  const handlePlay = () => {
    setPlay(true);
  };

  return (
    <PlayerBackdropContainer path={movie.backdrop_path}>
      <ButtonPlay
        type='button'
        onClick={handlePlay}
      >
        Play Trailer
      </ButtonPlay>
      <Title>{movie.title}</Title>
      <Tagline>{movie.tagline}</Tagline>
    </PlayerBackdropContainer>
  );
};

export default PlayerBackdrop;
