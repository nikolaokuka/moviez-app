import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FaStar, FaUsers} from 'react-icons/fa';

import {imageUrl} from '../../utils/api';
import {calculateText} from '../../utils/helpers';
import {getMovie, setPlaying} from '../../store/features/movies/moviesSlice';

import {
  MovieCardContainer,
  Title,
  Poster,
  Rating,
  Average,
  Votes,
  Value,
  Overview,
  PosterContainer,
  PosterPlaceholder,
  ButtonContainer,
  ButtonOverview,
  ButtonCloseOverview,
} from './MovieCard.styles';

const MovieCard = ({movie}) => {
  const {id, title, poster_path, overview, vote_average, vote_count} = movie;
  const titleToShow = calculateText(title, 20);
  const overviewToShow = calculateText(overview, 300);
  const [showOverview, setShowOverview] = useState(false);
  const dispatch = useDispatch();
  const {theme} = useSelector((state) => state.themeSlice);

  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };

  const closeOverview = () => {
    setShowOverview(false);
  };

  const selectMovie = (id) => {
    dispatch(getMovie(id));
    dispatch(setPlaying(false));
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  return (
    <MovieCardContainer theme={theme}>
      <Title title={title} onClick={() => selectMovie(id)}>
        {titleToShow}
      </Title>
      <PosterContainer onClick={() => selectMovie(id)}>
        {poster_path
          ? <Poster src={`${imageUrl}/w500/${poster_path}`} alt="movie poster" />
          : <PosterPlaceholder>
            <span>poster</span>
            <span>not</span>
            <span>found</span>
          </PosterPlaceholder>
        }
        <Overview show={showOverview}>
          {overviewToShow}
          <ButtonCloseOverview onClick={closeOverview} />
        </Overview>
      </PosterContainer>
      <Rating>
        <Average>
          <FaStar
            color="#ffd700"
            size={20}
          />
          <Value>{vote_average}</Value>
        </Average>
        <Votes>
          <Value>{vote_count}</Value>
          <FaUsers
            color="#ffbf74"
            size={20}
          />
        </Votes>
      </Rating>

      <ButtonContainer>
        <ButtonOverview
          onClick={toggleOverview}
          theme={theme}
        >
          Plot Summary
        </ButtonOverview>
      </ButtonContainer>
    </MovieCardContainer>
  );
};

export default MovieCard;
