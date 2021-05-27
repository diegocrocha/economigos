import styled from 'styled-components';

export const NavBar = styled.nav`
  margin-top: 2rem;
`;

export const ListHeader = styled.ul`
  list-style: none;
  font-weight: 500;
  font-size: 16px;
  display: inline-flex;
`

export const ItemList = styled.li`
  color: #F1FFE7;

  &:hover {
    cursor: pointer;
    &:after {
      content: "";
      display: block;
      width: 100%;
      background-color: #44CF6C;
      height: 2px;
    }
  }

  &:nth-child(n + 2) {
    margin-left: 67px;
  }
`
