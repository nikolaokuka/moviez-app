import {PlayerBackdropContainer, ButtonPlay, Title} from './PlayerBackdrop.styles';

const PlayerBackdrop = ({movie}) => {
  return (
    <PlayerBackdropContainer path={movie.backdrop_path}>
      <ButtonPlay>Play</ButtonPlay>
      <Title>{movie.title}</Title>
    </PlayerBackdropContainer>
  );
};

export default PlayerBackdrop;
