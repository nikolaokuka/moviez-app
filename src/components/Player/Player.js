import {PlayerContainer, ButtonClose, YouTubePlayer} from './Player.styles';

const Player = ({movie, setPlay}) => {
  const trailer = movie.videos.results.find((video) => video.name === 'Official Trailer');
  const key = trailer ? trailer.key : movie.videos.results[0].key;

  const handlePlay = () => {
    setPlay(false);
  };

  return (
    <PlayerContainer>
      <ButtonClose
        type='button'
        onClick={handlePlay}
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
