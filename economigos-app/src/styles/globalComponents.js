import styled from 'styled-components';

export const TabLayout = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  overflow: hidden;

`;

export const GroupMenu = styled.div`
    z-index: 1;
    width: 100%;
    height: 27%;
    display: flex;
    align-items: center;
    border: 3px solid #E4E4E4;
    border-bottom: none;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;

`;

export const ImgBtnAdicionar = styled.img`
    height: 35px;
    width: 20%;
    &:hover{
      cursor: pointer;
      filter: drop-shadow(0px 0px 2px grey);
    }
`;

export const ImgBtnProximo = styled.img`
    height: 30px;
    position: relative;
    left: 2%;

    &:hover{
      cursor: pointer;
      filter: drop-shadow(1px 0px 3px grey);
    }
`;

export const WrapperModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background-color: rgba(0,0,0,.8);
  display: flex;
  z-index: 1000!important;

`

export const Modal = styled.div`
  width: 45%;
  height: 80%;
  border-radius: 8px;
  margin-left: 27.5%;
  padding: 15px 20px;
  margin-top: 5%;
  margin-bottom: 10%;
  opacity: 0;
  overflow: hidden;
  transform: scale(.7);
  animation: scaleUp .3s forwards;
  background-color: white;

  @keyframes scaleUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  .groupInputs {
    display: flex;

    div {
      width: 90%;
      margin: 15px 5%;
    }
  }

  h1 {
    text-align: center;
    color: ${props => props.type == "RECEITA" ? "rgb(50, 162, 135)" : "#A23232"};
  }

  .inputWidth {
      width: 90%;
      margin: 15px 5%;
  }

  .wrapperInputs {
    margin-top:4%;
    display: grid;
    grid-template-columns: 1fr;
  }
`

export const ButtonClose = styled.button`
  width: 25px;
  height: 25px;
  font-weight: 600;
  float: right;
  border: none;
  border-radius: 50%;
  margin-bottom: 20px;
  background-color: #A23232;
  cursor: pointer;
  color: white;
`

export const Button = styled.button`
  background-color: ${props => props.color};
  color: #F1FFE7;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  padding: .35rem 1.2rem;
  border-radius: 7px;
  border: #F1FFE7 solid 2px;
  font-size: 1.3rem;
  min-width: 7rem;
  cursor: pointer;
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

export const SimpleButton = styled.button`
  background-color: transparent;
  color: #312F2F;
  outline: none;
  font-size: 13px!important;
  border: none;
  border-left: 2px ${props => props.color} solid;
  padding-left: 13px;
  margin-left: 2.5%;
  font-weight: 600;
  cursor: pointer;
`

export const GroupButtonsModal = styled.div`
  display: flex;
  width: 90%;
  margin-left: 5%;
`

export const InfoItemSelected = styled.div`
    margin-top: -5px;
    height: 23%;
    width: 100%;
    background-color: #E4E4E4;
    border: 3px solid #E4E4E4;
    border-bottom: none;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const GroupInfosContaCartao = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;

    p{
      width: 100%;
      font-weight: 600;
    }

    div{
      width: 100%;
      font-weight: 700;
      font-size: 0.9rem;

      span{
        font-size: 1.9rem;
      }
    }
`