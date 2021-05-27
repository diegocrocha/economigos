import styled from 'styled-components';

export const ButtonMain = styled.button`
  background-color: #44CF6C;
  color: #F1FFE7;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  padding: .35rem 1.2rem;
  border-radius: 7px;
  border: #F1FFE7 solid 2px;
  font-size: 1.3rem;
  min-width: 7rem;
  cursor: pointer;
  text-shadow: black 0px 0px 3px;
  outline: none;
  transition: 0.1s;

  &:hover {
    transform: scale(1.03);
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
