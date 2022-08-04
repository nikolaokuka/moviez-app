import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 40rem;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 30rem;
  height: 5rem;
  font-size: 1.8rem;
  color: #34495e;
  padding: 1.5rem;
  border-radius: 3px;
  border: none;
  outline: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const ButtonSearch = styled.button`
  width: 10rem;
  height: 5rem;
  border: none;
  border-radius: 3px;
  font-size: 1.8rem;
  outline: none;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  margin-left: 2rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.88);
  }

  &:active {
    transform: translateY(2px);
  }
`;
