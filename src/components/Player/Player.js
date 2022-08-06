import {useSelector, useDispatch} from 'react-redux';

import {setPlaying} from '../../store/features/movies/moviesSlice';

import {PlayerContainer, ButtonClose, YouTubePlayer} from './Player.styles';

const Player = () => {
  const {selectedMovie} = useSelector((state) => state.moviesSlice);
  const dispatch = useDispatch();

  const trailer = selectedMovie.videos.results.find((video) => video.name === 'Official Trailer');
  const key = trailer ? trailer.key : selectedMovie.videos.results[0].key;

  const stopPlaying = () => {
    dispatch(setPlaying(false));
  };

  return (
    <PlayerContainer>
      <ButtonClose
        type='button'
        onClick={stopPlaying}
      >
        Close
      </ButtonClose>
      <YouTubePlayer
        videoId={key}
        opts={{
          playerVars: {
            autoplay: 1
          }
        }}
      />
    </PlayerContainer>
  );
};

export default Player;
