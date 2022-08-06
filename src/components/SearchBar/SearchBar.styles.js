import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 30rem;
  height: 5rem;
  font-size: 1.7rem;
  padding: 1.5rem;
  border-radius: 3px;
  border: none;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: ${({theme}) => theme === 'dark' ? '#eee' : '#1c2022'};
  background-color: ${({theme}) => theme === 'dark' ? '#131617' : '#fff'};

  @media only screen and (max-width: 600px) {
    width: 22rem;
  }
`;

export const ButtonSearch = styled.button`
  width: 10rem;
  height: 5rem;
  border: none;
  border-radius: 3px;
  font-size: 1.7rem;
  outline: none;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  margin-left: 2rem;

  &:active {
    transform: translateY(2px);
  }
`;
