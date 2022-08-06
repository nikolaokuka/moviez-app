import {useSelector} from 'react-redux';

import Player from '../Player/Player';
import PlayerBackdrop from '../PlayerBackdrop/PlayerBackdrop';

const Trailer = () => {
  const {selectedMovie, playing} = useSelector((state) => state.moviesSlice);

  return (
    <div>
      {playing && selectedMovie.videos
        ? <Player />
        : <PlayerBackdrop />
      }
    </div>
  );
};

export default Trailer;
