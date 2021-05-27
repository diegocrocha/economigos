import styled from 'styled-components';

export const HeaderSign = styled.div`
    text-align: center;
    position: fixed;
    width: 100%;
    z-index: 99;
    top: 0px;
    height: 5rem;

    img {
        margin-top: 1rem;
        height: 4rem;
    }

    button {
      margin-top: 1rem;
      margin-right: 2rem;
    }

    @media only screen and (max-width: 550px) {
    button {
      margin-right: 0px;
    }
  }

  @media only screen and (max-width: 390px) {
    img {
      height: 3rem;
    }
    button {
      padding: .3rem 1rem;
      min-width: 5rem;
    }
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
