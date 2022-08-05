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
`;

export const ButtonPlay = styled.button`
  width: 15rem;
  height: 5rem;
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 1rem;
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
  margin: 2rem 0;
  font-size: 3.5rem;
  color: #fff;
  text-shadow: 0 0 2px #000;
`;
