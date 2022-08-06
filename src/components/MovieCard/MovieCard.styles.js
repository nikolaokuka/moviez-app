import styled from 'styled-components';
import {AiOutlineCloseCircle} from 'react-icons/ai';

export const MovieCardContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  padding: 2rem;
`;

export const PosterContainer = styled.div`
  position: relative;
  height: 35rem;
  cursor: pointer;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
  display: block;
`;

export const PosterPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  font-size: 2rem;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  span {
    margin-bottom: .5rem;
  }
`;

export const Overview = styled.div`
  width: 100%;
  padding: 2rem;
  height: 100%;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.5;
  opacity: ${({show}) => (show ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
  transition: all 0.5s ease-in-out;
  animation: ${({show}) => (show ? 'moveIn' : 'moveOut')} 0.5s ease-in-out;

  @keyframes moveIn {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }

  @keyframes moveOut {
    0% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }
`;

export const ButtonCloseOverview = styled(AiOutlineCloseCircle)`
  color: #ffd700;
  background: transparent;
  font-size: 2.5rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #bb2e1f;
  cursor: pointer;
  margin-bottom: 2rem;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0 2rem 0;
`;

export const Average = styled.div`
  display: flex;
  align-items: center;
`;

export const Votes = styled.div`
  display: flex;
  align-items: center;
`;

export const Value = styled.span`
  margin: 0 1rem;
  font-weight: 700;
  font-size: 1.7rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonOverview = styled.button`
  background: none;
  border: 1px solid #000;
  border-radius: 1rem;
  font-size: 1.2rem;
  padding: 1rem;
  cursor: pointer;
  text-transform: uppercase;

  &:active {
    transform: translateY(2px);
  }
`;
