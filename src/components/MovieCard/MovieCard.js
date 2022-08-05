import {useState} from 'react';
import {FaStar, FaUsers} from 'react-icons/fa';

import {imageUrl} from '../../utils/api';
import {calculateText} from '../../utils/helpers';

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
  const {title, poster_path, overview, vote_average, vote_count} = movie;
  const titleToShow = calculateText(title, 20);
  const overviewToShow = calculateText(overview, 300);
  const [showOverview, setShowOverview] = useState(false);

  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };

  const closeOverview = () => {
    setShowOverview(false);
  };

  return (
    <MovieCardContainer>
      <Title title={title}>
        {titleToShow}
      </Title>
      <PosterContainer>
        {poster_path
          ? <Poster src={`${imageUrl}/${poster_path}`} alt="movie poster" />
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
        <ButtonOverview onClick={toggleOverview}>Plot Summary</ButtonOverview>
      </ButtonContainer>
    </MovieCardContainer>
  );
};

export default MovieCard;
