import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  position: fixed;
  top: 0;
  background-color: ${({theme}) => theme === 'dark' ? '#1c2022' : '#fff'};
  z-index: 9999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    height: 20rem;
    padding-bottom: 2rem;
  }
`;
