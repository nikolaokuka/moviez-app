import Player from '../Player/Player';
import PlayerBackdrop from '../PlayerBackdrop/PlayerBackdrop';

const Trailer = ({isPlay, isVideosExist, movie, setPlay}) => {
  return (
    <div>
      {isPlay && isVideosExist
        ? <Player movie={movie} setPlay={setPlay} />
        : <PlayerBackdrop movie={movie} setPlay={setPlay} />
      }
    </div>
  );
};

export default Trailer;
