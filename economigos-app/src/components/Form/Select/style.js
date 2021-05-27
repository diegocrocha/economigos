import styled from 'styled-components';

export const Select = styled.select`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #bbbbbb;
  width: 100%;
  height: 50px;
  position: absolute;
  transition: .1s;
  outline: none;
  padding: 0px 5px;
  padding-top: 10px;

  &:focus {
    border-bottom: 2px solid ${props => props.primary ? "#44CF6C" : "#312F2F"};
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 1rem 0;

  select:focus + label, select:valid + label {
    top: -10px;
    left: 0px;
    font-size: 14px;
    color: ${props => props.primary ? "#44CF6C" : "#312F2F"};
    font-weight: bold;
  }
`

export const Label = styled.label`
  z-index: 10;
  position: absolute;
  top: 12px;
  background-color: transparent;
  padding: 5px;
  padding-bottom: 5px;
  left: 0px;
  font-size: 15px;
  color: #aaa;
  pointer-events: none;
  transition: .2s;
`
