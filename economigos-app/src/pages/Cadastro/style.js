import styled from 'styled-components'
import Bcg from '../../assets/bcg-cadastro.png'
import BloobImage from '../../assets/bloob-cadastro.svg'

export const Cadastro = styled.div`
  background-image: url(${Bcg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  overflow: hidden;
`;

export const Bloob = styled.div`

  background-image: url(${BloobImage});
  background-repeat: no-repeat;
  background-size: auto;
  margin: -5px 0 0 -5px;
  height: 110%;
  width: 100%;

  @media only screen and (max-width: 900px) {
    & {
      display: none;
  }

}
`

export const DivAux2 = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`
