import styled from 'styled-components';

export const MoviesGridContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28.5rem, 1fr));
  gap: 2rem;

  @media only screen and (max-width: 900px) {
    padding: 0 2rem;
  }
`;
