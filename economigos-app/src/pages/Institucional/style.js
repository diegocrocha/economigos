import styled from 'styled-components';
import BcgHome from '../../assets/bcgHome.png'
import BcgDiferencial from '../../assets/bcgDiferencial.svg'

export const Home = styled.section`
  height: 100vh;
  padding: 0 49px;
  background-image: url(${BcgHome});
  background-position: center center;
  background-repeat: no-repeat;
`;

export const TitleHome = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #F1FFE7;
  margin-top: 90px;
`

export const TextHome = styled.p`
  width: 50%;
  color: #F1FFE7;
  line-height: 1.3;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 22px;
`

export const Diferencial = styled.section`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  height: 118vh;
  background-size: 100%;
  background-position: center center;
  background-image: url(${BcgDiferencial});

  h1 {
    width: 100%;
    margin-top: 2rem;
  }
`

export const ContainerDiferencial = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 255px 255px 255px;
  justify-content: center;
  align-items: center;
  column-gap: 150px;
`

export const Meta = styled.section`
  min-height: 150vh;
  background-size: 100%;
  background-color: transparent;

  h1 {
    color: #F1FFE7;
  }
`