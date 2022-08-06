import styled from 'styled-components';
import YouTube from 'react-youtube';

export const PlayerContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

export const YouTubePlayer = styled(YouTube)`
  iframe {
    width: 100%;
    height: 50rem;
    border-radius: 3px;
  }
`;

export const ButtonClose = styled.button`
  width: 10rem;
  height: 4rem;
  border: 2px solid #fff;
  border-radius: 3px;
  background: transparent;
  outline: none;
  position: absolute;
  top: 8rem;
  right: 2rem;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
`;
