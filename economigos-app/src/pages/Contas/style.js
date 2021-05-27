import styled from 'styled-components';
import BalancoMensal from "../../components/BalancoMensal/BalancoMensal"

export const Contas = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

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

export const UltimasAtividades = styled.div` 
  width: 49.5%;
  height: 48%;
  margin-top: 2%;
  border: 3px solid #E4E4E4;
  border-radius: 14px;

  .Titulo{
    margin-left: 7%;
    width: 93%;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-end;
    height: 18%;
    font-weight: 600;
    color: #32A287;
  }

  .DownloadUltimasAtividades{
    width: 95%;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
    height: 19%;
    margin-right: 2%;

    div{
      font-size: 0.6rem;
      width: 45%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      border: 1.5px solid #32A287;
      padding: 2px;
      border-radius: 7px;
      font-weight: 500;
      color: #32A287;

      &:hover{
        cursor: pointer;
        box-shadow: 0px 0px 5px grey;
      }
    }
  }
`;

export const GroupAtividades = styled.div`
  height: 63%;
  width: 100%;
  overflow: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-image: linear-gradient(-90deg, #C4C4C4 6%, #C4C4C4 8%, transparent 83%);
    border-radius: 7px;        /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #C4C4C4;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid #C4C4C4;  /* creates padding around scroll thumb */
  }
`


export const BalancoMensalContas = styled.div`
  width: 49.5%;
  margin-left: 1%;
  margin-top: 2%;
  height: 48%;
  border: 3px solid #E4E4E4;
  border-radius: 14px;

  .tituloBalanco{
    width: 97%;
    height: 18%;
    display: flex;
    align-items: flex-end;
    margin-left: 3%;
    
    img{
      height: 80%;
      margin-right: 2%;
    }

    .titleChart{
      font-size: 1rem;
      font-weight: 700;
      color: #32A287;
    }
  }

  .porcoCinza{
    height: 80%;
    margin: auto;
  }

  .textoSemLancamentos{
    font-size: 0.7rem;
    width: 100%;
    text-align: center;
    margin-top: 0.2rem;
    color: #ababab;
  }

  .chartBalanco{
    max-width: 100%;
    padding: 10px;
    height: 67%;
  }

  .chartDescription{
    height: 14%;
    width: 75%;
    margin-left: 15%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
`;

