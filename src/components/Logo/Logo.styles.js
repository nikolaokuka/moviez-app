import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.h1`
  font-family: 'Bigelow Rules', cursive;
  font-size: 8rem;
  background-image: linear-gradient(to right, #e36659, #aa2a1c);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  cursor: pointer;

  &:hover {
    transform: skewY(-2deg) skewX(-15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(227, 102, 89, 0.2);
  }
`;
