import styled from 'styled-components';
import Bcg from '../../assets/bcg-login.png'
import BloobImage from '../../assets/bloob-login.svg'

export const Login = styled.section`
  background-image: url(${Bcg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
`;

export const ContainerSign = styled.div`
  background-color: white;
  border-radius: 7px;
  display: grid;
  align-items: center;
  width: 80vw;
  height: 70vh;
  margin: 0vh 10vw;
  grid-template-columns: 50% 50%;
  box-shadow: rgba(0,0,0, 0.8) 0px 0px 20px;
  overflow: hidden;

  @media only screen and (max-width: 900px) {
    & {
      grid-template-columns: 100%;
    }
  }
`
export const DivAux = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top: 2rem;
  display: flex;
  align-items: center;
`

export const Bloob = styled.div`

  background-image: url(${BloobImage});
  background-repeat: no-repeat;
  background-size: auto;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 900px) {
    & {
      display: none;
  }

}
`

export const FormSign = styled.div`
  width: 70%;
  margin: 0 15%;
  text-align: center;

  h1{
    margin-top: 1.5rem;
  }

  @media only screen and (max-width: 360px) {
    & {
      width: 80%;
      margin: 0 10%;
    }
  }

`

export const ContainerButtons = styled.div`
  margin: 3.5rem 25% 0 25%;

  @media only screen and (max-width: 960px) {
    & {
      margin: 3.5rem 22.5% 0 22.5%;
    }
  }

  @media only screen and (max-width: 420px) {
    & {
      margin: 3.5rem 20% 0 20%;
    }
  }

  @media only screen and (max-width: 400px) {
    & {
      margin: 3.5rem 15% 0 15%;
    }
  }

`

export const ButtonSignUp = styled.button`
  background-color: #44CF6C;
  color: #F1FFE7;
  font-weight: 700;
  padding: .25rem 1.2rem;
  border-radius: 7px;
  border: #44CF6C solid 2px;
  font-size: 1.3rem;
  width: 100%;
  cursor: pointer;
  text-shadow: black 0px 0px 3px;
  outline: none;
  transition: 0.1s;
  margin: 1rem 0;

  &:hover {
    transform: scale(1.03);
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`

export const ButtonSignIn = styled.button`
  background-color: transparent;
  color: #312F2F;
  font-weight: 700;
  padding: .25rem 1.2rem;
  border-radius: 7px;
  border: #312F2F solid 2px;
  font-size: 1.3rem;
  width: 100%;
  cursor: pointer;
  outline: none;
  transition: 0.1s;
  margin: 1rem 0;

  &:hover {
    transform: scale(1.03);
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`