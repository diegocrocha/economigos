import styled from 'styled-components';

export const ButtonS = styled.button`
  background-color: transparent;
  color: #44CF6C;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  padding: .35rem 1.2rem;
  border-radius: 7px;
  border: #44CF6C solid 2px;
  font-size: 1.3rem;
  min-width: 7rem;
  cursor: pointer;
  outline: none;
  transition: 0.1s;
  box-shadow: #F1FFE7 0px 0px 3px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.62);

  &:hover {
    transform: scale(1.03);
    background-color: #44CF6C;
    text-shadow: black 0px 0px 3px;
    color: #F1FFE7;
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;