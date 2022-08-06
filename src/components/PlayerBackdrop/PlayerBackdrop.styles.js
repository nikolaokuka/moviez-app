import styled from 'styled-components';

import {imageUrl} from '../../utils/api';

export const PlayerBackdropContainer = styled.div`
  background-image: ${({path}) => `url(${imageUrl}/w1280/${path})`};
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem;
  margin-bottom: 2rem;
  border-radius: 3px;

  @media only screen and (max-width: 900px) {
    height: 30rem;
    align-items: center;
  }
`;

export const ButtonPlay = styled.button`
  width: 15rem;
  height: 4rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
  }
`;

export const Title = styled.h1`
  margin: 3rem 0;
  font-size: 4rem;
  color: #fff;
  text-shadow: 0 0 2px #000;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Tagline = styled.p`
  font-size: 2rem;
  color: #fff;
  text-shadow: 0 0 2px #000;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
